export const ItineraryHTMLConverter = (itineraryObject) => {
    
    return `
        
        <section class="itinerary">
            
            <div class="itineraryPark">Park: ${itineraryObject.parkName}</div>
            <div class="itineraryEatery">Eatery: ${itineraryObject.eateryName}</div>
            <div class="itineraryBizarraries">Bizarrary: ${itineraryObject.bizarrieName}</div>
        </section>
    `
}