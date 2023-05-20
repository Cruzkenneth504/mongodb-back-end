const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');

const PORT = 3001;
const app = express()

app.use(express.urlencoded({extended: true}));
app.use(express.json);
app.use(routes);

db.once('open', ()=> {
console.log(`API server running on ${PORT}`);
})