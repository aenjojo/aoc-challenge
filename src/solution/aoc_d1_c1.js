//// example data ////
// const depths = [
//     199,
//     200,
//     208,
//     210,
//     200,
//     207,
//     240,
//     269,
//     260,
//     263
// ];

function aoc1_1(depths) {
    let increasedCount = 0;
    let previousDepth = 0;

    for (let depth of depths) {
        depth = parseInt(depth);

        if ((depth > previousDepth) && previousDepth !== 0) {
            increasedCount++;
        }

        //// debugging-only ////
        // if (previousDepth === 0) {
        //     console.log(`${depth} [none]`);
        // }
        // else if (depth > previousDepth) {
        //     console.log(`${depth} [increased]`);
        //     increasedCount++;
        // }
        // else {
        //     console.log(`${depth} [decreased]`);
        // }

        previousDepth = depth;
    }

    console.log(`Total increase: ${increasedCount}`)
}

module.exports = aoc1_1;