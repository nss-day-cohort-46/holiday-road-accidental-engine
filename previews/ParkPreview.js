import { useParks } from "../scripts/parks/ParkProvider.js"
import { ParkSelect } from "../scripts/parks/parkSelect.js"

const eventHub = document.querySelector(".mainContainer")
const contentTarget = document.querySelector(".previews")

// let parkPreview = {
//     parkId: "",
//     parkName: "",
// }

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
            // dispatch "selectedPark"
})


const renderItineraryPreview (selectedPark) => {
    let selectedParkHTMLrep = ""
    for (const parkObj of selectedPark) {
        selectedParkHTMLrep += ParkSelect(parkObj)
    }
    // render parkSelected name to DOM.
    // render details button to DOM with payload.
    // seperate HTML containers for each PreviewItem that is rendered.
    // += to append the next element to preview.

    render ParkDetailsButton
    export const ParkDetailsButton = (park) => {
        return `<button id="park--${park.id}">Park Details</button>`
    }
}




// const renderToDom = (criminalCollection) => {
//     let criminalsHTMLRepresentations = ""
  
//     for (const criminal of criminalCollection) {
//       criminalsHTMLRepresentations += Criminal(criminal)
//     }
    
//     criminalsContainer.innerHTML = `
//     <h3>Criminals</h3>
//     <section class="criminalsList">
//     ${criminalsHTMLRepresentations}
//     </section>`
//   }