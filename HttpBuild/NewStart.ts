import stream from "stream";
console.log("");

import http from "https";
import fs from "fs";
import path from "path";

const data = [
	{
		name: "gideon",
		stack: "one stack",
	},
];

const myUrl = "https://fakestoreapi.com/products";

const app = http.createServer();

http.get(myUrl, (res) => {
	let data = "";

	let allData: any = [];
	res.on("data", (chunk) => {
		data += chunk;
	});

	res.on("end", () => {
		let result = JSON.parse(data);
		let rand: number = Math.floor(Math.random() * result.length);
		// const pixing = new stream.transform();

		let results = result[rand];
		let chc = JSON.stringify(results);

		fs.appendFile("put.txt", chc, (err) => {
			if (err) {
				console.log(err);
			} else {
				const pa = fs.readFileSync("put.txt", "utf8");

				allData.push(pa);

				console.log(allData);
			}
		});

		// console.log(result);
	});
});

app.listen(3045, () => {
	console.log("listening");
});
