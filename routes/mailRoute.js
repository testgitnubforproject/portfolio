const express = require("express")

const { mailSend } = require("../controllers/mailController");

const router = express.Router();


// 

router.post("/sendmail", mailSend)

module.exports = router;