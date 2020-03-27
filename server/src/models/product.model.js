const mongoose = require('mongoose');

const Schema = mongoose.Schema

const productSchema = new Schema({
    name: { 
        type: String,
        required: true 
    },
    description: String,
    price: {
        type: Schema.Types.Decimal128,
        required: true
    },
    photo: String
}, {
    timestamps: true
})

const Product = mongoose.model('Product', productSchema)

module.exports = Product