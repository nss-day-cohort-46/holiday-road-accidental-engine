import { useParks } from "../scripts/parks/ParkProvider.js"
import { ParkSelect } from "../scripts/parks/parkSelect.js"

const eventHub = document.querySelector(".mainContainer")
const contentTarget = document.querySelector(".previews")
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
        // .find()
        //use ID given to search through array and find object with matchingID.
        //given the object.. access the name of the park
        //render to DOM
        // render()
            }
})

// dispatch "selectedPark"

// const render () => {
    //render parkSelected name to DOM.
    //render details button to DOM with payload.
    //seperate HTML containers for each PreviewItem that is rendered.
    //+= to append the next element to preview.
// }
