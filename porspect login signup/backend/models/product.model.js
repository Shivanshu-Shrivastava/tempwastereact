const mongoose = require('mongoose')

const Schema = mongoose.Schema
const CoustomerSchema = new Schema({
    coustomer_name:{
        type:String,
        required:true,
        minlength:3
    },
    mobile:{
        type:Number,
        required:true,
        unique:true,
        minlength:3
    },
    email:{
        type:String,
        required:true,
        unique:true,
        minlength:3
    },
    address:{
        type:String,
        required:true,
        minlength:3
    },
    product_id:{
        type:Number,
        required:true,
        unique:true,
        minlength:3
    },
    product_name:{
        type:String,
        required:true,
        minlength:3
    },
    price:{
        type:Number,
        required:true,
        minlength:3
    },
    dele_date:{
        type:Date,
        required:true,
        minlength:3
    },
    order_status:{
        type:String,
        required:true,
        minlength:3
    },
    source:{
        type:String,
        required:true,
        minlength:3
    },
    pur_date:{
        type:Date,
        required:true,
        minlength:3
    },
},
    {timestamps:true}
)

const Coustomer = mongoose.model('Coustomer',CoustomerSchema)

module.exports = Coustomer