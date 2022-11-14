function aoc1_2(depths) {
    let increasedCount = 0;
    let previousSum = 0;

    for (let idx in depths) {
        idx = parseInt(idx);

        if ((idx+2) > (depths.length - 1)) break;

        let currentSum = parseInt(depths[idx]) + parseInt(depths[(idx+1)]) + parseInt(depths[(idx+2)]);

        if ((currentSum > previousSum) && (idx !== 0)) {
            increasedCount++;
        }

        previousSum = currentSum;
    }

    console.log(increasedCount);
}

module.exports = aoc1_2;