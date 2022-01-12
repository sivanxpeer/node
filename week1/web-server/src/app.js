const path= require('path');
const express = require('express');

// console.log(__dirname)
console.log(path.join(__dirname,'../public')); 

const app = express();
const publicDirectoryPath = path.join(__dirname,'../public');

app.use(express.static(publicDirectoryPath));   ///connecting the index.html page

//first argument takes a partial url
//app.com
// app.get('', (req, res) => {
//     res.send("hello express")//allows us to send somthing back to the requestor 
// })
// //app.com/help
// app.get('/help', (req, res) => {
//     res.send({ "name": "sivan", "age": "29" })//allows us to send somthing back to the requestor 
// })

//app.com/about
// app.get('/about', (req, res) => {
//     res.send("<p style=color:red>this is the about page<p>");
// })

// //wheather route:
app.get('/wheather', (req, res) => {
    res.send([{ "Sunday": {"sky":"sunny","degrees":"24","location":"Israel"} }, { "monday": {"sky":"rain","degrees":"17","location":"Israel"} }, { "tuesday": {"sky":"rain","degrees":"17","location":"Israel"} }, { "wednesday": "rain" }, { "thursday": "sunny" }, { "friday": "rain" }, { "saturday": "rain" }])
})
app.set('view engine','hbs')
//use only one time in our app --this starts up the server and have it listen on a specific port
//the process of starting the server is asynchronous 
app.listen(3000, () => {
    console.log("server is up on port 3000");
});



