import { useParks } from "../parks/ParkProvider.js"
import "../parks/parkSelect.js"

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
<<<<<<< HEAD:scripts/previews/ParkPreview.js
    <h3>Itinerary Preview</h3>
    <div class="selectedPark">Selected Park: ${selectedPark.name}</div>
=======
    <h3 class="itineraryPreview">Itinerary Preview:</h3>
    <div>Selected Park: ${selectedPark.name}</div>
>>>>>>> main:previews/ParkPreview.js
    <button id="parkDetail--${selectedPark.id}">Park Details</button>
    `
}

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("parkDetail")) {
    const [prefix, parkSelectedId] = clickEvent.target.id.split("--")
    const parkSelectedCustomEvent = new CustomEvent("parkDetailsClicked", {
        detail: {
            parkId: parkSelectedId
        }
    })
    eventHub.dispatchEvent(parkSelectedCustomEvent)
}
})