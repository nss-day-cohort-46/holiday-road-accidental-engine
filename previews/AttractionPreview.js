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
    <button id="attractionDetail--${selectedAttraction.id}">Attraction Details</button>
    `
}

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("attractionDetail")) {
    const [prefix, attractionsSelectedId] = clickEvent.target.id.split("--")
    const attractionSelectedCustomEvent = new CustomEvent("attractionDetailsClicked", {
        detail: {
            attractionId: attractionsSelectedId
        }
    })
    eventHub.dispatchEvent(attractionSelectedCustomEvent)
}
})