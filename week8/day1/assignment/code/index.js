const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const pool = require("./db.js");
const es6Render = require("express-es6-template-engine");

app.engine("html", es6Render);
app.set("views","../template");
app.set("view engine", "html");

app.use(express.json());

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/happy_thoughts', async (req, res) => {
  try {
    const { thought } = req.body;

    addThoughtIntoDB = await pool.query(
      "INSERT into thoughts (thought) VALUES($1)",
      [thought]
      );

      res.json(addThoughtIntoDB)
  } catch (err) {
    console.error(err.message)
  }
});

app.get("/info/:id", async (req, res) => {
  const {id} =req.params;
  const readInfoDB = await pool.query(
    "SELECT * from thoughts WHERE thoughts_id = ($1)",
    [id]
  );
  res.json(readInfoDB)
  res.render('info', {
  locals: {
    thoughts: readInfoDB
  }
});
});

app.listen(port, () => console.log(`running on port ${port}`)
);
