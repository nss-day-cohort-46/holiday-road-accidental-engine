import { useAttractions } from "../scripts/attractions/AttractionProvider.js"
import "../scripts/attractions/AttractionSelect.js"

const eventHub = document.querySelector(".mainContainer")
const contentTarget = document.querySelector(".previews")

eventHub.addEventListener("bizarreSelected", event => {
    if (event.detail.bizarreId !== "0") {
        const attractionsArray = useAttractions()
        const  attractionSelectedEvent = attractionsArray.find(attractionsObj => {
            return attractionsObj.id === event.detail.bizarreId
        })
        renderAttractionPreview(attractionSelectedEvent)
    }
})

const renderAttractionPreview = (selectedAttraction) => {
    contentTarget.innerHTML += `
    <div>Selected Attraction: ${selectedAttraction.name}</div>
    <button id="${selectedAttraction.id}">Attraction Details</button>
    `
}

eventHub.addEventListener("click", clickEvent => {
    let attractionsSelectedId = clickEvent.target.value
    const attractionSelectedCustomEvent = new CustomEvent("attractionDetailsClicked", {
        detail: {
            clickedAttraction: attractionsSelectedId
        }
    })
    eventHub.dispatchEvent(attractionSelectedCustomEvent)
})