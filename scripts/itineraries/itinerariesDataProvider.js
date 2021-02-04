//declare an eventHub
const eventHub = document.querySelector(".mainContainer")

//add new object when saved
const dispatchStateChangeEvent = () => {
    const itineraryStateChangedEvent = new CustomEvent("itineraryStateChanged")
    eventHub.dispatchEvent(itineraryStateChangedEvent)
}

//fetch data from API
let itinerary = []
export const getItineraries = () => {
    return fetch('http://localhost:8088/db')
        .then(response => response.json())
        .then(parsedItinerary => {
            note = parsedItinerary
        })

}

export const saveItinerary = itinerary => {
    return fetch('http://localhost:8088/db', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(itinerary)
    })
    .then(getItineraries)
    .then(dispatchStateChangeEvent)
}


export const useItineraries = () => itinerary.slice();