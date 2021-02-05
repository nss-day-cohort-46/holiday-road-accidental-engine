//Import POST function
import { saveItinerary } from "./itinerariesDataProvider.js"
import { useParks, getParks } from "../parks/ParkProvider.js"

//define eventHub & querySelector()
const eventHub = document.querySelector(".mainContainer")

let newItineraryObject = {
    parkId: "",
    parkName: "",
    eateryId: "",
    eateryName: "",
    bizzarriekId: "",
    bizzarrieName: "",
    }

//listen for dropdown custom events
eventHub.addEventListener("parkSelect", customEvent => {

    //access payload of custom event
    let parkId = customEvent.detail.parkId
    //use find method to match park id with name
    let parkArray = useParks()
    let selectedPark = parkArray.find(parkObj => {
        return parkObj.id === parkId 
    })



    newItineraryObject.parkName = selectedPark.fullName
    console.log(newItineraryObject.parkName)
    
    //set variables for id and name
   
})


// eventHub.addEventListener("eateryCustomEvent", customEvent => {
//     let selectedEatery = clickEvent.target.value
//     debugger
// })


// eventHub.addEventListener("bizarreSelectedEvent", customEvent => {
//     let selectedBizarrary = clickEvent.target.value
//     debugger
// })


// Handle browser-generated click event in component
// eventHub.addEventListener("click", clickEvent =>
// {
    
//     if (clickEvent.target.id === "addToItinerary")
//     debugger
//     {
//         // assign captured variables to new object
//         const newItinerary = {
//             "park": selectedPark,
//             "eatery": selectedEatery,
//             "bizarrary": selectedBizarrary,            
//         }

//         // Change API state and application state
//         saveItinerary(newItinerary)
//     }
// })