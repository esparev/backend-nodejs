require('dotenv').config();

/**
 * Description of each environment variable.
 * @property {string} env - Runtime environment || dev
 * @property {boolean} isProd - Indicates if the app is running in production
 * @property {number} port - Listening port
 * @property {string} dbHost - Database host
 * @property {number} dbPort - Database port
 * @property {string} dbName - Database name
 * @property {string} dbUser - Database user
 * @property {string} dbPassword - Database password
 * @property {string} dbUrl - Database URL
 * @property {string} apiKey - API key
 * @property {string} jwtSecret - JWT secret
 */
const config = {
	env: process.env.NODE_ENV || 'dev',
	isProd: process.env.NODE_ENV === 'production',
	port: process.env.PORT || 3003,
	dbPort: process.env.DB_PORT,
	dbHost: process.env.DB_HOST,
	dbName: process.env.DB_NAME,
	dbUser: process.env.DB_USER,
	dbPassword: process.env.DB_PASSWORD,
	dbUrl: process.env.DB_URL,
	apiKey: process.env.API_KEY,
	jwtSecret: process.env.JWT_SECRET,
};

module.exports = { config };
