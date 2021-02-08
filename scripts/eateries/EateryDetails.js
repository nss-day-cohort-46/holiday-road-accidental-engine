import { useEateries } from "./EateryProvider.js"

const contentContainer = document.querySelector(".previews")

export const render = (eateriesObject) => {

    const eateriesHTML = `
    <h2>Eatery Details for ${eateriesObject.businessName}</h2>

    <section class="eatery__containter">
    <div class="eatery__name">Name: ${eateriesObject.businessName}</div>
    <div class="eatery__description">Details ${eateriesObject.description}</div>
    </section>`
    
    contentContainer.innerHTML = eateriesHTML
}

const eventHub = document.querySelector(".mainContainer")
eventHub.addEventListener("eateryDetailsClicked", clickEvent => {
    // console.log("event", clickEvent)
    const eateryId = clickEvent.detail.eateryId
    const eateryArray = useEateries()
    
    const selectedEatery = eateryArray.find((eateriesObject) => eateriesObject.id === parseInt(eateryId))
    // console.log('selectedEatery: ', selectedEatery)
    render(selectedEatery)
    
    // testing code
    // const eateryId = "1"
    // getEateries()
    // .then(responseArray => {
    //     const eateryArray = useEateries()
    //     const selectedEatery = eateryArray.find((eateriesObject) => eateriesObject.id === parseInt(eateryId))
    //     render(selectedEatery)
    //     console.log(selectedEatery)



    // })
}
)