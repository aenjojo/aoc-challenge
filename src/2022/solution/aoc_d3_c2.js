function aoc3_2(rucksack) {
	let sum = 0;
	let max = rucksack.length;

	for (let i = 0; i < max; i += 3) {
		let compartment1 = rucksack[i];
		let compartment2 = rucksack[i+1];
		let compartment3 = rucksack[i+2];

		let splited = compartment1.split('');

		for (let y of splited) {
			let currentRegex = new RegExp(`[${y}]`, 'g');

			if (compartment2.match(currentRegex) && compartment3.match(currentRegex)) {
				let match = y.charCodeAt(0);

				sum += match > 90 ? match - 96 : match - 64 + 26;

				break;
			}
		}
	}

	console.log(sum)
}

module.exports = aoc3_2;