import { settings } from "../Settings.js";

let weather = []
let city = []

export const useWeather = () => {
    console.log(weather)
    return weather.slice()
};

export const useCity = () => {
    // console.log(city)
    // return city.slice()
};

const weatherAPIkey = settings.weatherKey
// console.log(weatherAPIkey)

//get weather from API-----------------------------------------------------------
export const getWeather = () => {
    return fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=37.5858662&lon=-85.67330523&appid=${weatherAPIkey}`)
        .then(response => response.json())
        .then(parsedWeather => {
            weather = parsedWeather.list
            // debugger
            // for (const aCity in parsedWeather.city){
            //     const cityID = parsedWeather.city["id"]
            //     const cityLat = parsedWeather.city.coord["lat"]
            //     const cityLon = parsedWeather.city.coord["lon"]
            // }
        })
        // .then(() => console.log(weather, city))
}

