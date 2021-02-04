let weather = [];


export const useWeather = () => weather.slice();


//get weather from API
export const getWeather = () => {
    return fetch("api.openweathermap.org/data/2.5/forecast?q=Nashville,TN&appid=6fa8865ca2fdcb9f09e8011d5d4a517c")
        .then(response => response.json())
        .then(weatherArray => weather = weatherArray)
}