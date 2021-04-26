const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3002;
console.log(port);
const pool = require("./db.js");

app.use(express.json());
app.use(cors());

app.get("/getting", async (req, res) => {
  try{
    const readInfoFromDB = await pool.query("SELECT * from account");
    res.json(readInfoFromDB);
  } catch (err) {
    console.error(err.message)
  }
});



app.listen(port, () => {console.log(`running on ${port}`) })
