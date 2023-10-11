const User = require("../models/user");

exports.insert = function (data) {
	return User.create(data);
};

exports.deleteUser = function (username) {
	return User.deleteOne({userName:username});
};
