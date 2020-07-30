const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const requireDir = require('require-dir');

// Iniciando o app
const app = express();
app.use(express.json()); // permitir com que envie dados no formato JSON
app.use(cors()); // API pode ser acessada publicamente

// Conectando database
mongoose.connect('mongodb+srv://deploy:deploy@cluster0.jib52.mongodb.net/<dbname>?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true }); //nodeAPI é o nome da database

requireDir('./src/models/');

// Rotas
app.use("/api", require('./src/routes'));


app.listen(8000);
