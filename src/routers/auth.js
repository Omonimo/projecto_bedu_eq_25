const express = require("express");
const router = express.Router();
const { login } = require("../controllers/auth");
// const validator = require("../middlewares/validator");
// const { loginSchema } = require("../validations/user");
//Lineas comentadas para validar mas tarde
// router.post("/login", validator.body(loginSchema), login);

router.post("/login", login);

module.exports = router;
