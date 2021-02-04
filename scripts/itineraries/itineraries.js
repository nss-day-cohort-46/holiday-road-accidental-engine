export const ItineraryHTMLConverter = (itineraryObject) => {
    
    return `
        
        <section class="itinerary">
            
            <div class="itineraryPark">Park: ${itineraryObject.park}</div>
            <div class="itineraryEatery">Eatery: ${itineraryObject.eatery}</div>
            <div class="itineraryBizarraries">Bizarrary: ${itineraryObject.bizarrary}</div>
        </section>
    `
}