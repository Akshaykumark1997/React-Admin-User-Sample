const express = require ('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const dbconnect = require('./config/connection');
const users = require('./routes/user');
const cors = require("cors");



const dotenv = require("dotenv");
dotenv.config();



const app = express();
app.use(cors());
app.use(passport.initialize());
require("./passport")(passport);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
dbconnect.dbconnect();



app.use('/',users);


app.listen(process.env.PORTNO, () => {
  console.log("server started listening to port");
});