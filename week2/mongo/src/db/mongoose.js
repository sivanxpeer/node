// connection:
const mongoose = require('mongoose');

//connect(URL,optionsObject)
mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true, // when mongoose works with mongodb our indices are created alowwing us to quicly access the data we need
})

//define the model:  mongoose.model(modelname,defenition)
const User = mongoose.model('User', {
    name: {
        type: String
    },
    age: {
        type: Number
    }
})

const Task = mongoose.model('Task', {
    description: {
        type: String
    },
    completed: {
        type:Boolean,
        default: false
    }
})
//create instances of that model

const userAndrew= new User({
    name:"Andrew",
    age: 27 
})

const myTask= new Task({
    description: "feed cats",
})


//to save to the db, we use methonds on our instance:
userAndrew.save().then(() => {console.log(userAndrew)}).catch((err)=>{console.log(err)})
myTask.save().then(()=>{console.log(myTask)}).catch((err)=>{console.log(err)})

