const validator=require('validator');
const chalk=require('chalk');
const getNotes= require('./notes');


console.log(getNotes());
console.log(validator.isEmail('sivan@example.com'));
console.log(validator.isEmail('@example.com'));
///
console.log(validator.isURL('https://example.com'));
console.log(validator.isURL('https:/example.com'));
///
console.log(chalk.red(getNotes()));
console.log(chalk.blue("Sivan"));
console.log(chalk.green("Node using chalk npm module to color"));




//using my own files reference: 

// const [firstName,add]= require('./utils.js');
// console.log(firstName);
// console.log(add(2,3));

