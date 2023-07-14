// @ts-check
const boom = require('@hapi/boom');
const { models } = require('../db/sequelize');

/**
 * Book Service class to manage the logic of the books.
 *
 * #### Example
 *
 * ```javascript
 * const service = new BookService();
 * ```
 *
 * #### Functions
 *
 * ```javascript
 * // Finds all books in the array of objects
 * service.find();
 * // Finds the book with the provided id
 * service.findOne(id);
 * // Creates a book with the provided data
 * service.create(data);
 * // Updates the book with the provided id
 * service.update(id, changes);
 * // Deletes the book with the provided id
 * service.delete(id);
 * ```
 */
class BookService {
	/**
	 * Finds all books in the array of objects.
	 * @returns {Promise<Array>} Array with all books
	 */
	async find() {
		const books = await models.Book.findAll({
			include: [
				{
					as: 'user',
					model: models.User,
					attributes: { exclude: ['password'] },
				},
			],
		});
		return books;
	}

	/**
	 * Finds the book with the provided id.
	 * @param {number} id - id of the book
	 * @returns {Promise<Object>} Object with the book
	 */
	async findOne(id) {
		const book = await models.Book.findByPk(id, {
			include: [
				{
					as: 'user',
					model: models.User,
					attributes: { exclude: ['password'] },
				},
			],
		});
		if (!book) {
			throw boom.notFound('Book not found');
		}
		return book;
	}

	/**
	 * Creates a book with the provided data.
	 * @param {object} data - data of the book
	 * @returns {Promise<Object>} Object with the book created
	 */
	async create(data) {
		const book = await models.Book.create(data);
		return book;
	}

	/**
	 * Updates the book with the provided id.
	 * @param {number} id - id of the book
	 * @param {object} changes - data of the book
	 * @returns {Promise<Object>} Object with the book updated
	 */
	async update(id, changes) {
		const book = await this.findOne(id);
		const response = await book.update(changes);
		return response;
	}

	/**
	 * Deletes the book with the provided id.
	 * @param {number} id - id of the book
	 * @returns {Promise<Object>} Object with the book deleted
	 */
	async delete(id) {
		const book = await this.findOne(id);
		await book.destroy();
		return { id };
	}
}

module.exports = BookService;
