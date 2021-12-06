function aoc6_2(fishs) {
    fishs = fishs[0].split(',').map(e => parseInt(e));

    let fishMap = new Map();
    let temp = new Array();

    for (let i=0; i<=8; i++) {
        fishMap.set(`${i}`, fishs.reduce((acc, curr) => acc + (curr == i ? 1 : 0), 0));
    }

    for (let j=1; j<=256; j++) {
        temp = [
            fishMap.get('1'),
            fishMap.get('2'),
            fishMap.get('3'),
            fishMap.get('4'),
            fishMap.get('5'),
            fishMap.get('6'),
            fishMap.get('7') + fishMap.get('0'),
            fishMap.get('8'),
            fishMap.get('0')
        ];

        for (let k in temp) {
            fishMap.set(`${k}`, temp[k])
        }
    }

    let sum = 0;

    for (let t=0; t<=8; t++) {
        sum += fishMap.get(`${t}`);
    }

    console.log(sum);
}

module.exports = aoc6_2;