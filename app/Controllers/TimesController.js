import { setHTML, setText } from "../Utils/Writer.js";

// function time() {
//   // let today = new Date();
//   // // let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
//   // let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
//   // // let dateTime = date + ' ' + time;

//   // setHTML('time', time)
// }

let toggleTime = true

function _time() {


  if (toggleTime == false) {
    let today = new Date();
    // let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    let time = today.getHours() + ":" + today.getMinutes().toString().padStart(2, '0') + ":" + today.getSeconds().toString().padStart(2, '0');
    // let dateTime = date + ' ' + time;

    setText('time', time)
  } else {
    let date = new Date()
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12;
    // @ts-ignore
    minutes = minutes.toString().padStart(2, '0');
    // @ts-ignore
    seconds = seconds.toString().padStart(2, '0');
    let strTime = hours + ':' + minutes + ':' + seconds + ampm;
    setText('time', strTime)
  }

  let isoDate = new Date().toISOString()
  let date = isoDate.substring(0, 10)
  setHTML('date', date)

}



// function timeConverter() {
//   const formatAMPM = (date) => {
//     // let hours = date.getHours();
//     // let minutes = date.getMinutes();
//     // let ampm = hours >= 12 ? 'pm' : 'am';
//     // hours = hours % 12;
//     // hours = hours ? hours : 12;
//     // minutes = minutes.toString().padStart(2, '0');
//     // let strTime = hours + ':' + minutes + ' ' + ampm;
//     // return strTime;
//   }
//   console.log(formatAMPM);
// }

export class TimesController {

  constructor() {
    setInterval(_time, 1000)
    // timeConverter()
  }

  toggleTime() {
    toggleTime = !toggleTime
    _time()

  }



}