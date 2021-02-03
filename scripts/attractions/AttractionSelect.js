
import { useAttractions, getAttractions } from "./AttractionProvider.js"

const eventHub = document.querySelector(".mainContainer")
const contentTarget = document.querySelector(".bizarrariesButton")

export const AttractionSelect = () => {
    getAttractions()
    .then( () => {
      const attractions = useAttractions()
      render(attractions)
    })
}

const render = attractionsCollection => {
    contentTarget.innerHTML = `
    <option value="0">Please choose a bizarre...</option>
    ${attractionsCollection.map(bizarres => `<option value="${bizarres.id}">${bizarres.name}</option>`).join("")}`
}

eventHub.addEventListener("change", changeEvent => {
    if (changeEvent.target.id === "bizarrariesButton") {
        const selectBizarre = changeEvent.target.value
        const bizarreSelectedEvent = new CustomEvent("bizarreSelected", {
            detail: {
                selectBizarre: selectBizarre
            }
        })
        eventHub.dispatchEvent(bizarreSelectedEvent)
    }
})