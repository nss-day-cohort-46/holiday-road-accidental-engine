import { getWeather, useWeather } from "./WeatherProvider.js"

const contentTarget = document.querySelector(".weatherPreview")


export const WeatherList = () => {
    getWeather()
        .then(() => {
            const weather = useWeather()
            // debugger
            console.log(weather)
            render(weather)
        })
}

const render = weatherCollection => {
console.log(weatherCollection)
    contentTarget.innerHTML = `
        <section class="weatherContainer value="${weatherCollection}">
        <div class="weatherContainer--items">${weatherCollection.main}</div>
        <div class="weatherContainer--items">${weatherCollection.description}</div>
        <div class="weatherContainer--items">${weatherCollection.icon}</div>
        </section>
        `
    }
    
    