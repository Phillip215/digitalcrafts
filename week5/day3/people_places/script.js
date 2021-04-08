let peeps = document.querySelector("#peeps")
let user = document.querySelector("#user")

  const PeopleInfo = async ()=> {
    const info = await fetch("https://fakerapi.it/api/v1/persons?_quantity=45&_gender=male&_birthday_start=2005-01-01")
    const formattedJson = await info.json()
    console.log(formattedJson.data)

    let first = document.createElement("ul")

    let people = document.getElementById("people")

    for(let i = 0; i < formattedJson.data.length;i++){

    let li = document.createElement("li")

    li.innerHTML = `
      <p><img src="${formattedJson.data[i].image}"><br>
      Name: ${formattedJson.data[i].firstname} ${formattedJson.data[i].lastname}<br>
      Email: ${formattedJson.data[i].email} <br> Number:${formattedJson.data[i].phone}<br>
      Birthday: ${formattedJson.data[i].birthday}`
      first.appendChild(li)
    }
    people.append(first)

  }
  PeopleInfo()

  const UserInfo = async ()=> {
    const places = await fetch("https://fakerapi.it/api/v1/users?_quantity=45")
    const formattedJson = await places.json()
    console.log(formattedJson)
    let second = document.createElement("ul")

    let user = document.getElementById("user")

    for(let i = 0; i < formattedJson.data.length;i++){
    let li = document.createElement("li")

    li.innerHTML = `
      <p><img src="${formattedJson.data[i].image}"><br>
      Name: ${formattedJson.data[i].firstname} ${formattedJson.data[i].lastname}<br>
      User: ${formattedJson.data[i].username} <br> Password:${formattedJson.data[i].password}<br>
      Email: ${formattedJson.data[i].email}`
      second.appendChild(li)
    }
    user.append(second)

  }
  UserInfo()

  let people = document.querySelector("#people")
  let use = document.querySelector("#use")

  peeps.addEventListener("click", () => {
    people.classList.add('two')
    people.classList.toggle('one')
    user.classList.add('one')
})

  use.addEventListener("click", () => {
    user.classList.add('two')
    user.classList.toggle('one')
    people.classList.add("one")
})
