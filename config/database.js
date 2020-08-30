const Sequelize = require('sequelize')
//const db = new Sequelize('postgres://postgres:qwerty@localhost:5432/opticaOrionDB')

module.exports = new Sequelize('opticaOrionDB', 'postgres', 'qwerty', {
    host: 'localhost',
    dialect: 'postgres'
});
