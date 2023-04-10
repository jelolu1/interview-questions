function deepEquals(valueOne, valueTwo) {
	if (typeof valueOne !== typeof valueTwo) return false;
	if (Array.isArray(valueOne)) {
		if (valueOne.length !== valueTwo.length) return false;

		Array.forEach((v, i) => {
			if (v !== valueTwo[i]) return false;
		});
	}
	if (typeof valueOne === 'object') {
		if (Object.keys(valueOne) !== Object.keys(valueTwo)) return false;

		for (const key in valueOne) {
			if (valueOne[key] !== valueTwo[key]) return false;
		}
		return true;
	}
	if (isNaN(valueOne) === isNaN(valueTwo)) return true;
	return valueOne === valueTwo;
}

console.log(deepEquals('NaN', NaN));
