'use strict'

const express = require('express')
const Router = express.Router
const baseRoute = Router()
const {ROOT_PATH} = require('../env-config')

baseRoute.get('/', (req, res, next) => {
	res.status(200).json({
		songs_url: `${ROOT_PATH}/songs`,
		song_url: `${ROOT_PATH}/songs/{id}`
	})
})

module.exports = baseRoute
