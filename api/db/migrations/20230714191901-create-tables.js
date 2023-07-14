'use strict';

const { UserSchema, USER_TABLE } = require('../models/user.model');
const { BookSchema, BOOK_TABLE } = require('../models/book.model');

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable(USER_TABLE, UserSchema);
		await queryInterface.createTable(BOOK_TABLE, BookSchema);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable(BOOK_TABLE);
		await queryInterface.dropTable(USER_TABLE);
	},
};
