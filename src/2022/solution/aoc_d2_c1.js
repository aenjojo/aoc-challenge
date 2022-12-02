function aoc2_1(strategy) {
	let totalScore = 0;
	let outcomeScore = 0;

	const shapeMap = {
		X: 1, Y: 2, Z: 3
	}

	for (let round of strategy) {
		let [them, me] = round.split(' ');

		if ((them === 'A' && me === 'Y') || (them === 'B' && me === 'Z') || (them === 'C' && me === 'X')) {
			outcomeScore = 6;
		}
		if ((them === 'A' && me === 'X') || (them === 'B' && me === 'Y') || (them === 'C' && me === 'Z')) {
			outcomeScore = 3;
		}
		if ((them === 'A' && me === 'Z') || (them === 'B' && me === 'X') || (them === 'C' && me === 'Y')) {
			outcomeScore = 0;
		}

		totalScore += shapeMap[me] + outcomeScore;
	}

	console.log(totalScore);
}

module.exports = aoc2_1;