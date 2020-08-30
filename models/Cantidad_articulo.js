'use strict';
const Sequelize = require('sequelize');
const db = require('../config/database');

const Cantidad_articulo = db.define('cantidad_articulo',{
    id_articulo: {
          type: Sequelize.INTEGER,
          primaryKey: true //if is not defined, sequelize query id as primary key
    },
    cantidad_disponible: {
        type: Sequelize.INTEGER
    } 

},{
    // disable the modification of table names; By default, sequelize will automatically
    // transform all passed model names (first parameter of define) into plural.
    // if you don't want that, set the following
    freezeTableName: true,
    timestamps: false
},{
    
});


module.exports = Cantidad_articulo;