const express = require("express");
const router = express.Router()
const userController = require('../controllers/userController');
const jwt = require("jsonwebtoken");

// const verifyToken = (req, res, next) => {
//   const token = req.body.token;
//   console.log(req.body);
//   if (!token) {
//     res.status(401).send({ error: "no token provided" });
//   }
//   jwt.verify(token, "mykeysecret", (err, decoded) => {
//     if (err) {
//       res.send({ error: "Authentication failed" });
//     } else {
//       next();
//     }
//   });
// };
router.post("/register", userController.signup);
router.post("/login", userController.login);
router.get('/users/:id', userController.users);
router.post('/addprofile/:id',userController.addProfile);
module.exports = router; 