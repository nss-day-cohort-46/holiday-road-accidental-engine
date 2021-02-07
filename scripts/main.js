import { AttractionSelect } from "./attractions/AttractionSelect.js";
import { ParkSelect } from "./parks/parkSelect.js";
import { EaterySelect } from "./eateries/EaterySelect.js";
import "../previews/ParkPreview.js"
import "../previews/AttractionPreview.js"
import "../previews/EateryPreview.js"
import "./itineraries/ItinerarySave.js"
import { renderSaveButton } from "./itineraries/ItinerarySave.js";
// import { itineraryList } from "./itineraries/ItinerariesList.js";

ParkSelect()
AttractionSelect()
EaterySelect()
renderSaveButton()
// itineraryList()