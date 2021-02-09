import { settings } from "../Settings.js";

let weather = []
let day1 = []
let day2 = []
let day3 = []
let day4 = []
let day5 = []

let temp1 = []
let temp2 = []
let temp3 = []
let temp4 = []
let temp5 = []

let des1 = []
let des2 = []
let des3 = []
let des4 = []
let des5 = []

//creates+copies an array with temps and descriptions---------------------
export const useWeather = () => {
    weather.splice(0, 10)
    weather.push(temp1, temp2, temp3, temp4, temp5, des1, des2, des3, des4, des5)
    return weather.slice()
};

const weatherAPIkey = settings.weatherKey
// console.log(weatherAPIkey)

//get temp and weather description from API-----------------------------------------------------------
export const getWeather = (lat, lon) => {
    return fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&appid=${weatherAPIkey}&units=imperial`)
        .then(response => response.json())
        .then(parsedWeather => {
            //finds each day from API and puts into var---
            day1 = parsedWeather.daily[0]
            day2 = parsedWeather.daily[1]
            day3 = parsedWeather.daily[2]
            day4 = parsedWeather.daily[3]
            day5 = parsedWeather.daily[4]
            //grabs temperature for each day---
            temp1 = parseInt(day1.temp.day)
            temp2 = parseInt(day2.temp.day)
            temp3 = parseInt(day3.temp.day)
            temp4 = parseInt(day4.temp.day)
            temp5 = parseInt(day5.temp.day)
            //grabs weather description for each day---
            des1 = day1.weather[0].description
            des2 = day2.weather[0].description
            des3 = day3.weather[0].description
            des4 = day4.weather[0].description
            des5 = day5.weather[0].description
        })

}

