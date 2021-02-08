import { useParks } from "./ParkProvider.js"

const contentContainer = document.querySelector(".previews")

export const render = (park) => {

    const parksHTML = `
    <h2>Park Details for ${park.fullName}</h2>

    <section class="park__containter">
    <div class="park__name">Name: ${park.fullName}</div>
    <div class="park__description">Details ${park.description}</div>
    </section>`
    
    contentContainer.innerHTML = parksHTML
}

const eventHub = document.querySelector(".mainContainer")
eventHub.addEventListener("parkDetailsClicked", clickEvent => {
    // console.log("event", clickEvent)
    const parkId = clickEvent.detail.parkId
    const parksArray = useParks()
    
    debugger
    const selectedPark = parksArray.find((park) => park.id === parkId)
    // console.log('selectedPark: ', selectedPark)
    render(selectedPark)
    
    // testing code
    // const parkId = "77E0D7F0-1942-494A-ACE2-9004D2BDC59E"
    // getParks()
    // .then(responseArray => {
    //     const parksArray = useParks()
    //     const selectedPark = parksArray.find((park) => park.id === parkId)
    //     render(selectedPark)



    // })
}
)