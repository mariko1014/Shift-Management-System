const express = require("express");
const router = express.Router();

const {
    registerUser
} = require("../controllers/authController");

// 新規登録API
router.post("/register", registerUser);

module.exports = router;