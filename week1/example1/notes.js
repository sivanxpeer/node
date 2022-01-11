const fs = require('fs');
const getNotes= function(){
    return "your notes....";
}

const loadNotes= function(){
    const dataBuffer= fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
}

const addNote= function(title,body){
    const notes=loadNotes()
}
module.exports={
getNotes: getNotes,
addNote: addNote
}