const express = require("express")

const { getUser, postUser } = require("../controllers/userController");

const router = express.Router();


// 

router.get("/getUser", getUser)
router.post("/postUser", postUser)

module.exports = router;