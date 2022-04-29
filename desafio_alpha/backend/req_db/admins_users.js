const Admins_users = require('../config_db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const jwtTokens = require("../utils/jwt-helpers");
const { JSONCookies } = require('cookie-parser');
class AdminsUser {

    async postRegister(req, res) {
        const {email, password} = req.body;
        const hashPassword =  await bcrypt.hash(password,10);
      
        const admins_user = Admins_users();
        await admins_user.connect();
        try {
            const query = `INSERT INTO admins_users (email, password) VALUES ($1, $2)`;
            const values = [email,hashPassword];
            await admins_user.query(query, values);
           
            res.status(200).json("OK");
        } catch (e) {
            
            if (e.code == "23505") return res.status(400).json("Email já existente");
        } finally {
            await admins_user.end();
        }
    }

    async postLogin(req, res,) {
        const {email,password} = req.body;
        const admins_user = Admins_users();
        await admins_user.connect();

        try {
            const query = `SELECT * FROM admins_users WHERE email = $1 AND delete_at IS NULL`;
            const values = [email];
            const result = await Admins_users.query(query, values);
            if (result.rowCount === 0) return res.status(400).json("Email não cadastrado");
            const passHashedDB = result.rows[0].password;
            const match = await bcrypt.compare(password, passHashedDB )
            if(!match) return res.status(400).json("Senha incorreta");       

            let tokens = jwtTokens(result.rows[0]);
       
            res.cookie('refresh_token', tokens.refreshToken, {
                //httpOnly: true,
                sameSite:'none',
                secure: true
            })
            res.status(200).json(tokens);



           /*  try {
                const secret = process.env.SECRET
                const token = jwt.sign({
                    id : result.rows[0].id
                },
                secret,
                )
                res.status(200).json({msg: "Autenticação realizada  com sucesso", token})
            } catch (error) {
                
            } */



            //res.json({name: result.rows[0].name,email:result.rows[0].email, cpf: result.rows[0].cpf});

        } catch (e) {
            if (e.code == "22P02") return res.status(400).json("ID incorreto!");
            return res.status(400).json(e.code);

        } finally {
            await Admins_users.end();
        }
    }

    async getAll(req, res) {
        console.log("entrou no get all")
        const admins_users = Admins_users();
        await admins_users.connect();
        try {
            const query = 'SELECT * FROM admins_users WHERE AND delete_at IS NULL';
            const allAdmins_users = await Admins_users.query(query);
            res.status(200).json(allAdmins_users.rows);
        } catch (error) {
            res.status(404).send("falhou!")
        }
        finally {
            await admins_users.end();
        }
    }

    async putUpdate(req, res) {
        const {id, email,password } = req.body;
        const admins_users = Admins_users();
        await admins_users.connect();
        try {
            const query = `UPDATE admins_users SET email = $1, password = $2, updated_at = CURRENT_TIMESTAMP WHERE id = $3 WHERE AND delete_at IS NULL`;
            const values = [email, password, id];
            const user = await admins_users.query(query, values);
            console.log(user);
            if (user.rowCount == 0) return res.status(400).json("ID não encontrado");
            res.json('User atualizado com sucesso!');
        } catch (e) {
            console.log(e);
            if (e.code == "23505") return res.status(400).json("Email já existente");
            if (e.code == "22P02") return res.status(400).json("ID incorreto!");

            return res.status(400).json(e.code);
        } finally {
            await admins_users.end();
        }
    }

    async deleteAdmins_users(req, res) {
        const { id } = req.query.id;
        const Admins_users = Admins_users();
        await Admins_users.connect();
        try {
            const query = `UPDATE admins_users SET updated_at = CURRENT_TIMESTAMP, deleted_at = CURRENT_TIMESTAMP WHERE id = $1`;
            const values = [id];
            const user = await Admins_users.query(query, values);
            //console.log(user);
            if (user.rowCount == 0) return res.status(400).json("ID não encontrado");
            res.json('User excluído com sucesso!');
        } catch (e) {
            console.log(e);
            // if( e.code == "23505") return res.status(400).json("Email já existente");
            if (e.code == "22P02") return res.status(400).json("ID incorreto!");

            return res.status(400).json(e.code);
        } finally {
            await Admins_users.end();
        }
    }
}
const adminsUser = new AdminsUser()
module.exports = adminsUser;