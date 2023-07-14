// @ts-check
const express = require('express');
const passport = require('passport');
const AuthService = require('../services/auth.service');
const UserService = require('../services/user.service');
const validatorHandler = require('../../middlewares/validator.handler');

const router = express.Router();
const authService = new AuthService();
const userService = new UserService();

const { createUserSchema } = require('../schemas/user.schema');

/**
 * Login function to authenticate the user by signing a token.
 */
async function login(req, res, next) {
	try {
		const user = req.user;
		res.status(201).json(authService.signToken(user));
	} catch (error) {
		next(error);
	}
}

const register = async (req, res, next) => {
	try {
		await userService.create(req.body);
		res.status(201).json({ message: 'true' });
	} catch (error) {
		next(error);
	}
};

router.post(
	'/login',
	passport.authenticate('local', { session: false }),
	login,
);
router.post('/register', validatorHandler(createUserSchema, 'body'), register);

module.exports = router;
