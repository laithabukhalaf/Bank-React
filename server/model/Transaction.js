const mongoose = require('mongoose')
const Schema = mongoose.Schema

const transactionSchema = new Schema({
    
    amountInput: Number,
    categoryInput: String,
    vendorInput: String
})
const Transaction = mongoose.model("transction", transactionSchema)
module.exports = Transaction