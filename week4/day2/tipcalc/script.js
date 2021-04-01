let maths = document.querySelector("#maths");
console.log(maths)

const validateNumber = (number) => {

  myRegex = /^[0-9]*$/;
  return myRegex.test(number);
};

maths.addEventListener("submit", (event) => {
  const put = document.querySelector("#bill-amount");
  console.log(put.value)

  if(validateNumber(put.value) === false) {
    event.preventDefault();
    console.log("nope")
  }
})

maths.addEventListener("submit", (event) => {
  const put = document.querySelector("#tip-percentage");
  console.log(put.value)

  if(validateNumber(put.value) === false) {
    event.preventDefault();
  }
})

let tipsy = document.querySelector("#tipsy")

tipsy.addEventListener("click", function(){
  let bill = document.getElementById("bill-amount").value;
  let tipPercentage = document.getElementById("tip-percentage").value;

  let tipAmount = document.getElementById("tip-amount").value = bill * tipPercentage;
  let total = document.getElementById("total").value = parseFloat(bill) + parseFloat(tipAmount);

  let un = document.querySelector("#unorder")
  let place = document.createElement("li")
  place.innerText = total
  un.append(place)
})
