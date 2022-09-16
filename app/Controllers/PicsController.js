import { appState } from "../AppState.js";
import { sandboxServer } from "../Services/Axios.js"
import { picsService } from "../Services/PicsService.js";
import { Pop } from "../Utils/Pop.js";

function drawPicture() {
  let Pic = appState.Pic
  document.querySelector('body').style.backgroundImage = `url(${Pic.largeImgUrl})`
}

// document.getElementById('pic') 
// document.querySelector('.pic')
// document.g

export class PicsController {
  constructor() {
    this.getSandboxPic()
    appState.on('Pic', drawPicture)
  }



  async getSandboxPic() {
    try {
      await picsService.getSandboxPic()
    } catch (error) {
      console.error('[sandboxpic]', error);
      Pop.error(error)

    }
  }


}