import { AttractionSelect } from "./attractions/AttractionSelect.js";
import { ParkSelect } from "./parks/parkSelect.js";
import { EaterySelect } from "./eateries/EaterySelect.js";
// import { ParkButtonList } from "./parks/ParkButtonList.js"
import "./parks/ParkDetails.js";
import "./eateries/EateryDetails.js";
import "./attractions/AttractionDetails.js";
import { WeatherList } from "./weather/WeatherList.js";
import "../previews/ParkPreview.js"
import "../previews/AttractionPreview.js"
import "../previews/EateryPreview.js"
import "./itineraries/ItinerarySave.js"
import { disableBtn, renderSaveButton } from "./itineraries/ItinerarySave.js";
import { itineraryList } from "./itineraries/ItinerariesList.js";


ParkSelect()
AttractionSelect()
EaterySelect()
WeatherList()
renderSaveButton()
// ParkButtonList()


// this is for testing the parks details component
// import { testFunction } from "./attractions/AttractionDetails.js"

// testFunction()
itineraryList()
disableBtn()
