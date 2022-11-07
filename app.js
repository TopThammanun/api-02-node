const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const dotenv = require('dotenv');
dotenv.config();

const app = express();

//create a server
const data = require("./routes/data");

app.use(morgan("tiny"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/books", data);

app.get("/", (req, res) => {
    res.sendStatus(204);
});

app.listen(9090, () => {
    console.log("Listening on port 9090");
});