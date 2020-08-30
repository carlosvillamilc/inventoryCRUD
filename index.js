const express = require('express');

const bodyParser = require('body-parser');
const path = require('path');
//Database
const db = require('./config/database');

const PORT = process.env.PORT || 5000
const app = express()

app.use(express.json());

//DB Authentication
db.authenticate().then(() => {

    console.log('Connection has been established successfully.');

}).catch(err => {

console.error('Unable to connect to the database:', err);

});

app.get('/', (req, res) => res.json({ message: 'Hello World' }))

//App Routes
app.use('/orion/producto',require('./routes/producto'));
app.use('/orion/articulo',require('./routes/articulo'));
app.use('/orion/cantidad',require('./routes/cantidad_articulo'));

app.listen(PORT, () => console.log(`Server listening on port ${PORT}!`))