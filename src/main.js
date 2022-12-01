const year = 2022;
const day = 1;
const challenge = 2;

const path = require('path');
const solution = require(`./${year}/solution/aoc_d${day}_c${challenge}`);
const readline = require('./module/readline');

// solution(); // just for test purpose

const inputPath = path.resolve(__dirname, `./${year}/input/input_d${day}.txt`);

readline(inputPath, solution);