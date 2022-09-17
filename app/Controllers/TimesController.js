import { setHTML } from "../Utils/Writer.js";

function time() {
  let today = new Date();
  // let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
  let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  // let dateTime = date + ' ' + time;

  setHTML('time', time)
}

export class TimesController {

  constructor() {
    setInterval(time, 1000)
  }



}