const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3003;
console.log(port);
const pool = require("./db.js");


app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("What up my boy this is the node server")
});

app.get("/look", async (req, res) => {
  try{
    const readNamesFromDB = await pool.query("SELECT * from names");
    res.json(readNamesFromDB);
  } catch (err) {
    console.error(err.message)
  }
})

app.post("/make", async (req, res) => {
  try {
    const { description } = req.body;

    const addBabyNameIntoDB = await pool.query(
      "INSERT INTO names (description) VALUES($1)",
      [description]
    );
  } catch (err) {
    console.error(err.message)
  }
});

app.get("/look/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const readSingleNamesFromDB = await pool.query(
      "SELECT * from names WHERE names_id = ($1)",
      [id]
    );
    res.json(readSingleNamesFromDB)
  } catch (err) {
    console.error(err.message)
  }
});

app.put("/updates/:id", async (req, res) => {
  try{
    const { id } = req.params;
    const { description } = req.body;

    const updateNamesInDB = await pool.query(
      "UPDATE names SET description = $1 WHERE names_id = $2",
      [description, id]
    );
  } catch (err) {
    console.error(err.message)
  }
});

app.delete("/remove/:id", async (req, res) => {
  try{
    const { id } = req.params;
    const removeNamesInDB = await pool.query(
      "DELETE FROM names WHERE names_id = $1",
      [id]
    );
  } catch (err) {
    console.error(err.message)
  }
});

app.listen(port, () => {
  console.log(`your server is running on ${port}`);
});
