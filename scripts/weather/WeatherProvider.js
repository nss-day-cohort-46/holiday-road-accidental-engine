import { settings } from "../Settings.js";

let weather = []
let day1 = []
let day2 = []
let day3 = []
let day4 = []
let day5 = []

export const useWeather = () => {
    weather.push(day1, day2, day3, day4, day5)
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
            day2 = parsedWeather.daily[1]
            day3 = parsedWeather.daily[2]
            day4 = parsedWeather.daily[3]
            day5 = parsedWeather.daily[4]
            
            console.log(day1, day2, day3, day4, day5)
        })
        // .then(() => console.log(weather, city))
}

