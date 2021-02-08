import { settings } from "../Settings.js";

let weather = []
let day1 = []

export const useWeather = () => {
    console.log(weather)
    return weather.slice()
};


const weatherAPIkey = settings.weatherKey
// console.log(weatherAPIkey)

//get weather from API-----------------------------------------------------------
export const getWeather = () => {
    return fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=37.5858662&lon=-85.67330523&exclude=minutely,hourly,alerts&appid=d5b900ebf7bb2e5d1d38789cbb0736b9&units=imperial`)
        .then(response => response.json())
        .then(parsedWeather => {
            day1 = parsedWeather.daily[0]
            
            console.log(day1)
        })
        // .then(() => console.log(weather, city))
}

console.log(day2)