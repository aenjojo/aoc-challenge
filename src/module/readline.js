const fs = require('fs');
const readline = require('readline');

function mdl_readline(file, callback) {
    let array = [];
    let rl = readline.createInterface({
        input: fs.createReadStream(file),
        output: process.stdout,
        terminal: false
    });

    rl.on('line', function(line) {
        array.push(line)
    });

    rl.on('close', function() {
        callback(array);
    });
}

module.exports = mdl_readline;