const routes = require('express').Router();
const multer = require('multer')
const multerConfig = require('./config/multer')
const client = require('./bd')

// routes.get("/", (req, res) => {
//     const query = `Select * `
//     client.connect();
//     client.query(query, service);
//     client.end
// });

// routes.post("/posts", multer(multerConfig).array('files',2), (req, res) => {
//     const path_background = req.files[0].path
//     const path_card_img = req.files[1].path
//     const query = `Insert Into services (background, card_img) values ($1, $2)`
//     const service = [path_background, path_card_img];
//     client.connect();
//     client.query(query, service);
//     client.end
//     console.log(req.files)
// });

routes.post("/posts", multer(multerConfig).single('file'), (req, res) => {
    const {path} = req.file    
    const query = `Insert Into services (background) values ($1)`
    const service = [path];
    client.connect();
    client.query(query, service);
    client.end
    console.log(req.file)
});

module.exports = routes;
