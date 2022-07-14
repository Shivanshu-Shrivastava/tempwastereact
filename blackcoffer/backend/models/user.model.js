const mongoose = require('mongoose')

const Schema = mongoose.Schema

const UserSchema = new Schema({
    
   
},
    {timestamps:true}
)

const User = mongoose.model('black',UserSchema,'blackcoll')

module.exports = User