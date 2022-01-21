const mongoose = require('mongoose');
const validator = require('validator');

const Product = mongoose.model('Product', {
    name: {
        type: String,
        required: true,
        unique: true
    },
    category: {
        type: String,
        // required: true
    },
    isActive: {
        type: Boolean
    },
    
    //embedded object:
    // details: {
    //     desciption: {
    //         type: String,
    //         validate(description) {
    //             if (description.length < 10) {
    //                 throw new Error("description must have at least 10 characters")
    //             }
    //         },
    //         required: true,
    //         min: 10
    //     },
    //     price: {
    //         type: Number,
    //         required: true,
    //         min: -1
    //     },
    //     discount: {
    //         type: Number,
    //         default: 0
    //     },
    //     images: {
    //         type: [String],
    //         minLength: 2,
    //         required: true
    //     },
    //     // phoneNumber: {
    //     //     type: String,
    //     //     validate: (/^\d{10}$/),
    //     //     required: true
    //     // },
    // }
}
)

module.exports=Product