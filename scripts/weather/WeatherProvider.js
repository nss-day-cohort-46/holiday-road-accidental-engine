let weather = {};


export const useWeather = () => {
    
};


//get weather from API
export const getWeather = () => {
    return fetch("http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=")
        .then(response => response.json())
        .then(parsedWeather => weather = parsedWeather)
        .then()
}

