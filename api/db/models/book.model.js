// @ts-check
const { Model, DataTypes } = require('sequelize');
const modelOptions = require('../../../utils/modelOptions');

const BOOK_TABLE = 'books';
const { USER_TABLE } = require('./user.model');
const options = modelOptions(false, 'Book', BOOK_TABLE);

const BookSchema = {
	id: {
		primaryKey: true,
		allowNull: false,
		type: DataTypes.INTEGER,
		autoIncrement: true,
	},
	isbn: {
		allowNull: false,
		unique: true,
		type: DataTypes.STRING,
	},
	title: {
		allowNull: false,
		type: DataTypes.STRING(500),
	},
	author: {
		allowNull: false,
		type: DataTypes.STRING,
	},
	releaseDate: {
		allowNull: false,
		field: 'release_date',
		type: DataTypes.DATE,
	},
	usersId: {
		allowNull: false,
		field: 'users_id',
		type: DataTypes.INTEGER,
		references: {
			model: USER_TABLE,
			key: 'id',
		},
		onUpdate: 'CASCADE',
		onDelete: 'SET NULL',
	},
};

class Book extends Model {
	static config(sequelize) {
		return { sequelize, ...options };
	}

	static associate(models) {
		this.belongsTo(models.User, { as: 'user' });
	}
}

module.exports = { Book, BookSchema, BOOK_TABLE };
