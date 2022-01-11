const validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs');


const getNotes = require('./notes');


//using my own files
const msg = getNotes();
console.log(msg);

// const [firstName,add]= require('./utils.js');
// console.log(firstName);
// console.log(add(2,3));


//using validator module
// console.log(validator.isEmail('sivan@example.com'));
// console.log(validator.isEmail('@example.com'));
// console.log(validator.isURL('https://example.com'));
// console.log(validator.isURL('https:/example.com'));


/// using chalk module
// console.log(chalk.red(getNotes()));
// console.log(chalk.blue("Sivan"));
// console.log(chalk.inverse.green("Node using chalk npm module to color"));
// console.log(chalk.green.bold("Node using chalk npm module to color"));
const greenMsg = chalk.green.bold("success!");
console.log(greenMsg);

console.log(process.argv[2]); // pass an argument in the cli after the command to run the file 
// node ./app.js <arg>

const command = process.argv[2];
if (command === 'add') {
    console.log('adding note');
}
else if(command === 'remove'){
    //remove the note
}

// console.log(process.argv); 

//using yargs module
console.log(yargs.argv); 
yargs.version('1.1.0')
yargs.command({ 
    command: 'add',
    describe: 'Add a note',
    handler: function(argv){
        console.log('Title: ' + argv.title);
        console.log('Body: ' + argv.body);
    },

    builder:{
        title: {
            describe: "note title",
            demandOption:true,
            type: 'string'
        },
        body:{
            describe:"note body",
            demandOption:true,
            type: 'string',
        }
    }
})

yargs.command({ 
    command: 'remove',
    describe: 'remove a note',
    handler: function(){
        console.log('remove note');
    }
})