'use strict'

// <require a song model>
// < use model methods for getting all songs and one song then send the response back with the data>
// <stretch goal: methods for adding, deleting, editing a song>

//TODO: Figure out how song id is going to be passed
//	Through query?
//	Through route params?

const Song = require('../models/song')
const {PORT, ROOT_PATH} = require('../routes/root')

function getSongEndpoints(req, res, next) {
	res.status(200).json({
		home: `${ROOT_PATH}`,
		v1: `${ROOT_PATH}/api/v1`,
		songs: {
			getAll: `${ROOT_PATH}/api/v1/songs/all`,
			getOneById: `${ROOT_PATH}/api/v1/songs/{id}`
		}
	})
}

function getSongs(req, res, next) {
	Song.getAll()
		.then(songs => res.status(200).json({songs}))
		.catch(err => next(err))
}

function getSongById(req, res, next) {
	const {params} = req
	const id = params.id
	Song.getById(id)
		.then(song => res.status(200).json({song}))
		.catch(err => {
			console.log(`Error: ${err}`)
			next(err)
		})
}

module.exports = {getSongs, getSongById, getSongEndpoints}
