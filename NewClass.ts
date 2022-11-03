const point = (n: number) => {
	let result: number;
	outer: for (let x = 0; x >= n; x++) {
		for (let y = n; y >= 0; y--) {
			result = x * y;
			console.log(`the multiple btw x ${x} and y ${y}`);
			if (result % 3 === 0) {
				console.log("Fizz");
			}
		}
	}
};

point(6);

let basket: string[] = ["apple", "orange", "banana", "mango"];

let served: string[] = [];

for (let i = 1; i <= 3; i++) {
	let value: number = Math.floor(Math.random() * basket.length);
	console.log(basket[value]);
}

console.log(served);
