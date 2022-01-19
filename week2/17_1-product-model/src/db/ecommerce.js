const { log } = require('console');
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/products-db', {
    useNewUrlParser: true,
    useCreateIndex: true, // when mongoose works with mongodb our indices are created alowwing us to quicly access the data we need
})

//define the model:  mongoose.model(modelname,defenition)
const Product = mongoose.model('Product', {
    name: {
        type: String,
        required: true,
        unique: true
    },
    category: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        details: []
    }
})

const Details = mongoose.model('Details', {
    desciption: {
        type: String,
        validate(description) {
            if (description.length < 10) {
                throw new Error("description must have at least 10 characters")
            }
        },
        required: true,
        // min: (10),
    },
    price: {
        type: Number,
        required: true,
        // min: (-1)
    },
    discount: {
        type: Number,
        required: false,
        default: 0
    },
    images: {
        type: Array,
        minlength: 2
    },
    // phoneNumber: {
    //     type: ,


    // }
})


const details = new Details({
    desciption:"iphone",
    price: 500,
    isActive: true,
    images:['one', 'two']
})
const product = new Product({
    name:"iphone",
    category:"electronics",
    isActive: true,
    details: (details)
})

product.save().then(() => {console.log(product)}).catch((err) => {console.log(err)})
details.save().then(() => {console.log(details)}).catch((err) => {console.log(err)})