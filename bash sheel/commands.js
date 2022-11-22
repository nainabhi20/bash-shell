//import fs library
const fs = require('fs');
const { exec } = require('child_process');
//write out data
function done(output) {
    process.stdout.write(output);
    process.stdout.write('\nprompt > ');
}

// where we will store our commands
function evaluateCmd(userInput){
    // parses the user input to understand which command was typed
        
        // Counts the number of directory in 
        // current working directory
        exec(userInput+' ""', (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return;
        }
        console.log(`${stdout}`);
        if (stderr!= "")
        console.error(`stderr: ${stderr}`);
        });
}

module.exports = { evaluateCmd };