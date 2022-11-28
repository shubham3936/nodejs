const express = require("express");
const app = express();

const port = process.env.port || 3000;
app.get("/", (req, res) => {
res.send(`<div>
	<h2>Welcome to LPU</h2>
	<h5>Program on express</h5>
</div>`);
});
app.listen(port, () => {
console.log(`Listening to port ${port}`);
});
