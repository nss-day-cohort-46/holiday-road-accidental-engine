import { AttractionSelect } from "./attractions/AttractionSelect.js";
import { ParkSelect } from "./parks/parkSelect.js";
import { EaterySelect } from "./eateries/EaterySelect.js";
import { renderSaveButton } from "./itineraries/ItinerarySave.js"
// import { ParkButtonList } from "./parks/ParkButtonList.js"
import "./parks/ParkDetails.js";
import "./eateries/EateryDetails.js";
import "./attractions/AttractionDetails.js";

ParkSelect()
AttractionSelect()
EaterySelect()
renderSaveButton()
// ParkButtonList()


// this is for testing the parks details component
// import { testFunction } from "./attractions/AttractionDetails.js"

// testFunction()