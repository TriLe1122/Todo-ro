import { appState } from "../AppState.js";
import { weathersService } from "../Services/WeathersService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML, setText } from "../Utils/Writer.js";


function drawWeather() {
  let weather = appState.weather
  setHTML('feelsLike', weather.ConverterTemplate)
  setText('description', weather.description)
  setHTML('icon', appState.weather.WeatherTemplate)
  setText('location', weather.name)
}



export class WeathersController {
  constructor() {
    this.getWeather()
    // setInterval(this.getWeather, 60000)
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

  async toggleWeather() {
    try {
      await weathersService.toggleCelsius()
    } catch (error) {
      console.error('[toggleweather]', error);
    }
  }





  // toggleWeather() {
  //   let weather = appState.weather
  //   setText('feelsLike', Math.floor((weather.feels_like - 273.15)))
  //   setHTML('f-c', 'c')
  // }
}


