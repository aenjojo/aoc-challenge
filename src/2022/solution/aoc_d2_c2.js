function aoc2_2(strategy) {
	let totalScore = 0;

	const shapeMap = {
		rock: 1, paper: 2, scissor: 3
	};
	const outcomeMap = {
		X: 0, Y: 3, Z: 6
	};
	const patternMap = {
		AX: 'scissor',
		AY: 'rock',
		AZ: 'paper',
		BX: 'rock',
		BY: 'paper',
		BZ: 'scissor',
		CX: 'paper',
		CY: 'scissor',
		CZ: 'rock'
	}

	for (let round of strategy) {
		let [them, need] = round.split(' ');

		totalScore += shapeMap[patternMap[`${them}${need}`]] + outcomeMap[need];
	}

	console.log(totalScore);
}

module.exports = aoc2_2;