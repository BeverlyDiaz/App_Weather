import { apiKey } from './config.mjs';

const key = apiKey;

// button click event 
document.querySelector('button').addEventListener('click', function () {
    // console.log('ok')
    let city = document.querySelector('#city-name').value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
        .then(response => response.json())
        .then(data => {
            let weather = data.weather[0].main;
            document.querySelector('.temp').textContent = weather;
           document.querySelector('.city').textContent = data.name;
           document.querySelector('img').src = `images/${weather.toLowerCase()}.png`;
        });

});