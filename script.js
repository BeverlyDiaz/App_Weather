import { apiKey } from './config.mjs';

const key = apiKey;

// button click event 
document.querySelector('button').addEventListener('click', function () {
    // console.log('ok')
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=berlin&appid=${key}`)
        .then(response => response.json())
        .then(data => {
            console.log(data.weather[0].main)
        });

});