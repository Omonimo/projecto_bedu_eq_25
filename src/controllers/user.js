const { insert, deleteUserService } = require("../services/user");

exports.createUser = async function (request, response) {
	const { username, password } = request.body;
	const user = await insert({ username, password });
	response.status(201).json(user);
};

exports.deleteUser = async function (request, response) {
	const { username } = request.body;
	const user = await deleteUserService({ username });
	response.status(204).send();
};
