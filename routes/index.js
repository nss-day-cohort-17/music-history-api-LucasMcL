'use strict'

const {rootRoute, PORT, ROOT_PATH} = require('./root')
const {v1Routes} = require('./v1')

module.exports = {
	rootRoute,
	v1Routes,
	ROOT_PATH,
	PORT
}
