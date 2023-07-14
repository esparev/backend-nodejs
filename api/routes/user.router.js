// @ts-check
const express = require('express');
const passport = require('passport');
const UserService = require('../services/user.service');
const validatorHandler = require('../../middlewares/validator.handler');

const router = express.Router();
const service = new UserService();
const { getUserSchema, updateUserSchema } = require('../schemas/user.schema');

const getUsers = async (req, res, next) => {
	try {
		const users = await service.find();
		res.status(200).json(users);
	} catch (error) {
		next(error);
	}
};

const getUser = async (req, res, next) => {
	try {
		const { id } = req.params;
		const user = await service.findOne(id);
		res.status(200).json(user);
	} catch (error) {
		next(error);
	}
};

const updateUser = async (req, res, next) => {
	try {
		const { id } = req.params;
		const body = req.body;
		const updatedUser = await service.update(id, body);
		res.status(200).json({ updatedUser, message: 'user updated' });
	} catch (error) {
		next(error);
	}
};

const deleteUser = async (req, res, next) => {
	try {
		const { id } = req.params;
		const deletedUser = await service.delete(id);
		res.status(200).json({ deletedUser, message: 'user deleted' });
	} catch (error) {
		next(error);
	}
};

router.get('/', passport.authenticate('jwt', { session: false }), getUsers);
router.get(
	'/:id',
	passport.authenticate('jwt', { session: false }),
	validatorHandler(getUserSchema, 'params'),
	getUser,
);
router.patch(
	'/:id',
	passport.authenticate('jwt', { session: false }),
	validatorHandler(getUserSchema, 'params'),
	validatorHandler(updateUserSchema, 'body'),
	updateUser,
);
router.delete(
	'/:id',
	passport.authenticate('jwt', { session: false }),
	deleteUser,
);

module.exports = router;
