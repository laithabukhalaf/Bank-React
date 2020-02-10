const express = require("express");
const router = express.Router();
const Transaction = require("../model/Transaction");

router.get('/transactions',async function(req,res){
    const data=await Transaction.find({})
    res.send(data)
})

router.post('/transaction',async function(req,res){
    // console.log(req.body)
    const newTransaction=new Transaction(req.body)
    // console.log(newTransaction)

    await newTransaction.save()
    res.send(newTransaction)

})

router.delete('/transaction/:id',async function(req,res){
    // console.log(req.params.id)
    await Transaction.findOneAndDelete({_id:req.params.id})
    res.send()
})







module.exports = router;