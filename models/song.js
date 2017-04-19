'use strict'

const {bookshelf} = require('../db/ormConfig')

const Song = bookshelf.Model.extend({
	tableName: 'Song',
	idAttribute: 'SongId'
}, {
	/**
	 * Fetches all songs from the database
	 * @return {Promise}
	 *         - Resolves with songs as JSON
	 *         - Rejects with err
	 */
	getAll: function() {
		return this.forge().fetchAll()
	},
	/**
	 * Fetches single song with given id
	 * @param  {integer} - req.params.id: id of song
	 * @return {Promise}
	 *         - Resolves with song as JSON
	 *         - Rejects with err
	 */
	getById: function(id) {
		return this.forge({SongId: id}).fetch({require: true})
	},
	/**
	 * Deletes single song with given id
	 * @param  {integer} - req.params.id: id of given song
	 * @return {Promise}
	 *         - Resolves with empty object
	 *         - Rejects with err
	 */
	deleteById: function(id) {
		return this.forge({SongId: id}).destroy({require: true})
	},
	add: function(song) {
		return this.forge(song).save({require: true})
	}
})

module.exports = bookshelf.model('Song', Song)
