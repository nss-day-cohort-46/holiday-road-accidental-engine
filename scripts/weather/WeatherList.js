import { getWeather, useWeather } from "./WeatherProvider.js"
import { useParks } from "../parks/ParkProvider.js"

const contentTarget = document.querySelector(".weatherPreview")
const eventHub = document.querySelector(".mainContainer")

let parkLat = []
let parkLon = []

//listens for "parkSelect", grabs payload for matching park ID
eventHub.addEventListener("parkSelect", customEvent => {
    let parkId = customEvent.detail.parkId
    let parkArray = useParks()
    let selectedPark = parkArray.find(parkObj => {
        return parkObj.id === parkId
    })
    parkLat = selectedPark.latitude
    parkLon = selectedPark.longitude
    WeatherList(parkLat, parkLon)
})

//gets weather data from API, puts into an array to be rendered----------
export const WeatherList = (lat, lon) => {
    getWeather(lat, lon)
        .then(() => {
            const weatherArray = useWeather()
            render(weatherArray)
        })
}


//renders 5 day forcast to dom---------------------------------------------
const render = weatherCollection => {
    contentTarget.innerHTML = `
        <section class="weatherContainer">
            <div class="day">
                <div class="dayOneTemp">${weatherCollection[0]}</div>
                <div class="dayOneDescription">${weatherCollection[5]}</div>
            </div>
            <div class="day">
                <div class="dayTwoTemp">${weatherCollection[1]}</div>
                <div class="dayTwoDescription">${weatherCollection[6]}</div>
            </div>
            <div class="day">
                <div class="dayThreeTemp">${weatherCollection[2]}</div>
                <div class="dayThreeDescription">${weatherCollection[7]}</div>
            </div>
            <div class="day">
                <div class="dayFourTemp">${weatherCollection[3]}</div>
                <div class="dayFourDescription">${weatherCollection[8]}</div>
            </div>
            <div class="day">
                <div class="dayFiveTemp">${weatherCollection[4]}</div>
                <div class="dayFiveDescription">${weatherCollection[9]}</div>
            </div>
        </section>
        `
}

