const Recordtests = require("../models/recordtests");

exports.findById = function (id) {
	return Recordtests.findById(id)
};


exports.insert = function (data) {
	return Recordtests.create(data);
};

