const { User, UserSchema } = require('./user.model');
const { Book, BookSchema } = require('./book.model');

function setupModels(sequelize) {
	User.init(UserSchema, User.config(sequelize));
	Book.init(BookSchema, Book.config(sequelize));

	User.associate(sequelize.models);
	Book.associate(sequelize.models);
}

module.exports = setupModels;
