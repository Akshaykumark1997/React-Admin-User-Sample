const express = require("express");
const router = express.Router()
const userController = require('../controllers/userController');
const jwt = require("jsonwebtoken");
const passport = require("passport");

router.post("/register", userController.signup);
router.post("/login", userController.login);
module.exports = router;