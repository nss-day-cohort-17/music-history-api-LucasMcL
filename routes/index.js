'use strict'
// Routes
// GET    /
// 	- Lists endpoint categories
// GET    /songs
//   - Returns all songs
//   - Returns relevant endpoints on root level
// GET    /songs/{id}
// 	 - Returns one song or 404 error
// 	 - Returns relevant endpoints on root level
// DELETE /songs/{id}
//   - Returns status code 200 and deleted row on success
//   - Returns 404 if song is not found
// PATCH  /songs/{id}
//   - Returns status code 200 and new song object on success
//   - Returns 404 if song not found
//   - Returns 400 if request body is messed up
// POST   /songs
//   - Returns status code 200 and id of just created thing
//   - Returns 400 if bad request

const express = require('express')
const Router = express.Router
const router = Router()

const baseRoute = require('./root')
const songsRoute = require('./songs')

router.use(baseRoute)
router.use(songsRoute)

module.exports = router









