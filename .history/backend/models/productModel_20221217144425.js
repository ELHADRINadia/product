const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: [true, 'Please enter the product name'],
    },
    description: {
        type: String,
        required: [true, 'Please enter the product description'],
    },
    price: {
        type: String,
        required: [true, 'Please enter the product price'],
    },
    image: {
        type: String,
        required: [true, 'Please enter the product image'],
    },
    qty: {
        type: Number,
        required: [true, 'Please enter the product quantity'],
    },
})

module.exports = mongoose.
model('product', productSchema); 