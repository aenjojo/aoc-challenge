function aoc3_1(rucksack) {
	let sum = 0;

	for (let compartment of rucksack) {
		let len = compartment.length;

		let compartment1 = compartment.slice(0, len / 2);
		let compartment2 = compartment.slice(len / 2, len);
		
		let splited = compartment1.split('');

		for (let y of splited) {
			if (compartment2.match(new RegExp(`[${y}]`, 'g'))) {
				let match = y.charCodeAt(0);

				sum += match > 90 ? match - 96 : match - 64 + 26;

				break;
			}
		}
	}

	console.log(sum)
}

module.exports = aoc3_1;