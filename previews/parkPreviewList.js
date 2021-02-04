import { ParkSelect } from "../scripts/parks/parkSelect.js"

const eventHub = document.querySelector(".mainContainer")
const contentTarget = document.querySelector(".previews")

eventHub.addEventListener("parkSelect", event => {
    if (event.detail.id !==0) {
        console.log(event.detail.selectedPark)
        // .find()
        //use ID given to search through array and find object with matchingID.
        //given the object.. access the name of the park
        //render to DOM
        render()
            }
})

const render () => {
    
}