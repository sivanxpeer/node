const express = require('express')
const {Product} = "db/ecommerce/Product"

const app=express()

const port = process.env.PORT ||3000
app.use(express.json())

// Create
// 1.Create a product

app.post('/products',(req,res)=>{
    res.send("new Product")
})





app.listen(port,()=>{console.log("server is running on port ",port)})