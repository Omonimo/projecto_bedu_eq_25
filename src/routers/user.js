const express = require("express");
const router = express.Router();
const { createUser, deleteUser, getUser } = require("../controllers/user");
// const { createUserSchema } = require("../validations/user");
// const validator = require("../middlewares/validator");
//estas lineas son las originales, yo quite la validacion para meterlas despues
// router.post("/users", validator.body(createUserSchema), createUser);

router.post("/users", createUser);
router.delete("/users/:id", deleteUser);
router.get("/users", getUser);

module.exports = router;
