const mongoose = require('mongoose')
const UserSchema = require('./connect')
  var user= UserSchema.User

module.exports = function UserCollection() {
    console.log('function is working')
      const data = new user({
        username: "n",
        email: "j",
        password:"jj"
    })
       
     data.save((err,doc)=>{console.log(doc)})
}
