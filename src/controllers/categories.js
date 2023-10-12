const {
	findAll,
	findById,
	insert,
	deleteById,
	update,
} = require("../services/categories");

exports.getPosts = async function (request, response) {
	const posts = await findAll();
	response.status(200).json(posts);
};

exports.getPost = async function (request, response) {
	const { id } = request.params;
	const post = await findById(id);
	response.status(200).json(post);
};

exports.createPost = async function (request, response) {
	const { name } = request.body;
	const post = await insert({ name });
	response.status(201).json(post);
};

exports.updatePost = async function (request, response) {
	const { name } = request.body;
	const { id } = request.params;

	await update(id, { name });
	response.status(204).end();
};

exports.deletePost = async function (request, response) {
	const { id } = request.params;
	await deleteById(id);
	response.status(204).end();
};
