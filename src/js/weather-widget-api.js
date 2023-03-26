export default class WeatherApiService {};

const apiKey = 'e3cf51b9d19c1b71b5828e7d427ff71f';
const city = 'Kyiv';
const url = `https://api.openweathermap.org/data/2.5/weather?lat=50&lon=30&appid=${apiKey}&units=metric&`;
// const lat = ;
// consy lon = ;

fetch(url)
  .then(response => response.json())
  .then(data => {
    const weather = document.querySelector('.counteiner');
    const { name, weather: [ {main, icon } ], main: { temp } } = data;
    const roundedTemp = Math.round(temp);
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
      </div>
          `;
  })
  .catch(error => console.log(error));

const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };
  
  function success(pos) {
    const crd = pos.coords;
  
    console.log("Your current position is:");
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
  }
  
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
  
navigator.geolocation.getCurrentPosition(success, error, options);


