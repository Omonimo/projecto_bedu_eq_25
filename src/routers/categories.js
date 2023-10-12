const express = require("express");
const router = express.Router();
const {
	getPosts,
	createPost,
	getPost,
	deletePost,
	updatePost,
} = require("../controllers/categories");
//Lineas comentadas para hacer la validacion despues
// const validator = require("../middlewares/validator");
// const jwtValidator = require("../middlewares/jwt");
// const {
// 	createPostSchema,
// 	updatePostSchema,
// 	paramsSchema,
// } = require("../validations/post");

// router.get("/posts", getPosts);
// router.get("/posts/:id", validator.params(paramsSchema), getPost);
// router.post(
// 	"/posts",
// 	jwtValidator,
// 	validator.body(createPostSchema),
// 	createPost
// );
// router.put(
// 	"/posts/:id",
// 	jwtValidator,
// 	validator.params(paramsSchema),
// 	validator.body(updatePostSchema),
// 	updatePost
// );
// router.delete(
// 	"/posts/:id",
// 	jwtValidator,
// 	validator.params(paramsSchema),
// 	deletePost
// );

router.get("/posts", getPosts);
router.get("/posts/:id", getPost);
router.post("/posts",createPost);
router.put("/posts/:id",updatePost);
router.delete("/posts/:id",deletePost);

module.exports = router;
