const apiKey = "f9dde298bddec7c4bbeb806116c497b7";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search-input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await response.json();

    document.querySelector(".City").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp - 273.15) + "°C";

    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = src = "images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = src = "images/clear.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = src = "images/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = src = "images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = src = "images/mist.png";
    } else if (data.weather[0].main == "Snow") {
      weatherIcon.src = src = "images/snow.png";
    } else {
      weatherIcon.src = src = "images/wind.png";
    }

    document.querySelector(".weather").style.display = "block"; // block the display element -> display weather
    document.querySelector(".error").style.display = "none";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
