const express = require('express')
const Product= require('./models/Product');


const app=express()

const port = process.env.PORT ||3000
app.use(express.json())

// Create
// 1.Create a product

app.post('/products',(req,res)=>{
    // console.log(req.body)
    // res.send("new Product")
    const product = new Product(req.body)
    product.save().then(()=>{
        res.send(product)
    }).catch((err)=>{console.log(err)})
})





app.listen(port,()=>{console.log("server is running on port ",port)})