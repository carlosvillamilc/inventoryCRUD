const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Cantidad_articulo = require('../models/Cantidad_articulo')

//Get All
router.get('/',(req,res)=>{
    Cantidad_articulo.findAll()
    .then(cantidad_articulos => {                
        res.json(cantidad_articulos);
    })
    .catch(err => console.log(err))
});
//Get by id
router.get('/:id',(req,res)=>{
    
    Cantidad_articulo.findAll({
        where:{
            id_articulo : req.params.id
        }
    })
    .then(cantidad_articulos => {                
        res.json(cantidad_articulos);
    })
    .catch(err => console.log(err))
});
module.exports = router