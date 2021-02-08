import { getWeather, useWeather, useCity } from "./WeatherProvider.js"

const contentTarget = document.querySelector(".weatherPreview")


export const WeatherList = () => {
    getWeather()
        .then(() => {
            const weatherArray = useWeather()
            // const cityArray = useCity()
            render(weatherArray)
        })
}

const render = weatherCollection => {
    debugger
    const weatherToString = weatherCollection
// console.log(weatherCollection)
    contentTarget.innerHTML = `
        <section class="weatherContainer value="${weatherCollection.map(weatherObj => {
            `${weatherObj.main.temp}`}) }">
        <div class="weatherContainer--items">${weatherCollection}</div>
        <div class="weatherContainer--items">${weatherCollection}</div>
        <div class="weatherContainer--items">${weatherCollection}</div>
        </section>
        `
    }
    
    