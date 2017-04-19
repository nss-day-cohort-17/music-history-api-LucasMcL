'use strict'

const express = require('express')
const Router = express.Router
const songsRoute = Router()

const {getSongs,
			getSongById,
			deleteSongById}
= require('../controllers/songCtrl')

songsRoute.get('/songs', getSongs)
songsRoute.get('/songs/:id', getSongById)
songsRoute.delete('/songs/:id', deleteSongById)

module.exports = songsRoute

