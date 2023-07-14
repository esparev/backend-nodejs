'use strict';

const { BOOK_TABLE } = require('../models/book.model');

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(BOOK_TABLE, [
			{
				isbn: '978-1-10188-671-7',
				title: 'Sleeping Giants',
				author: 'Sylvain Neuvel',
				release_date: '2016-04-26',
				user_id: 1,
			},
			{
				isbn: '978-1-10190-424-4',
				title: 'Dark Matter',
				author: 'Blake Crouch',
				release_date: '2016-07-26',
				user_id: 1,
			},
			{
				isbn: '978-0-06286-894-7',
				title: 'The Guest List',
				author: 'Lucy Foley',
				release_date: '2020-02-20',
				user_id: 1,
			},
			{
				isbn: '978-1-52474-516-5',
				title: 'Lock Every Door: A Novel',
				author: 'Riley Sager',
				release_date: '2019-07-02',
				user_id: 1,
			},
			{
				isbn: '978-0-06231-611-0',
				title: 'Sapiens: A Brief History of Humankind',
				author: 'Yuval Noah Harari',
				release_date: '2011-04-28',
				user_id: 1,
			},
			{
				isbn: '978-0-55341-802-6',
				title: 'The Martian',
				author: 'Andy Weir',
				release_date: '2011-09-27',
				user_id: 1,
			},
			{
				isbn: '978-6-07077-734-9',
				title: 'El Mexicano de Buchenwald',
				author: 'Julio Godinez',
				release_date: '2018-03-20',
				user_id: 1,
			},
			{
				isbn: '978-6-07075-244-5',
				title: 'El Tatuador de Auschwitz',
				author: 'Heather Morris',
				release_date: '2018-01-11',
				user_id: 1,
			},
			{
				isbn: '978-0-44101-359-3',
				title: 'Dune',
				author: 'Frank Herbert',
				release_date: '1965-06-01',
				user_id: 1,
			},
			{
				isbn: '978-0-52555-949-8',
				title: 'The Midnight Library',
				author: 'Matt Haig',
				release_date: '2020-08-13',
				user_id: 1,
			},
		]);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete(BOOK_TABLE, null);
	},
};
