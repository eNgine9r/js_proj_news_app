console.log(),navigator.geolocation.getCurrentPosition((function(e){const n=e.coords;console.log("Your current position is:"),console.log(`Latitude : ${n.latitude}`),console.log(`Longitude: ${n.longitude}`),console.log(`More or less ${n.accuracy} meters.`)}),(function(e){console.warn(`ERROR(${e.code}): ${e.message}`)}),{enableHighAccuracy:!0,timeout:5e3,maximumAge:0});fetch("https://api.openweathermap.org/data/2.5/weather?lat=50.7641856&lon=25.362432&appid=e3cf51b9d19c1b71b5828e7d427ff71f&units=metric&").then((e=>e.json())).then((e=>{const n=document.querySelector(".counteiner"),{name:o,weather:[{main:t,icon:a}],main:{temp:i}}=e,c=Math.round(i),s=new Date;n.innerHTML=`\n          <div class="weather-info">\n          <h2 class="weather-temperature">${c}&#176</h2>\n          <div class="weather-conloc">\n            <h3 class="weather-condition">${t}</h3>\n          <p class="location">\n            <svg class="icon" width="18" height="18">\n                <use href="./images/sprite.svg#icon-location"></use>\n            </svg>\n            ${o}\n          </p>\n          </div>\n        </div>\n        <div class="weather-icon">\n          <img src="https://openweathermap.org/img/wn/${a}@4x.png" alt="">\n        </div>\n        <ul class="list data-time">\n          <li class="">${s.toDateString()}</li>\n        </ul>\n      </div>\n          `})).catch((e=>console.log(e)));
//# sourceMappingURL=index.cf7e2bb5.js.map
