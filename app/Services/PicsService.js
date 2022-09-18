import { appState } from "../AppState.js";
import { Pic } from "../Models/Pic.js";
import { sandboxServer } from "./Axios.js"


class PicsService {
  async getSandboxPic() {
    const res = await sandboxServer.get('/api/images', {
      params: {
        category: 'night, japan'
      }
    })

    appState.Pic = new Pic(res.data)

  }

}




export const picsService = new PicsService()