


export class Weather {
  constructor(data) {
    this.feels_like = data.main.feels_like
    this.description = data.weather[0].description
    this.icon = data.weather[0].icon
    this.name = data.name
    this.weather = data.weather
    this.celcius = data.celcius || false
  }

  get WeatherTemplate() {
    return /*html*/`

    <img src="https://openweathermap.org/img/wn/${this.icon}.png" alt="" id="icon">

    `
  }

  get ConverterTemplate() {
    return /*html*/`

    <p>  ${this.celcius ? `${this.Farh}` + '°f' : `${this.Cels}` + '°c'}</p>
    `
  }



  get Cels() {
    let cels = this.feels_like - 273.15

    return cels.toFixed(1)
  }
  // (32°F − 32) × 5/9 = 0°C


  get Farh() {
    let farh = (this.feels_like - 273.15) * 9 / 5 + 32
    return farh.toFixed(1)
  }

}
// setText('feelsLike', Math.floor((weather.feels_like - 273.15) * 9 / 5 + 32))