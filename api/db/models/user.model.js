// @ts-check
const { Model, DataTypes } = require('sequelize');
const modelOptions = require('../../../utils/modelOptions');

const USER_TABLE = 'users';
const options = modelOptions(false, 'User', USER_TABLE);

const UserSchema = {
	id: {
		primaryKey: true,
		allowNull: false,
		type: DataTypes.INTEGER,
		autoIncrement: true,
	},
	name: {
		allowNull: false,
		type: DataTypes.STRING,
	},
	email: {
		allowNull: false,
		type: DataTypes.STRING,
		unique: true,
		validate: {
			isEmail: true,
		},
	},
	password: {
		allowNull: false,
		type: DataTypes.STRING,
	},
};

class User extends Model {
	static config(sequelize) {
		return { sequelize, ...options };
	}

	static associate(models) {
		this.hasMany(models.Book, { as: 'books', foreignKey: 'userId' });
	}
}

module.exports = { User, UserSchema, USER_TABLE };
