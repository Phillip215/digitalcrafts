const heading = document.getElementById("top")
console.log(heading)

const list = document.getElementById("list")
console.log(list)

const listStuff = document.getElementsByClassName("list-stuff")
console.log(listStuff)

const liStuff = document.getElementsByTagName("li")
console.log(liStuff)

const listStuffFirst = document.querySelectorAll(".list-stuff0")
console.log(listStuffFirst)

const newListItem = document.createElement("li")
newListItem.innerText = "Buh"
list.append(newListItem)
