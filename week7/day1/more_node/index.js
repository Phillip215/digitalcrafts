
const express = require("express")
const app = express()

const PORT = 3005
const {readFile} = require("fs")

app.get("/", (req, res) => {
  const message = "home page";
  res.send(message)
});

app.get("/pageone", (req, res) => {
  readFile("./index.html", "utf8",(html) => {
    res.send(html)
  })
})

app.post("/messages", (req, res) => {

  const {logo, name} = req.body

  const message = `your logo is ${logo} and it is called ${name} `;
  res.send(message)
})

app.get("/anotherplace", (req, res) => {
  res.end("another place");
});

app.listen(PORT, () => {
  console.log(`your server is listening on ${PORT}`);
});
