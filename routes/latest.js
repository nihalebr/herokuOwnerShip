const express = require('express')
const axios = require('axios')
const router = express.Router()



router.get('/', async (req, res) => {
    await axios.get('http://codesperfect.com:5000/latest_block').then(function (response) {
        res.render('latest/index', { title: "Latest Block|Ledge Explorer", response: response })
    }).catch(function (error) {
        res.render('err', { title: "API error|Ledge Explorer", response: error, layout: './layouts/error' })
    })
})


module.exports = router;