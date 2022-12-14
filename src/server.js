import express from "express";
import { mapOrder } from "./utilities/sorts.js";

const app = express();

const hostname = "localhost";
const port = 8017;

app.get("/", (req, res) => {
  res.end("<h1>Hello world</h1> <hr/>");
});

app.listen(port, hostname, () => {
  console.log(`Hello tranphuson, I'm running at ${hostname}:${port}/`);
});
