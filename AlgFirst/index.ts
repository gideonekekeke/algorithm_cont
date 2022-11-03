// console.log("hello my people");

// import perform from 'perf_hooks'

// let ti = performance.now();

// let xx = { name: "Gideon", scores: { phy: 30, chem: 60, math: 100 } };

// let arr: number[] = [];

// for (let i in xx.scores) {
// 	arr.push(xx.scores[i]);
// }
// console.log(arr.reduce((a, b) => a + b));

// let res = Object.values(xx.scores).reduce((a, b) => a + b);

// console.log(res);

// console.log(ti);

// console.time("FirstIteration");

// const myFunc = (x: number) => {
// 	let result: number = 0;

// 	for (let i = x; i > 0; i--) {
// 		result += i;

// 		console.log(result);
// 	}

// 	return x;
// };

// console.log(myFunc(1000));

// console.timeLog("FirstIteration");

// console.time("SecondIteration");

// const countDown = (x: number) => {
// 	let res: number[] = [];

// 	for (let i = x; i > 0; i--) {
// 		res.push(i);
// 	}

// 	return res.reduce((a, b) => a + b);
// };

// console.log(countDown(1000));

// console.timeLog("SecondIteration");

// console.time("ThirdIteration");
// const formulaCount = (n: number) => {
// 	return (n * (n + 1)) / 2;
// };

// console.log(formulaCount(1000));

// console.timeLog("ThirdIteration");

const newFunc = (n: number) => {
	for (let i = 0; i <= n; i++) {
		console.log(i);
	}
	console.log("Counting down now: ");
	for (let j = n; j >= 0; j--) {
		console.log(j);
	}
};

// newFunc(5);

const newFunc1 = (n: number) => {
	for (let i = 0; i <= n; i++) {
		return 10000 * 1000;
	}
};

// console.log(newFunc1(5));

//O(n^2) O(n + n) O(2n) O(n) O(1)

const newFunc3 = (n: number) => {
	for (let i = 0; i < Math.max(4, n); i++) {
		console.log(i);
	}
};
// >4 O(n) <4 O(1)

const newFunc4 = (n: number) => {
	for (let i = 0; i < Math.min(4, n); i++) {
		console.log(i);
	}
};

// newFunc4(2);

const newFunc5 = (n: number) => {
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			console.log(i, j);
		}
	}
};

// newFunc5(16);

// O(n * n) O(n^2)

const reCall = (n: number) => {
	if (n === 1) {
		return "Done";
	}
	console.log(n);
	reCall(Math.floor(n / 2));
	//   reCall(n / 2);
};

console.log(reCall(5));

const newRecall = (x: number) => {
	while (true) {
		if (x === 1) {
			console.log("done");

			break;
		}

		return Math.floor(x / 2);
	}
};

console.log("this is while recall", newRecall(15));
