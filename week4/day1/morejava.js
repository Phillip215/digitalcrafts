// string interpolation
let height = "6ft"
let weight = "140lbs"
let JoesHeight = `Joes height is ${height} and weight is ${weight}.`
console.log(JoesHeight)

// for in is for objects
const PizzaPie = {

  FirstPizza: {
    crust: "thin",
    toppings: ["pepperoni", "sausage", "onion", "mushroom", "spinach"],
    size: "large",
    sauce: "alfredo"
  }
}

for(let pizza in PizzaPie) {
  console.log(PizzaPie[pizza]);
}

// for of is for arrays
let cars = ["Subaru", "AUdi", "Honda"]

for (const car of cars) {
  console.log(`this is a`, car);
}

// if statements

// if(condition){
//   do something
// } else if {
//   do something else
// } else {
  // do this
// }
