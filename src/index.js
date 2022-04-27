// search Engine

function search(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#cityInput");
  let key = "1989ce48f0ddeb9155d07cad2fe7cac2";
  let urlApi = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=${key}&units=metric  `;
  axios.get(urlApi).then(displayCityTemperature);
}

let cityTemp = document.querySelector("#cities");
cityTemp.addEventListener("submit", search);

function displayCityTemperature(response) {
  let degrees = Math.round(response.data.main.temp);
  let h4 = document.querySelector(" h4");
  h4.innerHTML = `It is currently ${degrees}°C`;
  // console.log(response);
}
//display currentposition

function currentPosition(position) {
  // let temperature = Math.round(response.data.main.temp);
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let key = "1989ce48f0ddeb9155d07cad2fe7cac2";
  let positionApi = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric`;

  axios.get(positionApi).then(displayCityTemperature);
}

//this part is in working prozess: the temperature of current Location show but the cityname don't change accordingly...

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(currentPosition);

  let key = "1989ce48f0ddeb9155d07cad2fe7cac2";
  let currentCityLocation = ` https://api.openweathermap.org/data/2.5/weather?id=2172797&appid=${key} `;
  if (currentCityLocation.length !== 0) {
    let h2 = document.querySelector(".cityname");
    h2.innerHTML = " ";
  }
}
let currentLocation = document.querySelector("button");
currentLocation.addEventListener("click", getCurrentLocation);

//week 4
function findDate() {
  let currentDate = new Date();
  //la semaine commence par dimanche avec l index 0
  let days = ["Sonday", "Monday", "Tuesday", "Wednesday", "Friday", "Saturday"];
  let day = days[currentDate.getDay()];
  let date = currentDate.getDate();
  let hours = currentDate.getHours();
  let minute = currentDate.getMinutes();
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "Juni",
    "Juli",
    "August",
    "September",
    "October",
    "November",
    "Dezember",
  ];
  let month = months[currentDate.getMonth()];
  let newDate = document.querySelector("h3");

  newDate.innerHTML = `${day} ${date} ${month}, ${hours}:${minute}`;
}

findDate();

function searchCity(event) {
  event.preventDefault();
  let city = document.querySelector("#cityInput");
  let newCity = document.querySelector("#newCity");
  if (city.value) {
    newCity.innerHTML = `${city.value} `;
  } else {
    alert(` please enter a city`);
  }
}
let citynames = document.querySelector("#cities");
citynames.addEventListener("submit", searchCity);
//searchCity(); don't work, we call the function hier with addEventListener!

//converting the temperature
// celcius
function convertCelciusDay(event) {
  event.preventDefault();

  let dayCelsius = document.querySelector(".temperature");
  dayCelsius.innerHTML = 17;
}

let dayC = document.querySelector("#celciusDay");
dayC.addEventListener("click", convertCelciusDay);

function convertCelciusNight(event) {
  event.preventDefault();
  let nightCelsius = document.querySelector(".temperature");
  nightCelsius.innerHTML = 10;
}

let nightC = document.querySelector("#celciusNight");
nightC.addEventListener("click", convertCelciusNight);

// Fahrenheit
function convertFahrenheitDay(event) {
  event.preventDefault();
  let dayFahrenheit = document.querySelector(".temperature");
  dayFahrenheit.innerHTML = 62.6;
}

let dayF = document.querySelector("#fahrenheitDay");
dayF.addEventListener("click", convertFahrenheitDay);

function convertFahrenheitNight(event) {
  event.preventDefault();
  let nightFahrenheit = document.querySelector(".temperature");
  nightFahrenheit.innerHTML = 50;
}
let nightF = document.querySelector("#fahrenheitNight");
nightF.addEventListener("click", convertFahrenheitNight);
