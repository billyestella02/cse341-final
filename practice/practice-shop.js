const express = require('express')

const router = express.Router()

const path = require('path')

const rootDir = require('./practice-path')

router.get('/', (req, res, next) =>{
    res.sendFile(path.join(rootDir, 'practice-view-shop.html'))
})

module.exports = router