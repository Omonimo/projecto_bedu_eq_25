const {
	findAll,
	findById,
	insert,
} = require("../services/question");

exports.getQuestions = async function (request, response) {
    const q = request.id;
	const questions = await findAll();
	response.status(200).json(questions);
};

exports.getQuestion = async function (request, response) {
	const { id } = request.params;
	const question = await findById(id);
	response.status(200).json(question);
};

exports.createQuestion = async function (request, response) {
	const { question, answer, categoyID } = request.body;
	const newQuestion = await insert({ question, answer, categoyID });
	response.status(201).json(newQuestion);
};