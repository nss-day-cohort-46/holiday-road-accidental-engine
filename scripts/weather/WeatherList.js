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
        <section class="weatherContainer">
            <div class="dayOne>
                <div class="dayOneTemp>${weatherCollection[0]}</div>
                <div class="dayOneDescription">${weatherCollection[5]}</div>
            </div>
            <div class="dayOne>
                <div class="dayOneTemp>${weatherCollection[1]}</div>
                <div class="dayOneDescription">${weatherCollection[6]}</div>
            </div>
            <div class="dayOne>
                <div class="dayOneTemp>${weatherCollection[2]}</div>
                <div class="dayOneDescription">${weatherCollection[7]}</div>
            </div>
            <div class="dayOne>
                <div class="dayOneTemp>${weatherCollection[3]}</div>
                <div class="dayOneDescription">${weatherCollection[8]}</div>
            </div>
            <div class="dayOne>
                <div class="dayOneTemp>${weatherCollection[4]}</div>
                <div class="dayOneDescription">${weatherCollection[9]}</div>
            </div>
        </section>
        `
    }
    
    
    // ${weatherCollection.map(weatherObj => {
    //     `${weatherObj.temp}`}) }