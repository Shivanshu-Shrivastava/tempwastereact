const router = require('express').Router()
let coustomerModel = require('./../models/product.model.js')


router.route('/').get((req,res)=>{
    coustomerModel.find()
    .then(data => res.json(data))
    .catch(e => res.status(401).json('Error  ',e))
})

router.route('/add').post((req, res) => {
    const coustomer_name = req.body.coustomer_name 
    const mobile = req.body.mobile
    const email = req.body.email
    const address = req.body.address
    const product_id = req.body.product_id
    const product_name = req.body.product_name
    const price = req.body.price
    const dele_date = req.body.dele_date
    const order_status = req.body.order_status
    const source = req.body.source
    const pur_date = req.body.pur_date
    const newcoustomer = new coustomerModel({
     coustomer_name,
     mobile,
     email,
     address,
     product_id,
     product_name,
     price,
     dele_date,
     order_status,
     source,
     pur_date,
 })
     newcoustomer.save()
     .then(() => res.json('coustomer added'))
     .catch((e) => res.status(401).json(e))
 
 
 })

module.exports = router
