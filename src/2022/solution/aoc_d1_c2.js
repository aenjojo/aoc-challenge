function aoc1_2(inventory) {
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

	console.log((whoBroughtMost[0] + whoBroughtMost[1] + whoBroughtMost[2]));
}

module.exports = aoc1_2;