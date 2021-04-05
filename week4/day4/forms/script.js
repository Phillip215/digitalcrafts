const form = document.querySelector("#center");

const validateName = (name) => {
  // console.log(`Your name is ${name}`);
  myRegex = /[A-Za-z]+/;
  return myRegex.test(name);
};

// const nameOfYourFunction = (num1) => {};
// function name(num1){}

form.addEventListener("submit", (event) => {
  const inp = document.querySelector("#text");
  console.log(inp.value)

  if(validateName(inp.value) === false){
    event.preventDefault();
    alert("Nope my boy")
  }

})


console.log(validateName("Phill"));
