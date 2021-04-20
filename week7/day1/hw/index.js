const express = require("express");
const app = express();

const PORT = 3005;

app.use(express.json());


app.get("/", (req, res) => {
  res.send("Whoa");
});

app.get("/store", (req, res) => {
  res.send("store");
});

app.get("/contact", (req, res) => {
  res.send("contact");
});

app.listen(PORT, () => {
  console.log(`Your server is being hosted on localhost:${PORT}`);
});
