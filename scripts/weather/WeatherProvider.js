import { settings } from "../Settings.js";

let weather = [];


export const useWeather = () => {
    debugger
    weather.slice();
};
const weatherAPIkey = settings.weatherKey

//get weather from API
export const getWeather = () => {
    return fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=37.5858662&lon=-85.67330523&appid=${weatherAPIkey}`)
        .then(response => response.json())
        .then(parsedWeather => weather = parsedWeather.list)
}

