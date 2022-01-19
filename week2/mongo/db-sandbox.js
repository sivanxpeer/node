// CRUD create read update delete

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectID()
// console.log(id.id.length)
// console.log(id.toHexString().length)

MongoClient.connect(connectionURL, { useNewUrlParser: true }, async (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName)

    // await db.collection("users").createIndex({ email: 1 }, { unique: true }); //avoid duplicates by unique email 
    // db.collection('users').insertOne({
    //     name: 'Vikram',
    //     age: 26
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user')
    //     }

    //     console.log(result.insertedId)
    // })

    // db.collection('users').insertMany([
    //     {
    //         name: 'Jen',
    //         age: 28
    //     }, {
    //         name: 'Gunther',
    //         age: 27
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert documents!')
    //     }

    //     console.log(result.insertedIds)
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Clean the house',
    //         completed: true
    //     },{
    //         description: 'Renew inspection',
    //         completed: false
    //     },{
    //         description: 'Pot plants',
    //         completed: false
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert tasks!')
    //     }

    //     console.log(result.insertedIds)
    // })



    //fetching data from the DB

    // db.collection('users').findOne({ name: "Jen" }, (error, result) => {
    //     if (error) {
    //         return console.log("unable to fetch");
    //     }
    //     console.log(result);
    // })

    // //method find returns a cursor -- use toArray() method to see the data 
    // db.collection('users').find({age:27}).toArray((error, result) => {
    //     if(error) {
    //         return console.log("unable to fetch");
    //     }
    //     console.log(result);
    // });
    // //can use count() method on the cursor that find() returns (and more methods...(see docs))
    // db.collection('users').find({age:27}).count((error, result) => {
    //     if(error) {
    //         return console.log("unable to fetch");
    //     }
    //     console.log(result);
    // });


    //udemy tasks: 
    // 1.use findOne to fetch the last task by its id 
    db.collection('tasks').find({ "_id": new ObjectID("61e77aa145727c7455321140")}).toArray((error, result) => {
        if (error) {
            return console.log("unable to fetch");
        }
        console.log("by id: ",result);
    });

    //2. fetch tasks that are not completed
    db.collection('tasks').find({ "completed": false }).toArray((error, result) => {
        if (error) {
            return console.log("unable to fetch");
        }
        console.log("not completed: ",result);
    });


})