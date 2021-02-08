import { getWeather, useWeather } from "./WeatherProvider.js"

const contentTarget = document.querySelector(".weatherPreview")


export const WeatherList = () => {
    getWeather()
        .then(() => {
            const weatherArray = useWeather()
            render(weatherArray)
        })
}

const render = weatherCollection => {
    // debugger
// console.log(weatherCollection)
    contentTarget.innerHTML = `
        <section class="weatherContainer value="${weatherCollection.map(weatherObj => {
            `${weatherObj.temp}`}) }">
        <div class="weatherContainer--items">${weatherCollection}</div>
        <div class="weatherContainer--items">${weatherCollection}</div>
        <div class="weatherContainer--items">${weatherCollection}</div>
        </section>
        `
    }
    
    