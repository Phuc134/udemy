const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide name product'],
    },
    price: {
        type: Number,
        required: [true, 'Please provide price product']
    },
    rates: [Number],
    currentRate: {
        type: Number,
        default: 4.5,
    },
    idType: [String],
})

module.exports = mongoose.model('Product', productSchema)