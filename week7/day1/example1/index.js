const http = require("http");
const express = require("express");
const app = express();
const address = "127.0.0.1";
const PORT = 3005;
const {readFile} = require("fs");


// const server = http.createServer((req,res) => {
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/plain");
//   res.end("hello");
// });

app.get("/", (req, res) => {
  readFile("./index.html", "utf8", (err, html) => {
    res.send(html);
  });
  //   res.end("Hello");
});
app.get("/home", (req, res) => {
  //   res.end("Hello another-place");
  readFile("./homepage.html", "utf8", (err, html) => {
    res.send(html);
  });
});

app.get("/userName", (req, res) => {
  const userName = { user: "joe" };
  res.send(userName);
});

app.listen(PORT, () => {
  console.log(`Your server is listening on ${PORT}`);
});

// server.listen(PORT, address, () => {
//   console.log(`server is on http://${address}:${PORT}`);
// });
