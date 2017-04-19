'use strict'

const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const router = require('./routes/')
const {PORT} = require('./env-config')

app.use(router)

app.listen(PORT, function() {
	console.log(`listening on port ${PORT}`)
})



// <Include the router index file>
// <Setup your routes middleware>
// <catch any undefined routes with a 404 middleware>
// <Handle any errors that occur in the routing with error handlers defined at the bottom of our
// middleware stack>
