'use strict'

//TODO: make successful post request

const Song = require('../models/song')

function getSongs(req, res, next) {
	Song.getAll()
		.then(songs => res.status(200).json({songs}))
		.catch(err => next(err))
}

/**
 * Gets a song with given id from database
 * @param  {integer} req.params.id
 * Returns status 400 if id is not positive integer
 * Returns status 404 if song not found
 * Returns {songs: [{}, {}...]} if successful
 */
function getSongById(req, res, next) {
	const {params} = req
	const id = params.id
	Song.getById(id)
		.then(song => res.status(200).json({song}))
		.catch(error => res.status(404).json(error))
}

/**
 * Deletes song in database with given id
 * @return {[type]}        [description]
 */
function deleteSongById(req, res, next) {
	const {params} = req
	const id = params.id
	Song.deleteById(id)
		.then(song => res.status(200).json({song}))
		.catch(error => res.status(404).json(error))
}

/**
 * Adds song to database
 * @param {object}   req.body - Object with song data
 */
function addSong(req, res, next) {
	const song = req.body

	Song.add(song)
		.then(song => res.status(200).json({song}))
		.catch(error => res.status(404).json(error))
}

module.exports = {getSongs, getSongById, deleteSongById, addSong}
