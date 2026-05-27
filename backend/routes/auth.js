const express = require("express");
const router = express.Router();

const {
    registerUser,
    loginUser
} = require("../controllers/authController");

// 新規登録API
router.post("/register", registerUser);

// ログインAPI
router.post("/login", loginUser);

module.exports = router;