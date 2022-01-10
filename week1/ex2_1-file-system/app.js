
const fs = require('fs')
const path = require('path')

// 1. Create a new txt file using the same fs module method we have
// learned before.

fs.writeFileSync('sync-text-file.txt','Hello, this file was created by node js')


// 2. Create a copy of the newly created txt file using a method from
// the fs module.

fs.copyFileSync('sync-text-file.txt','copy-sync-text-file.txt')


// 3. Rename one of the files using a method from the fs module.

fs.renameSync('sync-text-file.txt', 'rename-file-sync-text-file.txt')


// 4. Get a list of all the file names of the current directory using a
// method from the fs module.

fs.readdirSync(path.join()).forEach(file => {
    console.log(file);
  });


// 5. Find out and implement another method for the fs module.
//(appnd a message to the renamed file )

fs.appendFileSync('rename-file-sync-text-file.txt', 'data to append', 'utf8');

