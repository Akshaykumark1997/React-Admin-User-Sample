const express = require ('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const dbconnect = require('./config/connection');
const users = require('./routes/user');
const Admin = require('./routes/admin')
const cors = require("cors");
const fileUpload = require("express-fileupload");
const path = require("path");


const dotenv = require("dotenv");
dotenv.config();


const app = express();
app.use(fileUpload());
app.use(cors());
// app.use(passport.initialize());
// require("./passport")(passport);
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
dbconnect.dbconnect();



app.use('/',users);
app.use('/admin',Admin)


app.listen(process.env.PORTNO, () => {
  console.log("server started listening to port");
});