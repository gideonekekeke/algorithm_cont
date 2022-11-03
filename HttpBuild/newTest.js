const https = require("node:https");

const myUrl = "https://fakestoreapi.com/products";

const app = https.createServer();
// res.write("hello");
// res.end();

https
	.get(myUrl, (res) => {
		console.log("statusCode:", res.statusCode);
		console.log("headers:", res.headers);

		res.on("data", (d) => {
			process.stdout.write(d);
		});
	})
	.on("error", (e) => {
		console.error(e);
	});

app.listen(4040, (hey) => {
	console.log("listening");
});
