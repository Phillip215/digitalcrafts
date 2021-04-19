console.log("it's running")

const http = require("http")
const express = require("express")
const app = express()
const address = "127.0.0.1"
const PORT = 3005
const {readFile} = require("fs")


// const server = http.createServer((req,res) => {
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/plain");
//   res.end("hello");
// });

app.get("/",(req, res) =>{
  readFile("./indexhtml", "utf8",(html) => {
    res.send(html)
  })
});

app.get("/anotherplace", (req, res) => {
  res.end("another place");
});

app.get("/user", (req, res) => {
  const user = { user: "phill"};
  res.send(user);
})

app.listen(PORT, () => {
  console.log(`your server is listening on ${PORT}`);
});

// server.listen(PORT, address, () => {
//   console.log(`server is on http://${address}:${PORT}`);
// });
