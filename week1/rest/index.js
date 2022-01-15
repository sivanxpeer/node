const Joi = require('joi');
const express = require('express');
const app = express();

app.use(express.json());

const courses = [
    { id: 1, name: "course1" },
    { id: 2, name: "course2" },
    { id: 3, name: "course3" },
];

app.get('/', (req, res) => {
    console.log("HI");
    res.send("HI");
})


// app.listen(3000,()=>{console.log("listening on port 3000")});

// in production env this 3000 port wont work, it will be dynamically assigned by the hosting env. 
// to fix it - we need to use an environment variable 
// typically inhosting envs for node applications we have an environment variable called port 
// an environment variable is a variable that is part of the environment in which a process runs 
// it's value is set outside of the application

// to read the value of the environment variable PORT - by using the process pbject: 
const port = process.env.PORT || 3000; //( if it is set - use it, otherwise use localhost)
app.listen(port, () => { console.log(`listening on port ${port}...`) });
// in the terminal -- set to set the environment variable


//endpoint to get all courses 
app.get('/api/courses', (req, res) => {
    res.send(courses);
})


// endooint to get a single course (parameter id)
app.get('/api/courses/:id', (req, res) => {
    const wantedCourse = courses.find((course) => course.id === parseInt(req.params.id))
    if (!wantedCourse) {
        res.status(404).send(`course ${wantedCourse} was not found`)
    }
    res.send(wantedCourse);
})

//multiple params: h (creating the object)
// app.get('/api/posts/:year/:month',(req,res)=>{
//     res.send(req.params);
//     // res.send(req.query);
// })


//query string parameters - to provide additional data to the backend server (for example - ?sortBy=name)--- in the url 
//instead of req.params we use req.query
// query parameters are stored in an object with a bunch of key-value pairs (both funcs together doesnt work)
// app.get('/api/posts/:year/:month',(req,res)=>{
//     // res.send(req.params);
//     res.send(req.query);
// })





// app.post()
app.post('/api/courses', (req, res) => {
    //input validation 
    if(!req.body.name|| req.body.name.length<3){
        //400 bad request
        res.status(400).send("name is required and should contain at least 3 characters")
    }
    
    //input validation using joi
    const schema ={
        name:Joi.string().min(3).required()
    };

    const result =Joi.valid(req.body,schema);
    console.log(result);
    const course = {
        id: courses.length + 1,
        name: req.body.name,
    }
    courses.push(course);
    res.send(course);
})





// app.put() - update
app.put('/api/courses/:id', (req, res)=>{
    //look up the course 
    // if not exist, return 404
    const wantedCourse = courses.find((course) => course.id === parseInt(req.params.id))
    if (!wantedCourse) {
        res.status(404).send(`course ${wantedCourse} was not found`)
    }   
    
    //validate
    // if invalid return 400- bad request 

    //update the course
    wantedCourse.name=req.body.name;
    //return it to the client
    return wantedCourse;
})



// app.delete()
app.delete('/api/courses/:id',(req, res) => {
    //look up the course 
    // if it doesnt exists - return 404 

    //delete the course

    //return it to the client 
    
})


