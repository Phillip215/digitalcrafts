const express = require("express");
const app = express();
const port = 3000;
const es6Render = require("express-es6-template-engine")

app.engine("html", es6Render);
app.set("views","../template");
app.set("view engine", "html");

// simultate a datbase
const people = [
  {people_id: 1, name: "Lucas", age: 33, job: "construction worker",
listOfKnownAliases: ["Bop", "Rock"],},
{
  people_id: 2, name: "Henry", age:12, job: "being a kid", listOfKnownAliases: ["None"]
},
];

app.get("/", (req, res) => {
  res.render("people")
});

app.get("/person/:id", (req, res) => {
  const { id } = req.params;

    // asynca call to your database, grabe the data, convert it to json
    // send that to res.render aka send it to the template page to display
  const person = people.find((person) => person.people_id.toString()
  === id);
  if (person) {
    res.render("peeps", {
      locals: {
        person: person,
      },
    });
  } else {
    res.status(404).send(`User does not exist, there is no user with the id of ${id}`)
  }
});
app.listen(port, () => console.log(`runnin on ${port}`));
