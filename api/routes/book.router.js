// @ts-check
const express = require('express');
const passport = require('passport');
const jsonwebtoken = require('jsonwebtoken');
const BookService = require('../services/book.service');
const validatorHandler = require('../../middlewares/validator.handler');

const router = express.Router();
const service = new BookService();
const {
	getBookSchema,
	createBookSchema,
	updateBookSchema,
} = require('../schemas/book.schema');

const getBooks = async (req, res, next) => {
	try {
		const books = await service.find();
		res.status(200).json(books);
	} catch (error) {
		next(error);
	}
};

const getBook = async (req, res, next) => {
	try {
		const { id } = req.params;
		const book = await service.findOne(id);
		res.status(200).json(book);
	} catch (error) {
		next(error);
	}
};

const createBook = async (req, res, next) => {
	try {
		const token = req.headers.authorization.split(' ')[1];
		const userId = jsonwebtoken.decode(token)?.sub;

		const body = req.body;
		let isbn = body.isbn;

		if (body.isbn.includes('-')) {
			isbn = body.isbn.replace(/-/g, '');
		}

		const newBook = await service.create({ ...body, isbn: isbn, userId: userId });
		res.status(201).json({ newBook: newBook.id, message: 'book created' });
	} catch (error) {
		next(error);
	}
};

const updateBook = async (req, res, next) => {
	try {
		const { id } = req.params;
		const body = req.body;
		const updatedBook = await service.update(id, body);
		res.status(200).json({ updatedBook, message: 'book updated' });
	} catch (error) {
		next(error);
	}
};

const deleteBook = async (req, res, next) => {
	try {
		const { id } = req.params;
		const deletedBook = await service.delete(id);
		res.status(200).json({ deletedBook, message: 'book deleted' });
	} catch (error) {
		next(error);
	}
};

router.get('/', getBooks);
router.get('/:id', validatorHandler(getBookSchema, 'params'), getBook);
router.post(
	'/',
	passport.authenticate('jwt', { session: false }),
	validatorHandler(createBookSchema, 'body'),
	createBook,
);
router.patch(
	'/:id',
	passport.authenticate('jwt', { session: false }),
	validatorHandler(getBookSchema, 'params'),
	validatorHandler(updateBookSchema, 'body'),
	updateBook,
);
router.delete(
	'/:id',
	passport.authenticate('jwt', { session: false }),
	deleteBook,
);

module.exports = router;
