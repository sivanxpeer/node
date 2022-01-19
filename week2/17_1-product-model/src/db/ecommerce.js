const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
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
        required: true,
        gt: (10),
    },
    price: {
        type: Number,
        required: true,
        gt: (-1)
    },
    discount: {
        type: Number,
        required: false,
        default: 0
    },
    images:{
        type: Array,
        gt: 2,
    },
    phoneNumber:{
        
    }
})