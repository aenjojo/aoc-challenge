const day = 6;
const challenge = 2;

const path = require('path');
const solution = require(`./solution/aoc_d${day}_c${challenge}`);
const readline = require('./module/readline');

// solution();

const inputPath = path.resolve(__dirname, `./input/input_d${day}.txt`);

readline(inputPath, solution);