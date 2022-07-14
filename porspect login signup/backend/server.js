const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const admin = require('./routes/admin.js')
const coustomer = require('./routes/coustomer.js')

// require('dotenv').config()
const app = express()
const port =process.env.PORT || 5000

const uri = 'mongodb://aqgro:aqgro123@cluster0-shard-00-00.xl1w3.mongodb.net:27017,cluster0-shard-00-01.xl1w3.mongodb.net:27017,cluster0-shard-00-02.xl1w3.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-ztgxhd-shard-0&authSource=admin&retryWrites=true&w=majority'
mongoose.connect(uri,{useNewUrlParser:true,useUnifiedTopology: true})

const connection = mongoose.connection
connection.once('open',()=>{
    console.log('mongoDB connection succesfully');
})

app.use(cors())
app.use(express.json())


app.use('/admin',admin)
app.use('/coustomer',coustomer)

app.listen(port,()=>{
    console.log(`listing on port ${port}`);
})