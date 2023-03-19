const mongoose = require('mongoose');

const productsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter product name'],
        // trim: true,
        // maxlength: [100, 'Product name cannot exceed 100 characters']
    },
    price: {
        type: Number,
        required: [true, 'Please enter product price'],
        // maxlength: [5, 'Product price cannot exceed 5 characters'],
        // default: 0.0
    },
    description: {
        type: String,
        default: false,
        // required: [true, 'Please enter product description'],
    },
    rating: {
        type: Number,
        default: 4.5,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    company: {
        type: String,
        enum: {
            values: ['ikea', 'liddy', 'caressa', 'marcos'],
            message: '{VALUE} is not supported',
        }
        // enum: ['ikea', 'liddy', 'caressa', 'marcos']
    },
})

module.exports = mongoose.model('Product', productsSchema);