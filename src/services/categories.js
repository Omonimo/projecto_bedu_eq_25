const categories = require("../models/categories");

exports.findAll = function () {
	return categories.find()
};

exports.findById = function (id) {
	return categories.findById(id);
};

exports.insert = function (data) {
	return categories.create(data);
};

exports.update = function (id, data) {
	return categories.findOneAndUpdate(
		{_id:id},
		data
	)
};

exports.deleteById = function (id) {
	return categories.deleteOne({_id:id});
};
