const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

const cors = require('cors');
app.use(cors());

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/colors');

const colors = require('./routes/colors');
app.use('/api/colors', colors);

app.listen(3000);

module.exports = app;
