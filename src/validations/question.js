const Joi = require("joi");

exports.createQuestionSchema = Joi.object({
	question: Joi.string().required(),
	answer: Joi.array().required(),
	categoryID : Joi.object().required(),
});

exports.updateQuestionSchema = Joi.object({
	question: Joi.string().optional(),
	answer: Joi.array().optional(),
}).min(1);

exports.paramsSchema = Joi.object({
	id: Joi.number().required(),
});
