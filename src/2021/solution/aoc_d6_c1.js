function aoc6_1(fishs) {
    fishs = fishs[0].split(',').map(e => parseInt(e));

    for (let i=1; i<=80; i++) {
        for (let idx in fishs) {
            if (fishs[idx] == 0) {
                fishs.push(8);
                fishs[idx] = 6;
            }
            else {
                fishs[idx]--;
            }
        }
    }

    console.log(fishs.length);
}

module.exports = aoc6_1;