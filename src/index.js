require("dotenv").config();

const { initDatabase } = require("./db");
initDatabase();

const express = require("express");
const app = express();

app.use(express.json());

const userRouter = require("./routers/user");
const authRouter = require("./routers/auth");
const categoriesRouter = require("./routers/categories");
const recordTestsRouter = require("./routers/recordtests");
// const commentRouter = require("./routers/comment");

// const validationError = require("./middlewares/validation-error");
// const unknownError = require("./middlewares/unknown-error");

// // Rutas
app.use(userRouter);
app.use(authRouter);
app.use(categoriesRouter);
app.use(recordTestsRouter);
// app.use(commentRouter);

// // Manejo de errores
// app.use(validationError);
// app.use(unknownError);

app.listen(process.env.SERVER_PORT, function () {
	console.log("> Escuchando puerto " + process.env.SERVER_PORT);
});
