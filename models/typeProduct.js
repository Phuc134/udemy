const mongoose= require('mongoose');
const typeProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide type name product']
    }
})
module.exports = module.exports('typeProduct', typeProductSchema);