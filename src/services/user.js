const User = require("../models/user");

exports.insert = (data) => {
	return User.create(data);
};

exports.deleteUserService = (username) => {
	return User.deleteOne(username);
};

exports.findByUsername = (username) => {
	return User.findOne(username)
}