const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const path = require("path");
const validateRegisterInput = require("../validation/register");
const validateLoginInput = require("../validation/login");
const validateEditUser = require('../validation/editUser');
const User = require("../models/userSchema");
const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  login: (req, res) => {
    const { errors, isValid } = validateLoginInput(req.body);
    if (!isValid) {
      return res.status(400).json(errors);
    }
    const email = req.body.email;
    const password = req.body.password;
    if (
      process.env.AdminEmail === email &&
      process.env.AdminPassword === password
    ) {
      const payload = {
        email: email,
      };
      jwt.sign(
        payload,
        "secret",
        {
          expiresIn: 3600,
        },
        (err, token) => {
          if (err) console.error("There is some error in token", err);
          else {
            res.json({
              success: true,
              email: email,
              token: `Bearer ${token}`,
            });
          }
        }
      );
    } else {
      errors.password = "Incorrect email or password";
      return res.status(400).json(errors);
    }
  },
  allUsers: (req, res) => {
    User.find().then((allUsers) => {
      res.json({
        status: true,
        Users: allUsers,
      });
    });
  },
  addUser: (req, res) => {
    const { errors, isValid } = validateRegisterInput(req.body);
    if (!isValid) {
      return res.status(400).json(errors);
    }

    User.findOne({
      email: req.body.email,
    }).then((user) => {
      if (user) {
        res.status(400).json({ email: "email already exist" });
      } else {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          const password = hash;
          User.create({
            name: req.body.name,
            email: req.body.email,
            password,
          }).then((user) => {
            res.json(user);
          });
        });
      }
    });
  },
  editUser: (req, res) => {
    console.log(req.params.id);
    User.findOne({ _id: req.params.id }).then((user) => {
      res.json({ user });
    });
  },
  postEditUser:(req,res)=>{
    console.log(req.params.id);
    console.log(req.body);
    const { errors, isValid } = validateEditUser(req.body);
     if (!isValid) {
       return res.status(400).json(errors);
     }

     User.updateOne({_id:req.params.id},{$set:{name:req.body.name,email:req.body.email}}).then((result)=>{
        res.json({status:true});
     })
  },
  deleteUser:(req,res)=>{
    console.log(req.params.id);

    User.deleteOne({_id:req.params.id}).then(()=>{
        res.json({
            status:true
        })
    })
  },
  addProfile:(req,res)=>{
    
  }
};