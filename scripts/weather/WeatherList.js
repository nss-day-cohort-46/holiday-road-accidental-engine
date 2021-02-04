import { useWeather, getWeather} from "./WeatherProvider.js"

const contentTarget = document.querySelector(".weatherPreview")


export const WeatherList = () => {
    getWeather()
        .then(() => {
            const weather = useWeather()
            // console.log(weather)
            render(weather)
        })
}

const render = weatherCollection => {
debugger
console.log(weatherCollection)
    contentTarget.innerHTML = `
        <section class="weatherContainer value="${weatherCollection[0].id}">
            <div class="weatherContainer--items">${weatherCollection[0].main}</div>
            <div class="weatherContainer--items">${weatherCollection[0].description}</div>
            <div class="weatherContainer--items">${weatherCollection[0].icon}</div>
    `
}

