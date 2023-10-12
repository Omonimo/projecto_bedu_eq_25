const {
	findById,
	insert,
} = require("../services/recordtests");

exports.createRecordTest = async function (request, response) {
	console.log("Post");
	const { score, completed } = request.body;
	const recordTest = await insert({ score, completed });
	response.status(201).json(recordTest);
};


exports.getRecordTest = async function (request, response) {
	const { id } = request.body;
	const recordTest = await findById(id);
	response.status(200).json(recordTest);
};

