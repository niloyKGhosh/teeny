const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const path = require("path");

const port = process.env.PORT || 3000;

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static(path.join(__dirname, "public")));

app.use(morgan("tiny"));
app.use(bodyParser.json());

app.get("/", (req, res, next) => {
	res.render("index");
});

app.listen(port, () => {
	console.log(`Server is listening at port: ${port}`);
});
