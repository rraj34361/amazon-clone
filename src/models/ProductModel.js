const mongoose = require('mongoose');


const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
    },
     
    price: {
        type: Number,  
    },

    symbol: {
        type: String,
    },
    isFreeShipping: {
        type: Boolean,
        default: false,
    },
    productImage: {
        type: String,
    },
 
    rating : {
     type : Number
    },
 
    isDeleted: {
        type: Boolean,
        default: false,
    }
}, { timestamps: true });

module.exports = mongoose.model('Product', ProductSchema);


 