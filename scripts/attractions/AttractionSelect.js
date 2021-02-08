import { useAttractions, getAttractions } from "./AttractionProvider.js"

const eventHub = document.querySelector(".mainContainer")
const contentTarget = document.getElementById("bizarrariesButton")

eventHub.addEventListener("change", changeEvent => {
    if (changeEvent.target.id === "bizarrariesDropdown") {
        const selectBizarre = changeEvent.target.value
        const bizarreSelectedEvent = new CustomEvent("bizarreSelected", {
            detail: {
                bizarreId: parseInt(selectBizarre)
            }
        })
        eventHub.dispatchEvent(bizarreSelectedEvent)
    }
})

export const AttractionSelect = () => {
    getAttractions()
    .then( () => {
      const attractions = useAttractions()
      render(attractions)
    })
}

const render = attractionsCollection => {
    contentTarget.innerHTML = `
    <select id="bizarrariesDropdown">
    <option value="0">Please choose a bizarre...</option>
    ${attractionsCollection.map(bizarres => `<option value="${bizarres.id}">${bizarres.name}</option>`).join("")}</select>`
}