export const itineraryHTMLConverter = (itineraryObject) => {
    
    return `
        
        <section class="itinerary">
            
            <div class="itineraryPark"><b>Park:</b> ${itineraryObject.parkName}</div>
            <div class="itineraryEatery"><b>Eatery:</b> ${itineraryObject.eateryName}</div>
            <div class="itineraryBizarraries"><b>Bizarrary:</b> ${itineraryObject.bizarraryName}</div>
        </section>
    `
}