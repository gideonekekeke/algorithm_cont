// import prompt from "prompt-sync";
import prompt from "prompt-sync";

const Input = prompt();

const BasketFunction = (basket: string[]) => {
	const serverd: string[] = [];
	const predict: string[] = [];

	for (let i = 1; i <= 3; i++) {
		const RandValues: number = Math.floor(Math.random() * basket.length);
		serverd.push(basket[RandValues]);
	}
	// console.log("please predict from this basket", basket);

	for (let i = 1; i <= 3; i++) {
		let predictInput = Input(`Enter your 3 prediction : `);
		console.log(predictInput);
		predict.push(predictInput);
	}

	let arr: boolean[] = [];

	serverd.forEach((el) => {
		predict.forEach((props) => {
			arr.push(el === props);
		});
	});

	let result = arr.filter((el) => el === true).length;

	console.log(result);
	console.log("");

	if (result >= 2) {
		console.log("Well Done...!");
	} else {
		console.log("Try Again");
	}
};

let fruits: string[] = [
	"Apple",
	"PawPaw",
	"Orange",
	"Grape",
	"Mango",
	"Carrot",
	"Watermelon",
	"Banana",
	"Kashwe",
	"Cumcumber",
];

console.log(BasketFunction(fruits));
