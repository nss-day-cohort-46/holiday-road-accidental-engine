import { useEateries } from "../scripts/eateries/EateryProvider.js"
import "../scripts/eateries/EaterySelect.js"

const eventHub = document.querySelector(".mainContainer")
const contentTarget = document.querySelector(".previews")

eventHub.addEventListener("eateryChosen", event => {
    if (event.detail.eateryThatWasChosen !== "0") {
        const eateriesArray = useEateries()
        const eaterySelectedEvent = eateriesArray.find(eateriesObj => {
            return eateriesObj.id === event.detail.eateryThatWasChosen
        })
        renderEateryPreview(eaterySelectedEvent)
    }

})

const renderEateryPreview = (selectedEatery) => {
    contentTarget.innerHTML += `
    <div>Selected Eatery: ${selectedEatery.businessName}</div>
    <button id="eateryDetail--${selectedEatery.id}">Eatery Details</button>
    `
}

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("eateryDetail")) {
        const [prefix, eaterySelectedId] = clickEvent.target.id.split("--")
        const eaterySelectedCustomEvent = new CustomEvent("eateryDetailsClicked", {
            detail: {
                eateryId: eaterySelectedId
            }
        })
        eventHub.dispatchEvent(eaterySelectedCustomEvent)
    }
})