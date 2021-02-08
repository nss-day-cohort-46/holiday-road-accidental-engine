import { useEateries, getEateries} from "./EateryProvider.js"

const eventHub = document.querySelector(".mainContainer")
// Get a reference to the DOM element where the <select> will be rendered
const contentTarget = document.getElementById("eateryButton")

export const EaterySelect = () => {
    // Trigger fetching the API data and loading it into application state
    getEateries()
        .then( () => {
        // Get all eateries from application state
        const eateries = useEateries()
        render(eateries)
    })
}

// On the event hub, listen for a "change" event.
eventHub.addEventListener("change", changeEvent => {
    // Only do this if the `EaterySelect` element was changed
    if (changeEvent.target.id === "eateryButton") {
        const eateryThatWasChosen = changeEvent.target.value
        // Create custom event. Provide an appropriate name.
        const eateryCustomEvent = new CustomEvent("eateryChosen", {
            detail: {
                eateryThatWasChosen: parseInt(eateryThatWasChosen)
            }
        })

        // Dispatch to event hub
        eventHub.dispatchEvent(eateryCustomEvent)
    }
})

const render = eateriesCollection => {

    contentTarget.innerHTML = `
        <select class="dropdown" id="eateryButton">
            <option value="0">Please select a eatery...</option>
            ${eateriesCollection.map(eateryObject => 
                `<option value="${eateryObject.id}">${eateryObject.businessName}</option>`).join("")

            }
        </select>
    `
}
