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

function aoc1_2(depths) {
    let increasedCount = 0;
    let previousSum = 0;
    let currentSum = 0;

    for (let idx in depths) {
        idx = parseInt(idx);

        if ((idx+2) > (depths.length - 1)) break;

        currentSum = parseInt(depths[idx]) + parseInt(depths[(idx+1)]) + parseInt(depths[(idx+2)]);

        if ((currentSum > previousSum) && (idx !== 0)) {
            increasedCount++;
        }
        //// debugging-only ////
        // if (idx === 0) {
        //     console.log(`[${idx}] ${depths[idx]} ${depths[idx+1]} ${depths[idx+2]} => no change`);
        // }
        // else if (currentSum > previousSum) {
        //     console.log(`[${idx}] ${depths[idx]} ${depths[idx+1]} ${depths[idx+2]} => increased`);
        //     increasedCount++;
        // }
        // else if (currentSum < previousSum) {
        //     console.log(`[${idx}] ${depths[idx]} ${depths[idx+1]} ${depths[idx+2]} => decreased`);
        // }
        // else {
        //     console.log(`[${idx}] ${depths[idx]} ${depths[idx+1]} ${depths[idx+2]} => none`);
        // }

        previousSum = currentSum;
    }

    console.log(increasedCount);
}

module.exports = aoc1_2;