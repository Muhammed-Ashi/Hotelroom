const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
//const Router = require("./routes")c
const db = require('./connect')
const Collections = require('./models')
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
//app.use(require("./routes/record"));

//database connection 
        db.connect((callback)=>{console.log(callback,'its working')})


app.listen(port, () => {
  // perform a databadse connection when server starts
  
  console.log(`Server is running on port: ${port}`);
});
app.get('/login',(req,res)=>{
  Collections()
  console.log("this is working")

})