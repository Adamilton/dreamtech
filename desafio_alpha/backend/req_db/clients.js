const Clients = require("../config_db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const jwtTokens = require("../utils/jwt-helpers");
const { JSONCookies } = require("cookie-parser");
class Client {
  async postRegister(req, res) {
    const { name, email, cpf, password, signed } = req.body;
    const hashPassword = await bcrypt.hash(password, 10);
    console.log(name, email, password);

    const client = Clients();
    await client.connect();
    try {
      const query = `INSERT INTO clients (name, email, cpf, password, signed) VALUES ($1, $2, $3, $4, $5)`;
      const values = [name, email, cpf, hashPassword, signed];
      await client.query(query, values);

      res.status(200).json("OK");
    } catch (e) {
      if (e.code == "23505") return res.status(400).json("Email já existente");
    } finally {
      await client.end();
    }
  }

  async postLogin(req, res) {
    console.log("entro aqui na tela de login");
    const { email, password } = req.body;
    const client = Clients();
    await client.connect();
    console.log(email, password);
    try {
      const query = `SELECT * FROM clients WHERE email = $1 AND delete_at IS NULL`;
      const values = [email];
      console.log("antes disso");
      const result = await client.query(query, values);
      console.log("depois da query");
      if (result.rowCount === 0)
        return res.status(400).json("Email não cadastrado");
      const passHashedDB = result.rows[0].password;
      const match = await bcrypt.compare(password, passHashedDB);
      console.log("match", match);
      if (!match) return res.status(400).json("Senha incorreta");

      let tokens = jwtTokens(result.rows[0]);
      console.log("tokens", tokens);

      res.cookie("acess_token", tokens.accessToken, {});
      res.status(200).json(tokens);
    } catch (e) {
      if (e.code == "22P02") return res.status(400).json("ID incorreto!");
      return res.status(400).json(e.code);
    } finally {
      await client.end();
    }
  }

  async getAll(req, res) {
    console.log("entrou no get all");
    const client = Clients();
    await client.connect();
    try {
      const query = "SELECT * FROM clients WHERE AND delete_at IS NULL";
      const allClient = await client.query(query);
      res.status(200).json(allClient.rows);
    } catch (error) {
      res.status(404).send("falhou!");
    } finally {
      await client.end();
    }
  }

  async putUpdate(req, res) {
    const { name, email, cpf, password, id } = req.body;
    const client = Clients();
    await client.connect();
    try {
      const query = `UPDATE clients SET name = $1, email = $2, cpf = $3, password = $4, updated_at = CURRENT_TIMESTAMP WHERE id = $5`;
      const values = [name, email, cpf, password, id];
      const user = await client.query(query, values);
      console.log(user);
      if (user.rowCount == 0) return res.status(400).json("ID não encontrado");
      res.json("User atualizado com sucesso!");
    } catch (e) {
      console.log(e);
      if (e.code == "23505") return res.status(400).json("Email já existente");
      if (e.code == "22P02") return res.status(400).json("ID incorreto!");

      return res.status(400).json(e.code);
    } finally {
      await client.end();
    }
  }

  async deleteClient(req, res) {
    const { id } = req.query.id;
    const client = Clients();
    await client.connect();
    try {
      const query = `UPDATE clients SET updated_at = CURRENT_TIMESTAMP, deleted_at = CURRENT_TIMESTAMP WHERE id = $1`;
      const values = [id];
      const user = await client.query(query, values);
      //console.log(user);
      if (user.rowCount == 0) return res.status(400).json("ID não encontrado");
      res.json("User excluído com sucesso!");
    } catch (e) {
      console.log(e);
      // if( e.code == "23505") return res.status(400).json("Email já existente");
      if (e.code == "22P02") return res.status(400).json("ID incorreto!");

      return res.status(400).json(e.code);
    } finally {
      await client.end();
    }
  }
}
const client = new Client();
module.exports = client;
