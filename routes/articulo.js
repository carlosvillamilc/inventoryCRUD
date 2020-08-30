const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Articulo = require('../models/Articulo');


router.get('/',(req,res)=>{
    Articulo.findAll()
    .then(articulo => {
        console.log(articulo);
        res.json(articulo);
    })
    .catch(err => console.log(err))
});


//Get by id
router.get('/:id',(req,res)=>{    
    Articulo.findAll({
        where:{
            id_articulo : req.params.id
        }
    })
    .then(articulo => {                
        if(articulo.length != 0){
            res.json(articulo);
        }
        else{
            res.status(404).json({msg:'Articulo no encontrado'});
        }
        
    })
    .catch(err => console.log(err))
});

//Create Articulo
router.post('/nuevo',(req,res) =>{
    Articulo.create({
        id_producto : req.body.id_producto,
        nombre_articulo : req.body.nombre_articulo,
        descripcion_articulo : req.body.descripcion_articulo,
        serial_articulo : req.body.serial_articulo,
        precio_articulo : req.body.precio_articulo,
        id_estado: req.body.id_estado
        })
        .then(articulo =>{
            res.json(articulo)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({msg:'Error creando nuevo articulo'});
        })    
});

//Update member
router.put('/:id',(req,res) =>{

    Articulo.update(
        {
            nombre_articulo: req.body.nombre_articulo,
            descripcion_articulo: req.body.descripcion_articulo,
            serial_articulo: req.body.serial_articulo,
            precio_articulo: req.body.precio_articulo,
            id_estado: req.body.id_estado
            
        },{        
        where:{
            id_articulo : req.params.id
        }
    })
    .then(articulo => {    
        res.status(200).json({msg:`Actualizacion articulo ${req.params.id} exitosa`});
    })
    .catch(err =>{
        console.log(err)
        res.status(500).json({msg:`Error actualizando articulo ${req.params.id}`});
    })    
});

router.delete('/:id',(req,res)=>{

    Articulo.destroy({
        where:{
            id_articulo : req.params.id
        }
    })
    .then(articulo => {    
        res.status(200).json({msg:`Articulo ${req.params.id} borrado con exito`});
    })
    .catch(err =>{
        console.log(err)
        res.status(500).json({msg:`Error borrando articulo ${req.params.id}`});
    })    
    


});

module.exports = router;