const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const validateRegisterInput = require("../validation/register");
const validateLoginInput = require("../validation/login");
const User = require("../models/userSchema");
const dotenv = require("dotenv");
dotenv.config();

module.exports = {

    login:(req,res)=>{
        const { errors, isValid } = validateLoginInput(req.body);
         if (!isValid) {
           return res.status(400).json(errors);
         }
         const email = req.body.email;
         const password = req.body.password;
         if(process.env.AdminEmail === email && process.env.AdminPassword === password){
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
                    email:email,
                    token: `Bearer ${token}`,
                  });
                }
              }
            );
         }else{
            errors = "Incorrect email or password";
            return res.status(400).json(errors);
         }
    }


}