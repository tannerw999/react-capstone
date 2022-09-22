require("dotenv").config();
const { SERVER_PORT} = process.env;
const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.post("/api/restaurant", (req, res) => {
    console.log("endpoint hit")
    res.status(200).send("future info of restaurants and stuff")
});

app.listen(SERVER_PORT, () =>
    console.log(`Server is live on port ${SERVER_PORT}.`)
);