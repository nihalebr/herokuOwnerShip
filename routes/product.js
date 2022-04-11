const express = require('express')
const axios = require('axios')
const { render } = require('express/lib/response')
const router = express.Router()

router.get('/', async (req, res) => {
    res.render('product/index', { title: "Latest Block|Ledge Explorer", response: "test render" })
})
router.get('/:id', async (req, res) => {
    await axios.get(`http://codesperfect.com:5000/hash/${req.params.id}`).then(function (response) {
        res.render('product/index', { title: "Product Information|Ledge Explorer" })
    }).catch(function (error) {
        res.render('err', { title: "API error|Ledge Explorer", response: error, layout: './layouts/error' })
    })
})

module.exports = router