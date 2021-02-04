//import statement for useParks & getParks

import { useParks, getParks } from "../parks/ParkProvider.js"

//Define eventHub & querySelector()
const eventHub = document.querySelector(".mainContainer")

//define contentTarget & querySelector() that references where on the DOM <select> will be rendered
const contentTarget = document.getElementById("parksButton")

//Listen for a change on eventHub. If eventListener detects a change, changeEvent function runs
// eventHub.addEventListener("change", changeEvent => {
//     //if eventListener detects a change on the "parkSelect" element...
//     if (changeEvent.target.id === "parksButton") {
//         //gets the name of the currently selected park
//         export const selectedPark = changeEvent.target.value
        
//         //create new custom event to be dispatched
//         const parkSelectedCustomEvent = new CustomEvent("parkSelect", {
//             detail: {
//                 selectedPark: selectedPark
//             }
//         })
//         //dispatch the custom event
//         eventHub.dispatchEvent(parkSelectedCustomEvent)
        
//     }
// })

export const ParkSelect = () => {
    //Trigger the fetch from the API
    getParks()
        .then(() => {
            //return all parks with useParks
            const parks = useParks()
            render(parks)
        })
}

//funtion to render list on DOM
const render = parkCollection => {
    
    contentTarget.innerHTML = `
        <option value="0">Please select a park...</option>
        ${parkCollection.map(park => `<option value="${park.name}">${park.name}</option>`).join("")}  
    `
}
