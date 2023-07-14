const express = require('express');
const bodyParser = require('body-parser');

const createApp = () => {
	const app = express();

	app.use(express.json());
	app.use(bodyParser.json());

	return app;
};

module.exports = createApp;
