const jwt = require("jsonwebtoken");
require("dotenv").config

 async function authenticateToken(req, res, next) {
  console.log("entou na autenticação")
    
   const token = req.cookies.acess_token;
    console.log(token)
    if (!token) {
        return res.status(403).json({msg: "Acesso negado!"})
    }
   try {
        const secret = process.env.ACCESS_TOKEN_SECRET;
        console.log(secret)
        const decode = await jwt.verify(token, secret);
        req.client_id = decode.id;
        console.log(secret);
        next()
    } catch (error) {
        res.status(403).json({msg: "Token inválido"});
    }

  }
  module.exports = authenticateToken;