const Sequelize = require('sequelize');
const db = require('../config/database');
const Estado = require('./estado');

const Articulo = db.define('articulo',{
    id_articulo: {
          type: Sequelize.INTEGER,
          primaryKey: true, //if is not defined, sequelize query id as primary key
          autoIncrement: true
    },
    id_producto: {
        type: Sequelize.INTEGER
    },
    nombre_articulo: {
        type: Sequelize.STRING
    },
    descripcion_articulo: {
        type: Sequelize.STRING
    },
    serial_articulo: {
        type: Sequelize.STRING
    },
    precio_articulo: {
        type: Sequelize.INTEGER
    },
    id_estado: {
        type: Sequelize.INTEGER
    }
}, {
    freezeTableName: true,
    timestamps: false
});

module.exports = Articulo;