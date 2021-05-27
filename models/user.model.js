const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const { Schema } = mongoose;

const User = new Schema({
	id: String,
	firstName: String,
	lastName: String,
	emailAddress: String,
	password: String
});
/**
 * 
 * */
User.statics.getAll = function () {
	// Find all users
	return UserModel.find({}).then(users => {
		return users;
	});
};
/**
 * 
 * @param {any} body
 */
User.statics.createUser = async function (body) {
	const newUser = new UserModel({
		id: body.id,
		firstName: body.firstName,
		lastName: body.lastName,
		emailAddress: body.emailAddress,
		password: body.password
	});
	const createdUser = await newUser.save();
	return createdUser;
}
/**
 * 
 * @param id
 */
User.statics.getByEmail = async function (email) {
	const user = await UserModel.findOne({
		emailAddress: email
	});
	return user;
}

const UserModel = mongoose.model('userModel', User, 'userModels');
module.exports = UserModel;
