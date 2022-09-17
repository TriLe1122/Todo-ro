import { appState } from "../AppState.js";
import { Weather } from "../Models/Weather.js";
import { sandboxServer } from "./Axios.js"

class WeathersService {
  toggleCelsius() {
    let weather = appState.weather
    weather.celcius = !weather.celcius
    appState.emit('weather')
  }

  async getWeather() {
    const res = await sandboxServer.get('/api/weather')
    console.log(res.data);
    appState.weather = new Weather(res.data)
  }

}


export const weathersService = new WeathersService()