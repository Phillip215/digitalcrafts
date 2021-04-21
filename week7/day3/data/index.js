const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3002;
console.log(port);
const pool = require("./db.js");

// middleware
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("What up my boy this is the node server")
});

// routes that we define for our node server


// CRUD
app.post("/todo", async (req, res) => {
  try {
    const { description } = req.body;

    const newTodoInDB = await pool.query(
      "INSERT INTO todo (description) VALUES($1)",
      [description]
    );
    console.log(req.body);
  } catch (err){
    console.log(err.messge);
  }
});

// create todo


// read the todolist

    // read a specific todo
app.get("/read_todos/:id", async (req, res) => {
  try {
    const { id } = req.params; // this looks at the url for whatever you put in :

    const readSingleTodoFromDB = await pool.query(
      "SELECT * from todo WHERE todo_id = ($1)",
      [id]
    );
    res.json(readSingleTodoFromDB);
  } catch (err) {
    console.error(err.message);
  }
});

// update the todo item on todolist


// delete todolist


app.listen(port, () => {
  console.log(`your server is running on ${port}`);
});
