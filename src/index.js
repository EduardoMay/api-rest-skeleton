require("dotenv").config();

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

app.set("port", process.env.API_PORT || 3005);

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.json({ message: "API Rest Skeleton" });
});

app.listen(app.get("port"), () => {
  console.log(`Connected to port: ${app.get("port")}`);
});
