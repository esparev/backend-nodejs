// @ts-check
const express = require('express');
const authRouter = require('./auth.router');
const bookRouter = require('./book.router');
const userRouter = require('./user.router');

/**
 * Router function to encapsulate the routes of the API.
 * @param {*} app Express application.
 */
function routerApi(app) {
	const router = express.Router();
	app.use('/', router);

	router.use('/auth', authRouter);
	router.use('/books', bookRouter);
	router.use('/users', userRouter);
}

module.exports = routerApi;
