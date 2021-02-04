import { useWeather, getWeather} from "./WeatherProvider.js"




export const WeatherList = () => {
    getWeather()
        .then(() => {
            const weather = useWeather()
            console.log(weather)
            render(weather)
        })
}

