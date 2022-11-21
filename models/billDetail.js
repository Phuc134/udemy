const mongoose = require('mongoose');
const billDetailSchema = new mongoose.Schema({
    idBill: String,
    idProduct: String,
    amount: {
        type: Number,
        required: [true,'Please provide amount']
    },
    reviewed: {
        type: Boolean,
        default: false,
    }
})

module.exports = mongoose.model('billDetail', billDetailSchema)