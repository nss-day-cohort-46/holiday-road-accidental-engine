
import { getItineraries, useItineraries } from "./ItinerariesDataProvider.js";
import { itineraryHTMLConverter } from "./Itineraries.js";

// Define Event Hub
const eventHub = document.querySelector(".mainContainer")

// Query the DOM for the element that itinerariess will be added to 
const contentTarget = document.querySelector(".savedItinerary")


const render = (itineraryArray) => {
    const itinerariesConvertedToStrings = itineraryArray.map(itineraryObject => {
        return itineraryHTMLConverter(itineraryObject)
    }
        // convert the itinerary objects to HTML with ItineraryHTMLConverter

    ).join("")

    contentTarget.innerHTML = `
        <h3>Saved Trips</h3>
        <section class="itineraryList">
        ${itinerariesConvertedToStrings}
        </section>`
}

//use created render() to render the html on the DOM
export const itineraryList = () => {
    getItineraries()
        .then(() => {
            const allItineraries = useItineraries()
            render(allItineraries)
        })
}

eventHub.addEventListener("dispatchStateChangeEvent", event => {
    if (contentTarget.innerHTML !== "") {
        itineraryList()
    }
})

// eventHub.addEventListener("clearItinerariesClicked", customEvent => {
//     ContentTarget.innerHTML = ""
// })