const Question = require("../models/question");

exports.findAll = function () {
	return Question.find();
};

exports.findById = function (id) {
	return Question.findById(id);
};

exports.insert = function (data) {
	return Question.create(data);
};

exports.update = async function (id, data) {
	await Question.update(data, {
		where: {
			id,
		},
	});
};

exports.deleteById = async function (id) {
	const question = await Question.findByPk(id);
	await question.destroy();
};