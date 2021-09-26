const path = require('path')

const express = require('express')

const router = express.Router()

const rootDir = require('./practice-path')

router.get('/add-product', (req, res, next) => {
   res.sendFile(path.join(rootDir, 'practice-view-add-product.html'))
})

router.post('/add-product', (req, res, next) => {
    console.log(req.body)
    res.redirect('/')
})

module.exports = router