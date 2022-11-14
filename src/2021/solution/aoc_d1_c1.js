function aoc1_1(depths) {
    let increasedCount = 0;
    let previousDepth = 0;

    for (let depth of depths) {
        depth = parseInt(depth);

        if ((depth > previousDepth) && previousDepth !== 0) {
            increasedCount++;
        }

        previousDepth = depth;
    }

    console.log(`Total increase: ${increasedCount}`)
}

module.exports = aoc1_1;