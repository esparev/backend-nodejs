// @ts-check
const Joi = require('joi');

const id = Joi.number().integer().min(1);
const isbn = Joi.string().max(255);
const title = Joi.string().max(500);
const author = Joi.string().max(255);
const releaseDate = Joi.date().iso();
const userId = Joi.number().integer().min(1);

/**
 * Schema to validate the getBook request
 */
const getBookSchema = Joi.object({
	id: id.required(),
});

/**
 * Schema to validate the createBook request
 */
const createBookSchema = Joi.object({
	isbn: isbn.required(),
	title: title.required(),
	author: author.required(),
	releaseDate: releaseDate.required(),
	userId: userId.required(),
});

/**
 * Schema to validate the updateBook request
 */
const updateBookSchema = Joi.object({
	isbn,
	title,
	author,
	releaseDate,
	userId,
});

module.exports = { getBookSchema, createBookSchema, updateBookSchema };
