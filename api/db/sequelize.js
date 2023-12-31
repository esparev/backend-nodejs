// @ts-check
const { config } = require('../../config');
const { Sequelize } = require('sequelize');
const setupModels = require('./models');

const options = {
	dialect: 'postgres',
	logging: config.isProd ? false : console.log,
};

if (config.isProd) {
	options.dialectOptions = {
		ssl: { rejectUnauthorized: false },
	};
}

const sequelize = new Sequelize(config.dbUrl, options);

setupModels(sequelize);

module.exports = sequelize;
