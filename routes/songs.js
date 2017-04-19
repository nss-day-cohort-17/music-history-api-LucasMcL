'use strict'

const express = require('express')
const Router = express.Router
const songsRoute = Router()

const {getSongs,
			getSongById,
			deleteSongById,
			addSong}
= require('../controllers/songCtrl')

songsRoute.get('/songs', getSongs)
songsRoute.get('/songs/:id', getSongById)
songsRoute.delete('/songs/:id', deleteSongById)
songsRoute.post('/songs', addSong)

module.exports = songsRoute

