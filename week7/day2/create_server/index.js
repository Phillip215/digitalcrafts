const express = require("express");
const app = express();

const address = "127.0.0.1";
const PORT = 3005;
const {readFile} = require("fs");


app.use(express.json())

app.get("/", (req, res) => {
  res.send("What up");
});

app.get("/about", (req, res) => {
  res.send("About");
});

app.get("/team", (req, res) => {
  res.send("team");
});

app.post("/faq", (req, res) => {
  const {name, height} = req.body;
  console.log(req.body)

  res.send(`${name} and ${height}`)
});

app.listen(PORT, () => {
  console.log(`your server is runnning on ${address}:${PORT}`);
});
