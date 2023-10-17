const express = require("express");
const router = express.Router();
const {
	getQuestions,
	createQuestion,
	getQuestion,
} = require("../controllers/question");
const validator = require("../middlewares/validator");
const jwtValidator = require("../middlewares/jwt");
const {createQuestionSchema, paramsSchema} = require("../validations/question");

router.get("/questions", getQuestions);
router.get("/questions/:id", getQuestion);
router.post("/questions", createQuestion);

module.exports = router;