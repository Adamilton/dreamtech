// // const Services = require('../config_db');

// // class Service {

// //   async getService(req, res) {
// //     let id = req.query.id;
// //     const str = (id) ? 'WHERE id = $1' : 'WHERE id <> $1';
// //     id = (id) ? id : -1;
// //     const service = Services();
// //     await service.connect();
// //     try {
// //       const query = `SELECT * FROM services ${str} AND delete_at IS NULL`;
// //       const values = [id];
// //       const card = await service.query(query, values);

// //       if (card.rowCount === 0) return res.status(400).json("ID não encontrado");
// //       res.json(card.rows);

// //     } catch (e) {
// //       if (e.code == "22P02") return res.status(400).json("ID incorreto!");
// //       return res.status(400).json(e.code);

// //     } finally {
// //       await service.end();
// //     }
// //   }

// //   /* async getAllService(req,res) {
// //       let id = req.query.id;
// //       console.log(id)
// //       const str = (id) ? 'WHERE id = $1' : 'WHERE id <> $1' ;
// //       id = (id) ? id : -1;
// //       const client = Services();
// //       await client.connect();
// //       try {
// //           const query = `select * from services ${str}` ;
// //           console.log(query);
// //           const allClient = await client.query(query,[id]);
// //           res.json(allClient.rows);
// //       } catch (error) {
// //           res.status(404).send("falhou!")
// //       }
// //       finally{
// //           await client.end();
// //       }
// //   } */
// // }
// // const service = new Service()
// // module.exports = service;

// const express = require("express");
// const Services = require("../config_db");

// class Service {
//   async postAdd(req, res) {
//     const { name, email, password, signed } = req.body;

//     const service = Services();
//     await service.connect();
//     try {
//       const query = `INSERT INTO services (name, email, cpf, password, signed) VALUES ($1, $2, $3, $4)`;
//       const values = [name, email, password, signed];
//       await service.query(query, values);
//       console.log("Dentro do try");
//       res.json("OK");
//     } catch (e) {
//       console.log("Dentro do cath", e.detail);
//       if (e.code == "23505") return res.status(400).json("Email já existente");
//     } finally {
//       await service.end();
//     }
//   }

//   async getAll(req, res) {
//     const service = Services();
//     await service.connect();
//     try {
//       const query = `SELECT * FROM services WHERE delete_at IS NULL`;
//       const card = await service.query(query);
      
//       if (card.rowCount === 0) return res.status(400).json("ID não encontrado");
//       res.json(card.rows);
//     } catch (e) {
//       if (e.code == "22P02") return res.status(400).json("ID incorreto!");
//       return res.status(400).json(e.code);
//     } finally {
//       await service.end();
//     }
//   }

//   async getServices(req, res) {
//     id = req.query.id;
//     const service = Services();
    
//     await service.connect();

//     try {
//       const query = `SELECT * FROM services WHERE id = $1 AND delete_at IS NULL`;
//       const values = [id];
//       const card = await service.query(query, values);

//       if (card.rowCount === 0) return res.status(400).json("ID não encontrado");
//       res.json(card.rows);
//     } catch (e) {
//       if (e.code == "22P02") return res.status(400).json("ID incorreto!");
//       return res.status(400).json(e.code);
//     } finally {
//       await service.end();
//     }
//   }

//   async putServices(req, res) {
//     const { name, email, cpf, password, id } = req.body;
//     const client = Services();
//     await client.connect();
//     try {
//       const query = `UPDATE services SET name = $1, email = $2, cpf = $3, password = $4, updated_at = CURRENT_TIMESTAMP WHERE id = $5`;
//       const values = [name, email, cpf, password, id];
//       const user = await client.query(query, values);
//       console.log(user);
//       if (user.rowCount == 0) return res.status(400).json("ID não encontrado");
//       res.json("User atualizado com sucesso!");
//     } catch (e) {
//       console.log(e);
//       if (e.code == "23505") return res.status(400).json("Email já existente");
//       if (e.code == "22P02") return res.status(400).json("ID incorreto!");

//       return res.status(400).json(e.code);
//     } finally {
//       await client.end();
//     }
//   }

//   async delete(req, res) {
//     const { id } = req.query.id;
//     const services = Services();
//     await services.connect();
//     try {
//       const query = `UPDATE services SET updated_at = CURRENT_TIMESTAMP, deleted_at = CURRENT_TIMESTAMP WHERE id = $1`;
//       const values = [id];
//       const user = await services.query(query, values);

//       if (user.rowCount == 0) return res.status(400).json("ID não encontrado");
//       res.json("User excluído com sucesso!");
//     } catch (e) {
//       console.log(e);
//       // if( e.code == "23505") return res.status(400).json("Email já existente");
//       if (e.code == "22P02") return res.status(400).json("ID incorreto!");

//       return res.status(400).json(e.code);
//     } finally {
//       await services.end();
//     }
//   }
// }
// const service = new Service();
// module.exports = service;

const Services = require('../config_db');

class Service {

  async postAdd(req, res) {
    const { name, email, password, signed } = req.body;
    
    const service = Services();
    await service.connect();
    try {
      const query = `INSERT INTO services (name, email, cpf, password, signed) VALUES ($1, $2, $3, $4)`;
      const values = [name, email, password, signed];
      await service.query(query, values);
      console.log("Dentro do try");
      res.json("OK");
    } catch (e) {
      console.log("Dentro do cath", e.detail);
      if (e.code == "23505") return res.status(400).json("Email já existente");
    } finally {
      await service.end();
    }p
  }

  async getAll(req, res) {
    console.log("entrou get services")
    const service = Services();
    await service.connect();
    try {
      const query = `SELECT * FROM services WHERE delete_at IS NULL`;
      const card = await service.query(query);

      if (card.rowCount === 0) return res.status(400).json("ID não encontrado");
      res.json(card.rows);

    } catch (e) {
      if (e.code == "22P02") return res.status(400).json("ID incorreto!");
      return res.status(400).json(e.code);

    } finally {
      await service.end();
    }
  }

  async getServices(req, res) {
    id = req.query.id;
    const service = Services();
    await service.connect();
    try {
      const query = `SELECT * FROM services WHERE id = $1 AND delete_at IS NULL`;
      const values = [id];
      const card = await service.query(query, values);

      if (card.rowCount === 0) return res.status(400).json("ID não encontrado");
      res.json(card.rows);

    } catch (e) {
      if (e.code == "22P02") return res.status(400).json("ID incorreto!");
      return res.status(400).json(e.code);

    } finally {
      await service.end();
    }
  }

  async putServices(req, res) {
    const { name, email, cpf, password, id } = req.body;
    const client = Services();
    await client.connect();
    try {
      const query = `UPDATE services SET name = $1, email = $2, cpf = $3, password = $4, updated_at = CURRENT_TIMESTAMP WHERE id = $5`;
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
    const services = Services();
    await services.connect();
    try {
      const query = `UPDATE services SET updated_at = CURRENT_TIMESTAMP, deleted_at = CURRENT_TIMESTAMP WHERE id = $1`;
      const values = [id];
      const user = await services.query(query, values);

      if (user.rowCount == 0) return res.status(400).json("ID não encontrado");
      res.json('User excluído com sucesso!');
    } catch (e) {
      console.log(e);
      // if( e.code == "23505") return res.status(400).json("Email já existente");
      if (e.code == "22P02") return res.status(400).json("ID incorreto!");

      return res.status(400).json(e.code);
    } finally {
      await services.end();
    }
  }
}
const service = new Service()
module.exports = service;
