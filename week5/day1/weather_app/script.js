let zipster = document.querySelector("#zipster");
let zippy = 19120
let huh = document.querySelector("#submit")

let api = "https://api.openweathermap.org/data/2.5/weather?zip="
let key = "&appid=44809338e5d8e824fa7709b80e1394d1"
let units = "&units=imperial"


  const weatherData = async ()=> {
    const data = await fetch(api + zippy + key + units);
    const formattedJson = await data.json();
    // console.log(formattedJson);
    let city = document.createElement("h2");
    // city.innerHTML = formattedJson.name
    let feels = document.createElement("p");
    // feels.innerHTML = formattedJson.main.feels_like
    let humidity = document.createElement("p");
    // humidity.innerHTML = formattedJson.main.humidity
    let max = document.createElement("p");
    let min = document.createElement("p");
    let temp = document.createElement("p");
    let left = document.querySelector("#left");

    left.append(city, feels, humidity, temp, max, min);
    city.append(formattedJson.name);
    feels.append(`Feels like: ${formattedJson.main.feels_like}°`);
    humidity.append(`Humidity: ${formattedJson.main.humidity}°`);
    temp.append(`Tempature is: ${formattedJson.main.temp}°`);
    max.append(`Temp Max: ${formattedJson.main.temp_max}°`);
    min.append(`Temp Min: ${formattedJson.main.temp_min}°`);
  }
// weatherData()

huh.addEventListener("click", e => {
  // console.log(weatherData())
  weatherData()
  event.preventDefault();
})
