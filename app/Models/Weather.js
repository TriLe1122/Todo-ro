



export class Weather {
  constructor(data) {
    this.feels_like = data.main.feels_like
    this.description = data.weather[0].description
    this.icon = data.weather[0].icon
  }

  get WeatherTemplate() {
    return /*html*/`

    <img src="https://openweathermap.org/img/wn/${this.icon}.png" alt="" id="icon">

    `
  }
}