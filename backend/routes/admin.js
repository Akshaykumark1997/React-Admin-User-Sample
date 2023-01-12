const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");


router.post('/',adminController.login);
router.get('/allUsers',adminController.allUsers);
router.post('/addUser',adminController.addUser);
router.get('/editUser/:id',adminController.editUser);
router.post('/editUser/:id',adminController.postEditUser);
router.get('/deleteUser/:id',adminController.deleteUser);
module.exports = router;
