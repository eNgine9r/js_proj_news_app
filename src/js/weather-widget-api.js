export default class WeatherApiService {};
import WeatherApiService from "./geolocation"

const apiKey = 'e3cf51b9d19c1b71b5828e7d427ff71f';
const city = 'Kyiv';
const url = `https://api.openweathermap.org/data/2.5/weather?lat=50.7641856&lon=25.362432&appid=${apiKey}&units=metric&`;
// const lat = crd.latitude;
// const lon = ;

fetch(url)
  .then(response => response.json())
  .then(data => {
    const weather = document.querySelector('.counteiner');
    const { name, weather: [ {main, icon } ], main: { temp } } = data;
    const roundedTemp = Math.round(temp);
    const date = new Date();
          weather.innerHTML = `
          <div class="weather-info">
          <h2 class="weather-temperature">${roundedTemp}&#176</h2>
          <div class="weather-conloc">
            <h3 class="weather-condition">${main}</h3>
          <p class="location">
            <svg class="icon" width="18" height="18">
                <use href="./images/sprite.svg#icon-location"></use>
            </svg>
            ${name}
          </p>
          </div>
        </div>
        <div class="weather-icon">
          <img src="https://openweathermap.org/img/wn/${icon}@4x.png" alt="">
        </div>
        <ul class="list data-time">
          <li class="">${date.toDateString()}</li>
        </ul>
      </div>
          `;
  })
  .catch(error => console.log(error));


