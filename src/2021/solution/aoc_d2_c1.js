function aoc2_1(commands) {
	let position = 0;
	let depth = 0;

	for (let command of commands) {
		let [code, unit] = command.split(' ');

		unit = Number(unit);

		if (code === 'forward') {
			position += unit;
		}
		if (code === 'up') {
			depth -= unit;
		}
		if (code === 'down') {
			depth += unit;
		}
	}

	console.log(position * depth);
}

module.exports = aoc2_1;