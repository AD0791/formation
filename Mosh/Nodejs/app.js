const fs = require('fs');

// asyncronous way
// we muse use the "callback function" argument
// Asynchronous readdir(3) - read a directory.


const afs  = fs.readdir('./',function(err,files){
    let result;
    if(err){
        throw new Error('You made a mistake');
    }
    else{
        result = console.log('Results: ',files);
    }
    return result;
});

