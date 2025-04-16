// routes/userRoutes.js
const express = require("express");
const router = express.Router();
const { signupUser, loginUser } = require("../Controllers/userController");

router.post("/signup", signupUser);
router.post("/login", loginUser);

module.exports = router;
