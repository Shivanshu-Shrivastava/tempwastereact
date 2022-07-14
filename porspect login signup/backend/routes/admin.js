const router = require('express').Router()
let adminModel = require('./../models/admin.model.js')

router.route('/add').post((req, res) => {
   const username = req.body.username
   const password = req.body.password
   const newadmin = new adminModel({
    username,
    password
})
    newadmin.save()
    .then(() => res.json('admin added'))
    .catch((e) => res.status(401).json(e))


})
router.route('/').get((req,res)=>{
    adminModel.find()
    .then(data => res.json(data))
    .catch(e => res.status(401).json('Error  ',e))
})
module.exports = router

