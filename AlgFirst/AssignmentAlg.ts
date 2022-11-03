console.time("start");
const testFunc = (dataset: string[]) => {
	const res = dataset.filter((item, index) => dataset.indexOf(item) === index);

	console.log(res);
};

let question = [
	"what is your name?",
	"how old are you?",
	"how many times did you study today",
	"what is your name?",
	"how many times did you study today",
];

// console.log(testFunc(question));

console.timeEnd("start");

const testFunc2 = (dataset: string[]) => {
	let check: boolean[] = [];
	for (let i = 0; i < dataset.length; i++) {
		dataset.filter((el) => {
			console.log(el === dataset[i]);
			check.push(el === dataset[i]);
		});
	}

	const res = check.filter((el) => el === true);

	console.log(res);
};

console.log(testFunc2(question));

const myPali = (wrd: string): boolean => {
	let word: string[] = wrd.toLowerCase().split("");
	let letter: string[] = "abcdefghijklmnopqrstuvwxyz".split("");
	let entry: string[] = [];

	word.forEach((el) => {
		if (letter.indexOf(el) > -1) {
			entry.push(el);
		}
	});

	let wrd1 = entry.join("");
	let wrd2 = entry.reverse().join("");
	if (wrd1 === wrd2) {
		return true;
	}
	return false;
};

// console.log(myPali("madam"));

// console.time("While Loop: ");

const BinaryWord = (arr: number[], val: number) => {
	let start = 0;
	let end = arr.length - 1;
	let mid = Math.floor((start + end) / 2);

	console.log("Starting Point: ", start, mid, end);

	while (val !== arr[mid] && start < end) {
		if (val < arr[mid]) {
			end = mid - 1;
		} else {
			start = mid + 1;
		}
		mid = Math.floor((start + end) / 2);
		console.log("Looping Point: ", start, mid, end);
	}
	console.log("Ending Point: ", start, mid, end);
	if (val === arr[mid]) {
		return true;
	}
	return false;
};
console.log("");

// console.log(BinaryWord([1, 4, 6, 8, 29], 29));
// console.timeLog("While Loop: ");

// Recursive Method

console.time("Recursive: ");
const RecursiveMethod = (arr: number[], value: number) => {
	let midValue = Math.floor(arr.length / 2);
	let mid = arr[midValue];

	if (value === mid) {
		return true;
	} else if (value < mid && arr.length > 1) {
		return RecursiveMethod(arr.splice(0, midValue), value);
	} else if (value > mid && arr.length > 1) {
		return RecursiveMethod(arr.splice(midValue, arr.length), value);
	}
	return false;
};
// console.log(RecursiveMethod([1, 4, 6, 8, 29], 29));

// console.timeLog("Recursive: ");

//  Native Search
const NativeSearch = (word: string, value: string): number => {
	let store = 0;
	word = word.toLowerCase();
	value = value.toLowerCase();
	for (let i = 0; i < word.length; i++) {
		for (let j = 0; j < value.length; j++) {
			// console.log(word[i], value[j]);
			// console.log(i, j);

			if (value[j] !== word[i + j]) {
				break;
			} else if (j === value.length - 1) {
				store++;
			}
		}
	}

	return store;
};

console.log(
	NativeSearch(
		"you can be what you want to be, if you believe just trust the PROCESS",
		"you believe",
	),
);
