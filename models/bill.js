const mongoose= require('mongoose');
const billSchema = new mongoose.Schema({
    idCustomer: String,
    total: Number,
})
module.exports = module.exports('Bill', billSchema);