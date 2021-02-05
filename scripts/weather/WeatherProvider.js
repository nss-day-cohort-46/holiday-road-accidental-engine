let weather = {};


export const useWeather = () => {
    ...weather
};


//get weather from API
export const getWeather = () => {
    return fetch("http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=3f8451e0b46939dd52d03da8c2011d89")
        .then(response => response.json())
        .then(parsedWeather => weather = parsedWeather)
        .then()
}

