const StateAlg = (arr: string[], value: string) => {
	let start = 0;
	let end = arr.length - 1;
	let mid = Math.floor((start + end) / 2);

	while (value !== arr[mid] && start < end) {
		if (value < arr[mid]) {
			end = mid - 1;
		} else {
			start = mid + 1;
		}
		mid = Math.floor((start + end) / 2);
	}

	if (value === arr[mid]) {
		return mid;
	} else {
		return -1;
	}
};

let states = ["Abia", "Jigawa", "Akwa Ibom", "Osun", "Bayelsa", "Yombe", "Imo"];

console.log(StateAlg(states, ""));
