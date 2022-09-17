import { appState } from "../AppState.js";
import { weathersService } from "../Services/WeathersService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML, setText } from "../Utils/Writer.js";


function drawWeather() {
  let weather = appState.weather
  setText('feelsLike', Math.floor((weather.feels_like - 273.15) * 9 / 5 + 32))
  setText('description', weather.description)
  setHTML('icon', appState.weather.WeatherTemplate)

}

// function drawIcon() {
// }

// (279K − 273.15) × 9 / 5 + 32 = 42.53°F

export class WeathersController {
  constructor() {
    this.getWeather()
    appState.on('weather', drawWeather)
  }


  async getWeather() {
    try {
      await weathersService.getWeather()
    } catch (error) {
      console.error('[getWeather]', error);
      Pop.error(error)

    }
  }
}