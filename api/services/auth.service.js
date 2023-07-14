// @ts-check
const bcrypt = require('bcrypt');
const boom = require('@hapi/boom');
const jwt = require('jsonwebtoken');
const UserService = require('./user.service');
const service = new UserService();
const { config } = require('../../config');

/**
 * Auth Service class to manage the logic of the auth.
 *
 * #### Example
 * ```javascript
 * const service = new AuthService();
 * ```
 *
 * #### Functions
 * ```javascript
 * // Finds the user with the email and password
 * service.getUser(email, password);
 * // Signs a JWT token with the user information
 * service.signToken(user);
 * ```
 */
class AuthService {
	/**
	 * Finds the user with the email and password and validates the existence
	 * of a user  by comparing the provided password with the stored password.
	 * @param {string} email - user email
	 * @param {string} password - user password
	 * @returns {Promise<Object>} user that matches the email and password
	 */
	async getUser(email, password) {
		const user = await service.findByEmail(email);
		if (!user) {
			throw boom.unauthorized();
		}

		const isMatch = await bcrypt.compare(password, user.password);
		if (!isMatch) {
			throw boom.unauthorized();
		}

		delete user.dataValues.password;
		return user;
	}

	/**
	 * Signs a JWT token with the user information.
	 * @param {object} user - user object
	 * @returns {object} the user and the signed token
	 */
	signToken(user) {
		const payload = { sub: user.id, username: user.username, role: user.role };

		const token = jwt.sign(payload, config.jwtSecret, { expiresIn: '24h' });
		delete user.dataValues.recoveryToken;

		return { token };
	}
}

module.exports = AuthService;
