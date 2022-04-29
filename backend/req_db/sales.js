const Sales = require('../config_db');

class Service {

  async postAdd(req, res) {
    const { name, email, password, signed } = req.body;
    
    const sale = Sales();
    await sale.connect();
    try {
      const query = `INSERT INTO sales (name, email, cpf, password, signed) VALUES ($1, $2, $3, $4)`;
      const values = [name, email, password, signed];
      await sale.query(query, values);
      console.log("Dentro do try");
      res.json("OK");
    } catch (e) {
      console.log("Dentro do cath", e.detail);
      if (e.code == "23505") return res.status(400).json("Email já existente");
    } finally {
      await sale.end();
    }p
  }

  async getAll(req, res) {
    const sale = Sales();
    await sale.connect();
    try {
      const query = `SELECT * FROM sales WHERE delete_at IS NULL`;
      const card = await sale.query(query);

      if (card.rowCount === 0) return res.status(400).json("ID não encontrado");
      res.json(card.rows);

    } catch (e) {
      if (e.code == "22P02") return res.status(400).json("ID incorreto!");
      return res.status(400).json(e.code);

    } finally {
      await sale.end();
    }
  }

  async getsales(req, res) {
    id = req.query.id;
    const sale = Sales();
    await sale.connect();
    try {
      const query = `SELECT * FROM sales WHERE id = $1 AND delete_at IS NULL`;
      const values = [id];
      const card = await sale.query(query, values);

      if (card.rowCount === 0) return res.status(400).json("ID não encontrado");
      res.json(card.rows);

    } catch (e) {
      if (e.code == "22P02") return res.status(400).json("ID incorreto!");
      return res.status(400).json(e.code);

    } finally {
      await sale.end();
    }
  }

  async putsales(req, res) {
    const { name, email, cpf, password, id } = req.body;
    const client = Sales();
    await client.connect();
    try {
      const query = `UPDATE sales SET name = $1, email = $2, cpf = $3, password = $4, updated_at = CURRENT_TIMESTAMP WHERE id = $5`;
      const values = [name, email, cpf, password, id];
      const user = await client.query(query, values);
      console.log(user);
      if (user.rowCount == 0) return res.status(400).json("ID não encontrado");
      res.json('User atualizado com sucesso!');
    } catch (e) {
      console.log(e);
      if (e.code == "23505") return res.status(400).json("Email já existente");
      if (e.code == "22P02") return res.status(400).json("ID incorreto!");

      return res.status(400).json(e.code);
    } finally {
      await client.end();
    }
  }

  async delete(req, res) {
    const { id } = req.query.id;
    const sales = Sales();
    await sales.connect();
    try {
      const query = `UPDATE sales SET updated_at = CURRENT_TIMESTAMP, deleted_at = CURRENT_TIMESTAMP WHERE id = $1`;
      const values = [id];
      const user = await sales.query(query, values);

      if (user.rowCount == 0) return res.status(400).json("ID não encontrado");
      res.json('User excluído com sucesso!');
    } catch (e) {
      console.log(e);
      // if( e.code == "23505") return res.status(400).json("Email já existente");
      if (e.code == "22P02") return res.status(400).json("ID incorreto!");

      return res.status(400).json(e.code);
    } finally {
      await sales.end();
    }
  }



}
const sale = new Sales()
module.exports = sale;