const fs = require('fs');

const book = {
    title: 'Ego is the enemy',
    author: 'Ryan Holiday'
}


// //convert to JSON
// const bookJSON =JSON.stringify(book);
// console.log(bookJSON);
// console.log(bookJSON.title); //undefined


// //convert to object
// const parsedData=JSON.parse(bookJSON);
// console.log(parsedData.title);


//(write) save to a file 
// const bookJSON =JSON.stringify(book);
// fs.writeFileSync('1-json.json', bookJSON)

//read from file
// const dataBuffer = fs.readFileSync('1-json.json');
// const dataJSON = dataBuffer.toString(); 
// const data = JSON.parse(dataJSON);
// console.log(data.title);


//loading and parsing JSON data
const data = JSON.parse(fs.readFileSync("1-json.json").toString());
console.log(data.details);

data.details.name="Sivan";
data.details.age=29;

const userJSON = JSON.stringify(data);
// const parsedData=JSON.parse(userJSON);

fs.writeFileSync("./1-json.json",userJSON)