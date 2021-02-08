import { useParks } from "../scripts/parks/ParkProvider.js"
import "../scripts/parks/parkSelect.js"

const eventHub = document.querySelector(".mainContainer")
const contentTarget = document.querySelector(".previews")

eventHub.addEventListener("parkSelect", event => {
    if (event.detail.parkId !== "0") {
        const parksArray = useParks()
        const  parkSelectedEvent = parksArray.find(parksObj => {
            return parksObj.id === event.detail.parkId
        })
        renderItineraryPreview(parkSelectedEvent)
    }
    
})

const renderItineraryPreview = (selectedPark) => {
    contentTarget.innerHTML = `
    <h3>Itinerary Preview</h3>
    <div>Selected Park: ${selectedPark.name}</div>
    <button id="${selectedPark.id}">Park Details</button>
    `
}


eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("parkDetail")) {
    const [prefix, parkSelectedId] = clickEvent.target.value.split("--")
    const parkSelectedCustomEvent = new CustomEvent("parkDetailsClicked", {
        detail: {
            clickedPark: parkSelectedId
        }
    })
    eventHub.dispatchEvent(parkSelectedCustomEvent)
}
})