const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide name'],
    },
    password: {
        type: String,
        required: [true, 'Please provide password']
    },
    email: {
        type: String,
        required: [true, 'Please provide email'],
        unique: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    typeUser: {
        type: Number,
    }
},{
    timestamps: true
})
module.exports = mongoose.model('User', userSchema);