const Sequelize = require('sequelize');
const db = require('../config/database');

const Estado = db.define('estado',{
      id_estado: {
          type: Sequelize.INTEGER
      },
      estado: {
        type: Sequelize.STRING
    },

});

module.exports = Estado;