//Import POST function
import { saveItinerary } from "./ItinerariesDataProvider.js"
import { useParks } from "../parks/ParkProvider.js"
import { useEateries } from "../eateries/EateryProvider.js"
import { useAttractions } from "../attractions/AttractionProvider.js"
import { itineraryHTMLConverter } from "./Itineraries.js"


//define eventHub & querySelector()
const eventHub = document.querySelector(".mainContainer")
const contentTarget = document.getElementById("saveButton")

//render save button to DOM
export const renderSaveButton = () => {

        contentTarget.innerHTML = `
        <button class="button" id="addToItinerary">Save Itinerary</button>
        `

}



let newItineraryObject = {
    parkId: "",
    parkName: "",
    eateryId: "",
    eateryName: "",
    bizarrieId: "",
    bizarrieName: ""
}

//listen for parkSelect custom events
eventHub.addEventListener("parkSelect", customEvent => {
    console.log(newItineraryObject)
    
    //access payload of custom event
    let parkId = customEvent.detail.parkId
    
    //assign useParks() to a variable so it can be searched with .find()
    let parkArray = useParks()
    
    //use .find method to return the park you're looking for and assign it to a variable
    let selectedPark = parkArray.find(parkObj => {
        return parkObj.id === parkId 
    })
    
    //assign the captured data to newItineraryObject values
    newItineraryObject.parkId = parkId
    newItineraryObject.parkName = selectedPark.fullName
    console.log(newItineraryObject)
    
    //enable save button if all dropdowns have been selected
    if (newItineraryObject.parkName !== "" && newItineraryObject.eateryName !== "" && newItineraryObject.bizarrieName !== "") {
        enableBtn()
    }
})

// //listen for eateryChosen custom events
eventHub.addEventListener("eateryChosen", customEvent => {

    //access payload of custom event
    let eateryId = customEvent.detail.eateryThatWasChosen

    //assign useEateries() to a variable so it can be searched with .find()
    let eateryArray = useEateries()
    
    //use .find method to return the eatery you're looking for and assign it to a variable
    let selectedEatery = eateryArray.find(eateryObj => {
        return eateryObj.id === parseInt(eateryId) 
    })
    //assign the captured data to newItineraryObject values
    
    newItineraryObject.eateryId = eateryId
    newItineraryObject.eateryName = selectedEatery.businessName
    console.log(newItineraryObject)

    //enable save button if all dropdowns have been selected
    if (newItineraryObject.parkName !== "" && newItineraryObject.eateryName !== "" && newItineraryObject.bizarrieName !== "") {
        enableBtn()
    }
})


eventHub.addEventListener("bizarreSelected", customEvent => {
    console.log(newItineraryObject)
    
    //access payload of custom event
    let bizarreId = customEvent.detail.bizarreId

    //assign useAttractions() to a variable so it can be searched with .find()
    let bizarreArray = useAttractions()
    
    //use .find method to return the bizarre you're looking for and assign it to a variable
    let selectedBizarre = bizarreArray.find(bizarreObj => {
        return bizarreObj.id === parseInt(bizarreId) 
    })
    //assign the captured data to newItineraryObject values
    
    newItineraryObject.bizarrieId = bizarreId
    newItineraryObject.bizarrieName = selectedBizarre.name
    console.log(newItineraryObject)

    //enable save button if all dropdowns have been selected
    if (newItineraryObject.parkName !== "" && newItineraryObject.eateryName !== "" && newItineraryObject.bizarrieName !== "") {
        enableBtn()
    }
})


// // Handle browser-generated click event in component
eventHub.addEventListener("click", clickEvent => {
    
    if (clickEvent.target.id === "addToItinerary")
    {
        if (newItineraryObject.parkName !== "" && newItineraryObject.eateryName !== "" && newItineraryObject.bizarrieName !== "") {
              
            console.log(newItineraryObject.parkName)
            // assign captured variables to new object
            const newItinerary = {
                "parkId": newItineraryObject.parkId ,
                "parkName": newItineraryObject.parkName,
                "eateryId": newItineraryObject.eateryId,
                "eateryName": newItineraryObject.eateryName,
                "bizarraryId": newItineraryObject.bizarrieId,            
                "bizarraryName": newItineraryObject.bizarrieName            
            }

            // Change API state and application state
            saveItinerary(newItinerary)
        }
    }
})

//function to disable save itinerary button by default. Imports to main.js
export const disableBtn = () => {
    document.getElementById("addToItinerary").disabled = true;
}
  
//function to enable save itinerary button once all three dropdowns are selected
const enableBtn = () => {
    document.getElementById("addToItinerary").disabled = false;
}