'use strict'

const {Router} = require('express')
const router = Router()

const PORT = process.env.PORT || 5000
const ROOT_PATH = `http://localhost:${PORT}`

router.get('/', (req, res, next) => {
	res.status(200).json({
		title: "Music History API",
		v1: `${ROOT_PATH}/api/v1`
	})
})

module.exports = {rootRoute: router, ROOT_PATH, PORT}
