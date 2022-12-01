function aoc1_1(inventory) {
	let currentCalories = 0;
	let elves = [];
	
	let i, max = inventory.length;

	for (i = 0; i <= max; i++) {
		if (inventory[i] === '' || i === max) {
			elves.push(currentCalories);
			currentCalories = 0;
		}

		currentCalories += Number(inventory[i]);
	}

	let whoBroughtMost = elves.sort((a, b) => b - a);

	console.log(whoBroughtMost[0]);
}

module.exports = aoc1_1;