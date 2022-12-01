function aoc2_2(commands) {
	let position = 0;
	let aim = 0;
	let depth = 0;

	for (let command of commands) {
		let [code, unit] = command.split(' ');

		unit = Number(unit);

		if (code === 'forward') {
			position += unit;
			depth += unit * aim;
		}
		if (code === 'up') {
			aim -= unit;
		}
		if (code === 'down') {
			aim += unit;
		}
	}

	console.log(position * depth);
}

module.exports = aoc2_2;