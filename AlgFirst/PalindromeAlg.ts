const createFunc = (word: string) => {
	let newWord: string = word.toLocaleLowerCase();
	let wording: string[] = newWord.split("");
	let alpha = "abcdefghijklmnopqrstuvwxyz";
	let beta: string[] = [];

	wording.forEach((el) => {
		if (alpha.includes(el)) {
			beta.push(el);
		} else {
			console.log(false);
		}
	});

	let result2 = beta.join("");
	let result = beta.reverse().join("");
	console.log("this is beta", result2);

	if (result === result2) {
		return true;
	} else {
		return false;
	}
};

console.log(createFunc("race car"));

const reverser = (x: number[]) => {
	for (let i = 0; i < x.length; i++) {
		let rev = x[i];
		x[i] = x[x.length - 1 - i];
		x[x.length - 1 - i] = rev;

		return x;
	}
};

console.log(reverser([4, 3, 2, 1]));

const Binary = (arr: number[], value: number) => {
	arr.sort((a, b) => a - b);

	let start = 0;
	let end = arr.length - 1;
	let mid = Math.floor((start + end) / 2);
	console.log("Start: ", start, mid, end);

	while (value !== arr[mid] && start < end) {
		console.log("Start: ", start, mid, end);
		if (value < arr[mid]) {
			end = mid - 1;
		} else {
			start = mid + 1;
		}
		mid = Math.floor((start + end) / 2);
	}

	console.log("Finish: ", start, mid, end);

	if (value === arr[mid]) {
		return mid;
	} else {
		return -1;
	}
};

console.log(Binary([6, 7, 8, 9, 10, 15, 18], 7));

const Pali = (wrd: string): string => {
	const word: string[] = wrd.toLowerCase().split("");
	let letter: string[] = "abcdefghijklmnopqrstuvwxyz".split("");
	let wordData: string[] = [];

	word.forEach((el) => {
		if (letter.indexOf(el) > -1) {
			wordData.push(el);
		}
	});

	let wrd1 = wordData.join("");
	let wrd2 = wordData.reverse().join("");

	if (wrd1 === wrd2) {
		return "correct";
	}

	console.log(wrd1);
	console.log(wrd2);

	return "fail";
};

console.log(Pali("racecarucu"));

// Recursive search method
const RecursiveSearchMethod = (arr: number[], value: number): boolean => {
	let midValue = Math.floor(arr.length / 2);
	let mid = arr[midValue];

	if (value === mid) {
		return true;
	} else if (value < mid && arr.length > 1) {
		return RecursiveSearchMethod(arr.splice(0, midValue), value);
	} else if (value > mid && arr.length > 1) {
		return RecursiveSearchMethod(arr.splice(midValue, arr.length), value);
	}

	return false;
};

console.log(RecursiveSearchMethod([1, 4, 6, 8, 29], 29));
