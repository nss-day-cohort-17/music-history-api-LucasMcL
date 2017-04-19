'use strict'

const {bookshelf} = require('../db/database')

const Song = bookshelf.Model.extend({
	tableName: 'Song'
}, {
	/**
	 * Fetches all songs from the database
	 * @return {Promise}
	 *         - Resolves with songs as JSON
	 *         - Rejects with err
	 */
	getAll: function() {
		return this.forge().fetchAll()
			.then(rows => rows.toJSON())
			.catch(err => err)
	},
	/**
	 * Fetches single song with given id
	 * @param  {integer} - id: id of song
	 * @return {Promise}
	 *         - Resolves with song as JSON
	 *         - Rejects with err
	 */
	getById: function(id) {
		return this.forge().where({SongId: id}).fetch()
			.then(row => row.toJSON())
			.catch(() => new Error(`Could not find song with id ${id}.`))
	}
})

module.exports = bookshelf.model('Song', Song)
