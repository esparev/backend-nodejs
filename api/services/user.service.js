// @ts-check
const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');
const { models } = require('../db/sequelize');

/**
 * User Service class to manage the logic of the users.
 *
 * #### Example
 *
 * ```javascript
 * const service = new UserService();
 * ```
 *
 * #### Functions
 *
 * ```javascript
 * // Finds all users in the array of objects
 * service.find();
 * // Finds the user with the provided id
 * service.findOne(id);
 * // Finds the user with the provided email
 * service.findByEmail(email);
 * // Creates a user with the provided data
 * service.create(data);
 * // Updates the user with the provided id
 * service.update(id, changes);
 * // Deletes the user with the provided id
 * service.delete(id);
 * ```
 */
class UserService {
	/**
	 * Finds all users in the array of objects.
	 * @returns {Promise<Array>} Array with all users
	 */
	async find() {
		const users = await models.User.findAll();
		return users;
	}

	/**
	 * Finds the user with the provided id.
	 * @param {number} id - id of the user
	 * @returns {Promise<Object>} Object with the user
	 */
	async findOne(id) {
		const user = await models.User.findByPk(id);
		if (!user) {
			throw boom.notFound('User not found');
		}
		return user;
	}

	/**
	 * Finds the user with the provided email.
	 * @param {string} email - email of the user
	 * @returns {Promise<Object>} Object with the user
	 */
	async findByEmail(email) {
		const user = await models.User.findOne({ where: { email } });
		return user;
	}

	/**
	 * Creates a user with the provided data.
	 * @param {object} data - data of the user
	 * @returns {Promise<Object>} Object with the user created
	 */
	async create(data) {
		const hash = await bcrypt.hash(data.password, 13);
		const user = await models.User.create({ ...data, password: hash });

		delete user.dataValues.password;

		return user;
	}

	/**
	 * Updates the user with the provided id.
	 * @param {number} id - id of the user
	 * @param {object} changes - data of the user
	 * @returns {Promise<Object>} Object with the user updated
	 */
	async update(id, changes) {
		const user = await this.findOne(id);
		const response = await user.update(changes);
		return response;
	}

	/**
	 * Deletes the user with the provided id.
	 * @param {number} id - id of the user
	 * @returns {Promise<Object>} Object with the user deleted
	 */
	async delete(id) {
		const user = await this.findOne(id);
		await user.destroy();
		return { id };
	}
}

module.exports = UserService;
