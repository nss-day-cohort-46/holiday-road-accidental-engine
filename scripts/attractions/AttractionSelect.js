
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

const render = (attractionsCollection) => {
    contentTarget.innerHTML = ``
}
