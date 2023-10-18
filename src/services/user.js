const User = require("../models/user");

exports.insert = (data) => {
	return User.create(data);
};

exports.deleteUserService = (id) => {
	return User.deleteOne({_id:id});
};

exports.findByUsername = (username) => {
	return User.findOne(username)
}