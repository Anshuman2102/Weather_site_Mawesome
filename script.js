const defaultCity = "Delhi";


async function fetchWeather() {
  const cityInput = document.getElementById("city");
  const cityNameof = document.getElementById("cityNameof");
  const cityName = cityInput.value || defaultCity;

  const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${cityName}`;
  const options = {
    method: "GET",
    headers: {
      'X-RapidAPI-Key': 'f735d1f120mshf4aeb99dada4d28p1621afjsn124644ba0155',
      'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    const weatherData = await response.json();
    
    // Access and update the DOM elements
    cityNameof.innerHTML = cityInput.value || defaultCity;
    cloud_pct.innerHTML = weatherData.cloud_pct;
    feels_like.innerHTML = weatherData.feels_like;
    humidity.innerHTML = weatherData.humidity;
    humidity2.innerHTML = weatherData.humidity;
    max_temp.innerHTML = weatherData.max_temp;
    min_temp.innerHTML = weatherData.min_temp;
    temp.innerHTML = weatherData.temp;
    temp2.innerHTML = weatherData.temp;
    wind_speed.innerHTML = weatherData.wind_speed;
    wind_speed2.innerHTML = weatherData.wind_speed;

    const sunriseTimestamp = weatherData.sunrise;
    const sunriseDate = new Date(sunriseTimestamp * 1000); // Convert to milliseconds
    const sunriseHours = sunriseDate.getHours();
    const sunriseMinutes = sunriseDate.getMinutes();
    const sunriseSeconds = sunriseDate.getSeconds();
    sunrise.innerHTML = `${sunriseHours}:${sunriseMinutes}:${sunriseSeconds}`;

    const sunsetTimestamp = weatherData.sunset;
    const sunsetDate = new Date(sunsetTimestamp * 1000); // Convert to milliseconds
    const sunsetHours = sunsetDate.getHours();
    const sunsetMinutes = sunsetDate.getMinutes();
    const sunsetSeconds = sunsetDate.getSeconds();
    sunset.innerHTML = `${sunsetHours}:${sunsetMinutes}:${sunsetSeconds}`;
    
    console.log(weatherData);
  } catch (error) {
    console.error(error);
  }
}

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetchWeather();
});
fetchWeather();
