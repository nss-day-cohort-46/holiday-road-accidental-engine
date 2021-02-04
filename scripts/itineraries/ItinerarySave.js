//Import POST function
import { saveItinerary } from "./itinerariesDataProvider.js"

//define eventHub & querySelector()
const eventHub = document.querySelector(".mainContainer")

// Handle browser-generated click event in component
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "addToItinerary") {
        debugger
        // assign captured elements to new variables
        const park = document.getElementById("parksButton").value
        const eatery = document.getElementById("eateryButton").value
        const bizarraries = document.getElementById("bizarrariesButton").value
        
       //define new objects with said variables
        const newItinerary = {
            "park": park,
            "eatery": eatery,
            "bizarraries": bizarraries,
            
            
        }
        // debugger

        // Change API state and application state
        saveItinerary(newItinerary)
    }
})