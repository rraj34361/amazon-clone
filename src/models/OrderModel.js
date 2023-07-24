const mongoose = require('mongoose');
const objectId = mongoose.Types.ObjectId;

 
const OrderSchema = new mongoose.Schema({
    userId : {
        type: objectId,
        required: true,
        ref : "user",
    },
    items : [
        {
            productId : {
                type: objectId,
               
                ref : "Product",
            },
            quantity : {
                type: Number,
                
                min : 1
            },
        }
    ],
    totalPrice : {
        type: Number,
        required: true,
        // comment : "Holds total price of all the items in the cart",
    },
    totalItems : {
        type: Number,
    
        // comment : "Holds total number of items in the cart",
    },
    // totalQuantity : {
    //     type: Number,
    
    //     comment : "Holds total number of quantity in the cart",
    // },
    cancellable : {
        type: Boolean,
        default: true,
    },
    status : {
        type: String,
        default: 'pending',
        enum: ["pending", "completed", "cancled"],
    },
    deletedAt : {
        type: Date,
    },
    isDeleted : {
        type: Boolean,
        default: false,
    }
}, {timestamps: true});

module.exports = mongoose.model('order', OrderSchema);