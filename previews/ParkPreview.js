import { useParks } from "../scripts/parks/ParkProvider.js"
import { ParkSelect } from "../scripts/parks/parkSelect.js"

const eventHub = document.querySelector(".mainContainer")
const contentTarget = document.querySelector(".previews")

// let parkPreview = {
    //     parkId: "",
    //     parkName: "",
// }
// parkPreview.parkId = event.detail.parkId
// parkPreview.parkName = event.detail.fullName

eventHub.addEventListener("parkSelect", event => {
    if (event.detail.parkId !== "0") {
        const parksArray = useParks()
        const  parkSelectedEvent = parksArray.find(parksObj => {
            return parksObj.id === event.detail.parkId
        })
        renderItineraryPreview(parkSelectedEvent)
    }
    
})

// eventHub.dispatchEvent(customEvent)

const renderItineraryPreview = (selectedPark) => {
    // let selectedParkHTMLrep = ""
    
    // selectedParkHTMLrep += ParkSelect(parkObj)
    // not sure what to call here and how to append it..
    // seperate HTML containers for each PreviewItem that is rendered.
    // += to append the next element to preview.
    // detail button needs work.
    // export 
    
    contentTarget.innerHTML = `
    <h3>Itinerary Preview</h3>
    <div>Selected Park: ${selectedPark.name}</div>
    <button id="park--${selectedPark.id}">Park Details</button>
    `
}

eventHub.addEventListener("click", event => {
    if ()
    const customEvent = new CustomEvent("parkDetailsClicked")
})