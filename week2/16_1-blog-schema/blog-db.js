// CRUD - Create Read Update Delete 
const mongodb = require("mongodb");
//mongoClient will gice us access to the functions necessary to connect to the database so we can perform theCRUD ops
const MongoClient = mongodb.MongoClient;

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'blog-db'


MongoClient.connect(connectionURL,
    { useNewUrlParser: true },
    async (error, client) => {
        if (error) {
            return console.log("unable to connect to database");
        }
        console.log("connected correctly");

        const db = client.db(databaseName);

        //add one user  
        db.collection('users').insertOne({
            name: "sivan",
            email: "sivan@gmail.com"
        }, (error, result) => {
            if (error) {
                return console.log("unable to insert user");
            }
            console.log(result.acknowledged, result.insertedId)
        })

        //add many users   
        async (error, client) => {
            if (error) {
                return console.log("can't connect");
            }
            console.log("connected correctly");
            const db = client.db(databaseName);
            //email needs to be unique
            await db.collection("users").createIndex({ email: 1 }, { unique: true });
            db.collection("users").insertMany([
                { name: "timmy", email: "timmy@gmail.com" },
                { name: "Mike", email: "mike@gmail.com" },
            ]
            )
                ,
                (error, result) => {
                    if (error) {
                        return console.log("unable to insert users");
                    }
                    console.log(client, result.insertedIds)
                }
        }

        //user creates a post 
        const post = {
            title: "My first post",
            text: "I'm so excited to post here",
            tags: ["first", "excited"],
        };
        const post2 = {
            title: "timmys post",
            text: "timmy posts here for the first time",
            tags: ["first", "time"],
        };

        //get the userId of post creator
        const userPost = await db.collection("users").findOne({ email: "sivan@gmail.com" })
        if (!userPost) {
            return console.log("cant find user");
        }
        console.log(userPost);


        //store it in the posts collection
        await db.collection("posts").insertOne({
            myId: 1,
            title: post.title,
            text: post.text,
            tags: post.tags,
            comments: [],
            owner: userPost._id,
            ownerName: userPost.name,
        });


        const userPost2 = await db.collection("users").findOne({ email: "timmy@gmail.com" })
        if (!userPost2) {
            return console.log("cant find user");
        }
        console.log(userPost2);


        //store it in the posts collection
        await db.collection("posts").insertOne({
            myId: 1,
            title: post2.title,
            text: post2.text,
            tags: post2.tags,
            comments: [],
            owner: userPost2._id,
            ownerName: userPost2.name,
        });

        const comment = {
            text: "hey i really like this!"
        }

        const userComment = await db.collection('users').findOne({ email: "sivan@gmail.com" })
        if (!userComment) {
            return console.log("user was not found");
        }
        await db.collection("posts").updateOne(
            { myId: 1 },
            {
                $push: { comments: { text: comment.text, owner: userComment._id } },
            }
        );
        return userComment
    }
);


