import { getParks } from "./ParkProvider.js"

export const ParkDetails = (park) => {
    const contentContainer = document.querySelector(".previews")

    const parksHTML = `
    <h2>Park Details for ${park.fullName}</h2>
    ${park.data.map(park => {
    return `<section class="park__containter">
    <div class="park__name">Name: ${park.fullName}</div>
    <div class="park__description">Details ${park.description}</div>
    </section>`
    }).join("")}`
    
    contentContainer.innerHTML = parksHTML
}

const eventHub = document.querySelector(".mainContainer")
eventHub.addEventListener("parkDetailsClicked", event => {
    // console.log("event", event)
    const parkId = clickEvent.detail.parkId
    const parksArray = getParks()
    const selectedPark = parksArray.find((park) => park.id === parkId)
    // console.log('selectedPark: ', selectedPark)
    ParkDetails(selectedPark)

})