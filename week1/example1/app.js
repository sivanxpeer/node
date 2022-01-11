const validator=require('validator');
const getNotes= require('./notes');


console.log(getNotes());
console.log(validator.isEmail('sivan@example.com'));
console.log(validator.isEmail('@example.com'));
///
console.log(validator.isURL('https://example.com'));
console.log(validator.isURL('https:/example.com'));





//using my own files reference: 

// const [firstName,add]= require('./utils.js');
// console.log(firstName);
// console.log(add(2,3));

