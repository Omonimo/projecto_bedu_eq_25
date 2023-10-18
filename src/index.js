require("dotenv").config();
module.exports = {
	SERVER_PORT: process.env.PORT || 3000
  }
const { initDatabase } = require("./db");
initDatabase();

const express = require("express");
const app = express();

app.use(express.json());

const userRouter = require("./routers/user");
const authRouter = require("./routers/auth");
const categoriesRouter = require("./routers/categories");
const recordTestsRouter = require("./routers/recordtests");
const questionRouter = require("./routers/question")
// const commentRouter = require("./routers/comment");

// const validationError = require("./middlewares/validation-error");
// const unknownError = require("./middlewares/unknown-error");

// // Rutas
app.use(userRouter);
app.use(authRouter);
app.use(categoriesRouter);
app.use(recordTestsRouter);
app.use(questionRouter);
// app.use(commentRouter);

// // Manejo de errores
// app.use(validationError);
// app.use(unknownError);

app.listen(process.env.SERVER_PORT, function () {
	console.log("> Escuchando puerto " + process.env.SERVER_PORT);
});
