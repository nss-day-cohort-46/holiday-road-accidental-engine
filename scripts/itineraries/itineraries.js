export const ItineraryHTMLConverter = (itineraryObject) => {
    
    return `
        
        <section class="itinerary">
            <div class="itinerary__text">${ itineraryObject.text }</div>
            <div class="itinerary__suspect">Suspect: ${ itineraryObject.suspect }</div>
            <div class="itinerary__author">Author: ${ itineraryObject.author }</div>
            <div class="itinerary__timestamp">Date: ${ itineraryObject.date }</div>
        </section>
    `
}