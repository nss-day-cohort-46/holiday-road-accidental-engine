import { useParks } from "../scripts/parks/ParkProvider.js"
import { ParkSelect } from "../scripts/parks/parkSelect.js"

const eventHub = document.querySelector(".mainContainer")
const contentTarget = document.querySelector(".previews")
const customEvent = new CustomEvent("parkDetailsClicked")

let parkPreview = {
    parkId: "",
    parkName: "",
}

eventHub.addEventListener("parkSelect", event => {
    if (event.detail.parkId !==0) {
        const parksArray = useParks()
        const  parkSelectedEvent = parksArray.find(parksObj => {
            return parksObj.id === event.detail.parkId
        })
        parkPreview.parkId = event.detail.parkId
        parkPreview.parkName = event.detail.fullName
        // renderItineraryPreview()
            }
            eventHub.dispatchEvent(customEvent)

})


const renderItineraryPreview = (selectedPark) => {
    let selectedParkHTMLrep = ""
    for (const parkObj of selectedPark) {
        selectedParkHTMLrep += ParkSelect(parkObj)
    }
    // seperate HTML containers for each PreviewItem that is rendered.
    // += to append the next element to preview.
    // detail button needs work.
    // export 
    const ParkDetailsButton = (park) => {
        return `<button id="park--${park.id}">Park Details</button>`
    }

    contentTarget.innerHTML = `
        <h3></h3>
        <div>${selectedParkHTMLrep}</div>
    `

}