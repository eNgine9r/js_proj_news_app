navigator.geolocation.getCurrentPosition((function(e){const n=e.coords;let t=n.latitude,a=n.longitude;fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${t}&lon=${a}&appid=e3cf51b9d19c1b71b5828e7d427ff71f&units=metric`).then((e=>e.json())).then((e=>{const n=document.querySelector(".weather-counteiner"),{name:t,weather:[{main:a,icon:i}],main:{temp:o}}=e,c=Math.round(o),s=(new Date).toDateString(),[r,h,l,d]=s.split(" ");n.innerHTML=`\n            <li class="list">\n            <div class="weather-info">\n            <h2 class="weather-temperature">${c}&#176</h2>\n            <div class="weather-conloc">\n              <h3 class="weather-condition">${a}</h3>\n            <p class="weather-location">\n              <svg class="icon" width="18" height="18">\n                  <use href="./images/sprite.svg#icon-location"></use>\n              </svg>\n              ${t}\n            </p>\n            </div>\n          </div>\n          <div class="weather-icon">\n            <img src="https://openweathermap.org/img/wn/${i}@4x.png" alt="${a}">\n          </div>\n          <p class="weather-data-time">${r} <br> ${l} ${h} ${d}</p>\n        </div>\n        </li>\n            `})).catch((e=>console.log(e)))}),(function(e){console.warn(`ERROR(${e.code}): ${e.message}`)}),{enableHighAccuracy:!0,maximumAge:0});
//# sourceMappingURL=index.e0f26f19.js.map
