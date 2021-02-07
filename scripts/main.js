import { AttractionSelect } from "./attractions/AttractionSelect.js";
import { ParkSelect } from "./parks/parkSelect.js";
import { EaterySelect } from "./eateries/EaterySelect.js";
import "./itineraries/ItinerarySave.js"
import { disableBtn, renderSaveButton } from "./itineraries/ItinerarySave.js";
import { itineraryList } from "./itineraries/ItinerariesList.js";

ParkSelect()
AttractionSelect()
EaterySelect()
renderSaveButton()
itineraryList()
disableBtn()