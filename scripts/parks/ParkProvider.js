//Declare an empty array for parks to live
let parks = [];

// returns parks as objects
export const useParks = () => parks.data.slice();


//function to get parks from API
export const getParks = () => {
    //returns fetch call from website
    return fetch("https://developer.nps.gov/api/v1/parks?&api_key=iS64Pl03HwTtlj5MKPdCon0gBhpKACS3fsxtq0kv")
        //when fetch is returned it is parsed to json
        .then(response => response.json())
        //the json content is then assigned to a variable 
        .then(parksArray => parks = parksArray)
}
