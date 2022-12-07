const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/HotelRoom", {
  useNewUrlParser: "true",
})

//define schema

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
})

const User = mongoose.model('UserCollecions',userSchema)


//mongodb connection and schema exporting

module.exports ={ connect:
  function Connectdb(callback){


    mongoose.connection.on("error", err => {
     console.log("err", err)
     return callback(err)
   })
   mongoose.connection.on("connected", (err, res) => {
     //console.log(res,"mongoose is connected")
     return callback("connected")
   })
   },


  User : mongoose.model('UserCollecions',userSchema)
   
} 


  



