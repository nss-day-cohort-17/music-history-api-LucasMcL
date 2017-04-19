'use strict'

const express = require('express')
const app = express();
const bodyParser = require('body-parser')
require('dotenv').config()
const {rootRoute, v1Routes, ROOT_PATH, PORT} = require('./routes/')


app.locals.ROOT_PATH = ROOT_PATH
app.locals.PORT = PORT


app.use('/', rootRoute)
app.use('/api/v1', v1Routes)
// app.use('/api/v1', routes)

app.listen(PORT, function() {
	console.log(`listening on port ${PORT}`)
})



// <Include the router index file>
// <Setup your routes middleware>
// <catch any undefined routes with a 404 middleware>
// <Handle any errors that occur in the routing with error handlers defined at the bottom of our
// middleware stack>
