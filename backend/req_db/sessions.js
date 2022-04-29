const Sessions = require('../config_db');

class Session {

  async postSessions(req, res) {
    const newUser = req.body;
    console.log(newUser);
    const client = Sessions();
    await client.connect();
    try {
      const query = `INSERT INTO sessions (name, email, cpf, password, signed) VALUES ($1, $2, $3, $4, $5)`;
      const values = [newUser.name, newUser.email, newUser.cpf, newUser.password, newUser.signed];
      await client.query(query, values);

      console.log("Dentro do try", newUser);

      res.json("OK");
    } catch (e) {
      console.log("Dentro do cath", e.detail);
      if (e.code == "23505") return res.status(400).json("Email já existente");
    } finally {
      await client.end();
    }

  }
  async getAllSessions(req, res) {
    console.log("entrou na sessions")
    const Session = Sessions();
    await Session.connect();
    try {
      const query =  `SELECT * FROM sessions WHERE delete_at IS NULL`;
      const allSession = await Session.query(query);
      console.log(allSession.rows[0])
      res.status(200).json(allSession.rows);
    } catch (error) {
      res.status(404).send("falhou!")
    }
    finally {
      await Session.end();
    }
  }


}

const client = new Session()
module.exports = client;