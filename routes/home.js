const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/', async (req, res) => {
    await axios.get('http://codesperfect.com:5000/latest_block').then(function (response) {
        res.render('home', { title: "Latest Block|Ledge Explorer", response: response })
    }).catch(function (error) {
        res.render('err', { title: "API error|Ledge Explorer", response: error, layout: './layouts/error' })
    })
})
module.exports = router;