'use strict';

const { USER_TABLE } = require('../models/user.model');

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(USER_TABLE, [
			{
				id: 1,
				name: 'Jose Maria',
				email: 'esparev@hotmail.com',
				password:
					'$2b$13$2EqoUWtBwOB/rVz6uvH/muS.OjgiDbQnhtSVjhjbSynTs4gyO1HhW',
			},
		]);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete(USER_TABLE, null);
	},
};
