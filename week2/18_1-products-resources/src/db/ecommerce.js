const { log } = require('console');
const mongoose = require('mongoose');
const validator = require('validator');

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
        type: Boolean
    },
    
    //embedded object:
    details: {
        desciption: {
            type: String,
            validate(description) {
                if (description.length < 10) {
                    throw new Error("description must have at least 10 characters")
                }
            },
            required: true,
            min: 10
        },
        price: {
            type: Number,
            required: true,
            min: -1
        },
        discount: {
            type: Number,
            default: 0
        },
        images: {
            type: [String],
            minLength: 2,
            required: true
        },
        phoneNumber: {
            type: String,
            validate: (/^\d{10}$/),
            required: true
        },
    }}
)




//A Mongoose schema defines the structure of the document, default values, validators, etc., 
//whereas a Mongoose model provides an interface to the database for creating, querying, updating, deleting records, etc.

//model is the decleration of the DB
//schema is structure of the data inside the model


const product = new Product({
    name: "iphone",
    category: "electronics",
    isActive: true,
    details: {
        desciption: "buy now dont miss best prices!!",
        price: 10,
        images: ['img1', 'img2'],
        phoneNumber: "0504080778"
    }
})
const product2 = new Product({
    name: "chair",
    category: "furniture",
    isActive: true,
    details: {
        desciption: "buy now dont miss best prices!!",
        price: 10,
        images: ['img1', 'img2'],
        phoneNumber: "0503555666"
    }
})

const product3 = new Product({
    name: "table",
    category: "furniture",
    isActive: true,
    details: {
        desciption: "buy now dont miss best prices!!",
        price: 10,
        images: ['img1', 'img2'],
        phoneNumber: "0506798554"
    }
})



product.save().then(() => { console.log(product) }).catch((err) => { console.log(err) })
product2.save().then(() => { console.log(product2) }).catch((err) => { console.log(err) })
product3.save().then(() => { console.log(product3) }).catch((err) => { console.log(err) })
// details.save().then(() => { console.log(details) }).catch((err) => { console.log(err) }) 


module.exports={
    Product:Product
}