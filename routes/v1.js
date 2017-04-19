'use strict';

const {Router} = require('express')
const router = Router()
const {PORT, ROOT_PATH} = require('./root')
const {getSongEndpoints, getSongs, getSongById} = require('../controllers/songCtrl')

// Routes to be used after api/v1 as defined in app.js
router.get('/', (req, res, next) => {
	res.status(200).json({
		title: "Music History API",
		home: `${ROOT_PATH}`,
		songs: `${ROOT_PATH}/api/v1/songs`
	})
})

router.get('/songs', getSongEndpoints)
router.get('/songs/all', getSongs)
router.get('/songs/:id', getSongById)

module.exports = {v1Routes: router}
