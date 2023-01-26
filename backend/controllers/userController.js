const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// const passport = require("passport");
const validateRegisterInput = require("../validation/register");
const validateLoginInput = require("../validation/login");
const User = require("../models/userSchema");
const path = require("path");
const fileUpload = require("express-fileupload");



module.exports = {
    signup:(req,res)=>{
        const { errors, isValid } = validateRegisterInput(req.body);
        if (!isValid) {
          return res.status(400).json(errors);
        }

        User.findOne({
            email : req.body.email
        }).then((user)=>{
            if(user){
              res.status(400).json({email:"email already exist"});
            }else{
                bcrypt.hash(req.body.password, 10,(err,hash)=>{
                    const password = hash;
                    User.create({
                        name:req.body.name,
                        email:req.body.email,
                        password
                    }).then(user=>{
                        res.json(user);
                    });
                })
            }
        });

    },
    login:(req,res)=>{
        const {errors, isValid} = validateLoginInput(req.body);

        if(!isValid){
            return res.status(400).json(errors)
        }
        const email = req.body.email;
        const password = req.body.password;
        User.findOne({email}).then(user=>{
            if(!user){
                errors.email = "user not found";
                return res.status(400).json(errors);
            }
            bcrypt.compare(password,user.password).then(isMatch=>{
                if (isMatch) {
                  const payload = {
                    id: user.id,
                    name: user.name,
                  };
                  jwt.sign(
                    payload,
                    "secret",
                    {
                      expiresIn: 3600,
                    },
                    (err, token) => {
                      if (err)
                        console.error("There is some error in token", err);
                      else {
                        res.json({
                          success: true,
                          name:user.name,
                          email:user.email,
                          id:user._id,
                          token: `Bearer ${token}`,
                        });
                      }
                    }
                  );
                } else {
                  errors.password = "Incorrect Password";
                  return res.status(400).json(errors);
                }

            })
        })
    },
    users:(req,res)=>{
      console.log(req.params.id);
      User.findOne({_id:req.params.id}).then((user)=>{
        res.json({user});
      })
    },
    addProfile:async(req,res)=>{
      console.log(req.params.id);
      console.log(req.files.image);
      const image = req.files.image;
        const imageName =req.params.id;
        await image.mv('./public/profile/' + imageName+
              ".jpg",
            (err) => {
              if (!err) {
                res.json({status:true}); 
              } else {
                res.json({status:false});  
              } 
            }
          );
      
    }
    
}