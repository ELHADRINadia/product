const mongoose = require('mongoose');
const imageSchema = new mongoose.Schema({
    image: {
        type: String,
        required: [true, 'Please enter the product image'],
    },
})
module.exports = mongoose.