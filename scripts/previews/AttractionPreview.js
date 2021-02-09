import { useAttractions } from "../attractions/AttractionProvider.js"
import "../attractions/AttractionSelect.js"

const eventHub = document.querySelector(".mainContainer")
const contentTarget = document.querySelector(".attractionPreview")

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
    contentTarget.innerHTML = `
    <div class="selectedAttraction">Selected Attraction: ${selectedAttraction.name}</div>
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