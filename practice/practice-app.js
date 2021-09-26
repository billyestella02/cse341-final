const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const app = express()

const admin = require('./practice-admin')
const shop = require('./practice-shop')

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'practice-css')))

app.use('/admin', admin)
app.use(shop)

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'practice-404.html'))
})

app.listen(3000)

// /****************************
//  * This file is for studying 
//  * purposes only
//  ****************************/

// // these won't be needed anymore, since we use express
// // const http = require('http')
// // const server = http.createServer(app)
// // server.listen(3000)

// const express = require('express')
// const bodyParser = require('body-parser')

// const app = express()

// // this is be executed upon every request from the client
// // app.use((req, res, next) => {
// //    console.log('middleware #1')
    
//     // this function allows us to 'travel' to the next middleware
//     // next() 
// // })

// // app.use('/', (req, res, next) => {
// //     console.log('middleware #2')
// //     res.send('<h1>Hello from Express!</h1>')
// // })


// /**********************************
//  * ASSIGNMENT #1 SOLUTION - EXPRESS
//  *********************************/
// // app.use('/users', (req, res, next) => {
// //     console.log('All hail users')
// //     res.send('<h1 style="color: green">All hail users</h1>')
// // })

// // app.use('/', (req, res, next) => {
// //     console.log('BASIC!')
// //     res.send('<h1>BASIC!</h1>')
// // })

// app.user(bodyParser.urlencoded({extended: false}))

// app.use('/add-product', (req, res, next) => {
//     console.log('middleware #1')
//     res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form> ')
// })

// app.use('/product', (req, res, next) => {
//     res.redirect('/')
// })

// // the 'express' way
// app.listen(3000)
