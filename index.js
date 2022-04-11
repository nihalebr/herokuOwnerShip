const express = require('express');
const mongoose = require('mongoose');
const app = express();
const expressLayouts = require('express-ejs-layouts');
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
const subscribersRoute = require('./routes/subscribers');
const homeRoute = require('./routes/home');


db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('Connected to MongoDB'));

app
    .set('view engine', 'ejs')
    .set('views', __dirname + '/views')
    .set('layout', 'layouts/layout')
    .use(expressLayouts)
    .use(express.static('public'))
    .use(express.json())
    .use('/', homeRoute)
    .use('/subscribers', subscribersRoute)
    .listen(PORT, () => console.log(`Listening on ${PORT}`));