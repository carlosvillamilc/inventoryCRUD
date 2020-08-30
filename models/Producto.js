const Sequelize = require('sequelize');
const db = require('../config/database');

const Producto = db.define('articulo',{
    id_articulo: {
          type: Sequelize.INTEGER
    },
    nombre_producto: {
        type: Sequelize.STRING
    },
    id_estado: {
        type: Sequelize.INTEGER
    }
});

module.exports = Producto;