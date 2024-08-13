const express = require('express');
const movieRoutes = require('./routes/movieRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();

app.use('/movies', movieRoutes);
app.use('/users', userRoutes);

module.exports = app;
