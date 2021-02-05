import { useAttractions } from "./AttractionProvider.js"

const contentContainer = document.querySelector(".previews")

export const render = (bizarraries) => {

    const bizarrariesHTML = `
    <h2>Bizarre Details for ${bizarraries.name}</h2>

    <section class="bizarre__containter">
    <div class="bizarre__name">Name: ${bizarraries.name}</div>
    <div class="bizarre__description">Details ${bizarraries.description}</div>
    </section>`
    
    contentContainer.innerHTML = bizarrariesHTML
}

const eventHub = document.querySelector(".mainContainer")
eventHub.addEventListener("bizarreDetailsClicked", event => {
    // console.log("event", event)
    const bizarreId = clickEvent.detail.bizarreId
    const bizarreArray = useAttractions()
    
    const selectedBizarre = bizarreArray.find((bizarraries) => bizarraries.id === parseInt(bizarreId))
    // // console.log('selectedBizarre: ', selectedBizarre)
    render(selectedBizarre)
    
    // testing code
    // const bizarreId = "5"
    // getAttractions()
    // .then(responseArray => {
    //     const bizarreArray = useAttractions()
    //     const selectedBizarre = bizarreArray.find((bizarraries) => bizarraries.id === parseInt(bizarreId))
    //     render(selectedBizarre)
    //     console.log(selectedBizarre)



    // })
}
)