const express = require("express");
const router = express.Router();
const {
	createRecordTest,
	getRecordTest,
} = require("../controllers/recordtests");


router.post("/recordtests", createRecordTest);
router.get("/recordtests", getRecordTest);

module.exports = router;
