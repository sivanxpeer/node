const express = require('express');
const Product = require('./models/product.js');
require('./db/ecommerce.js')


const app = express()

const port = process.env.PORT || 3000
app.use(express.json())

// Create
// 1.Create a product
app.post('/products', (req, res) => {
    // console.log(req.body)
    // res.send("new Product")
    const product = new Product(req.body)
    product.save().then(() => {
        res.send(product)
    }).catch((err) => {
        res.status(400).send(err);
    })
})

// Read
// 1. Get all products
app.get('/products', (req, res) => {
    const products = Product.find({}).then((products) => {
        res.send(products)
        return products
    }).catch(() => {
        res.status(500).send()
    })
})


// 2. Get a specific product
app.get('/products/:id', (req, res) => {
    // console.log(req.params) //-->return an object with the parameter we entered on postman {id:'239234034'}
    const _id = req.params
    Product.findOne(_id).then((product) => {
        if (!product) {
            return res.status(404).send()
        }

        res.send(product)
    }).catch(() => {
        res.status(500).send("product not found");
    })
    // const product = req.params;

})

// 3. Get products that are active
app.get('/products/actives', (req, res) => {
    Product.find({ isActive: true }, (error, result) => {
        if (error) {
            res.status(400).send("Unable to fetch products");
        }
        res.status(200).send(result);
    })
});

// 4. Get products with a specific price range
// (example min = 50 max = 500)


app.get("/products/price", (req, res) => {
    const min = req.query.min;
    const max = req.query.max;
    Product.find(
        {
            "details.price": { $gte: min, $lte: max },
        },
        (error, result) => {
            if (error) {
                res.status(400).send("Unable to fetch products");
            }
            res.status(200).send(result);
        }
    );
});


app.listen(port, () => { console.log("server is running on port ", port) })