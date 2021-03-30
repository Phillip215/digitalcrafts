
function calc(opper, num1, num2) {
  if(opper == "+"){
  let x = num1 + num2
  console.log(x)
  } else if (opper == "-") {
  let a = num1 - num2
  console.log(a)
  } else if (opper == "*") {
  let b = num1 * num2
  console.log(b)
  } else if (opper == "/" ) {
  let c = num1 / num2
  console.log(c)
  } else {
    console.log("error")
  }
}

calc("*", 10, 2)

// function Add(num1, num2) {
//   let x = num1 + num2
//   console.log(x)
// }
// Add(66, 44)

// function Sub(num1, num2) {
//   let x = num1 - num2
//   console.log(x)
// }
// Sub(222020, 138995)

// function Mul(num1, num2) {
//   let x = num1 * num2
//   console.log(x)
// }
// Mul(22, 82)

// function Div(num1, num2) {
//   let x = num1 / num2
//   console.log(x)
// }
// Div(35000, 2)
