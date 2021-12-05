const path = require('path');
const solution = require('./solution/aoc_d1_c2');
const readline = require('./module/readline');

// solution();

readline(path.resolve(__dirname, './input/input_d1.txt'), solution);