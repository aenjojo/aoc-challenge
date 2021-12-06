const path = require('path');
const solution = require('./solution/aoc_d6_c2');
const readline = require('./module/readline');

// solution();

const inputPath = path.resolve(__dirname, './input/input_d6.txt');

readline(inputPath, solution);