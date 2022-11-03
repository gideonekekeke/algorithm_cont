import http from "https";

const URL: string = "https://fakestoreapi.com/products";

const app = http.createServer((req, res) => {
	const { method, ur } = req;
});

app.listen(3031, () => {
	console.log(" server is listening ");
});

// http.get(URL, (res) => {
// 	let data = "";

// 	res.on("data", (chunk) => {
// 		data += chunk;
// 		// console.log(chunk);
// 	});

// 	res.on("end", () => {
// 		let result = JSON.parse(data);
// 		// console.log(result);

// 		let value: number = Math.floor(Math.random() * result.length);

// 		console.log(value);
// 	});
// });
