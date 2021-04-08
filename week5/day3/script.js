$(document).ready(() => {
  console.log("What up my boy")
});

const divCon = document.createElement("div");
const $jDivCon = $("<div>");

const $header3 = $("<h3>" , {
  text: "Phill" ,
});

$header3.css("color" , "blue");

$jDivCon.append($header3);
console.log($jDivCon);
$(document.body).append($jDivCon);
