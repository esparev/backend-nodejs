// @ts-check
const Joi = require('joi');

const id = Joi.number().integer().min(1);
const name = Joi.string().max(255);
const email = Joi.string().email().max(255);
const password = Joi.string().max(255);

/**
 * Schema to validate the getUser request
 */
const getUserSchema = Joi.object({
	id: id.required(),
});

/**
 * Schema to validate the createUser request
 */
const createUserSchema = Joi.object({
	name: name.required(),
	email: email.required(),
	password: password.required(),
});

/**
 * Schema to validate the updateUser request
 */
const updateUserSchema = Joi.object({
	name,
	email,
	password,
});

module.exports = { getUserSchema, createUserSchema, updateUserSchema };
