const express = require("express");
const app = express();
const PORT = 8080;

path = require("path");
rootDir = require("./util/path");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/public"));

app.set("views", "views");
app.set("view engine", "ejs");

const homeRouter = require("./routes/home");

app.use(homeRouter);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
