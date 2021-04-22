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

// create todo
app.post("/todo", async (req, res) => {
  try {
    const { description } = req.body;

    const newTodoInDB = await pool.query(
      "INSERT INTO todo (description) VALUES($1)",
      [description]
    );
    console.log(req.body);
  } catch (err){
    console.error(err.message);
  }
});

// read the todolist
app.get("/read_todos", async (req, res) => {
  try{
    const readTodosFromDB = await pool.query("SELECT * from todo");
    res.json(readTodosFromDB);
  } catch (err) {
    console.error(err.message)
  }
});

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
app.put("/update_todos/:id", async (req, res) => {
  try{
    const { id } = req.params;
    const { description } = req.body;

    const updateToDoInDB = await pool.query(
      "UPDATE todo SET description = $1 WHERE todo_id = $2",
      [description, id]
    );
  } catch (err) {
    console.error(err.message)
  }
});

// delete todolist
app.delete("/delete_todo/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteToDoInDB = await pool.query(
      "DELETE FROM todo WHERE todo_id = $1",
      [id]
    )
  } catch (err) {
    console.error(err.message)
  }
});

app.listen(port, () => {
  console.log(`your server is running on ${port}`);
});
