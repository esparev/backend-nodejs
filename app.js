const express = require('express');
const bodyParser = require('body-parser');
const rateLimit = require('express-rate-limit');
const passport = require('passport');
const routerApi = require('./api/routes');

const {
	errorHandler,
	ormErrorHandler,
	boomErrorHandler,
} = require('./middlewares/error.handler');

/**
 * Creates an express application with all middlewares and routes.
 * @returns {express.Application} express app
 */
const createApp = () => {
	const app = express();

	const limiter = rateLimit({
		windowMs: 15 * 1000, // 15 seconds
		max: 100, // limit each IP to 100 requests per windowMs
	});

	// Import passport strategies
	require('./utils/auth');

	// Express middlewares
	app.use(limiter);
	app.use(passport.initialize());
	app.use(express.json());
	app.use(bodyParser.json({ limit: '5mb' }));

	routerApi(app);

	// Error middleware handlers
	app.use(boomErrorHandler);
	app.use(ormErrorHandler);
	app.use(errorHandler);

	return app;
};

module.exports = createApp;
