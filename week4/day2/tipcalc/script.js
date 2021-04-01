let tipsy = document.getElementById("tipsy");

tipsy.addEventListener("click", function() {
  let bill = document.getElementById("bill-amount").value;
  let tipPercentage = document.getElementById("tip-percentage").value;

  let tipAmount = document.getElementById("tip-amount").value = bill * tipPercentage;
  let total = document.getElementById("total").value = parseFloat(bill) + parseFloat(tipAmount);

  let un = document.querySelector("#unorder")
  let place = document.createElement("li")
  place.innerText = total
  un.append(place)
})
