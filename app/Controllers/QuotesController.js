import { appState } from "../AppState.js";
import { sandboxServer } from "../Services/Axios.js";
import { quotesService } from "../Services/QuotesService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML, setText } from "../Utils/Writer.js";

function drawQuote() {
  let quote = appState.quote
  setHTML('quote', quote.content)
  setText('author', quote.author)
}




export class QuotesController {
  constructor() {
    this.getQuote()
    appState.on('quote', drawQuote)
  }


  async getQuote() {
    try {
      await quotesService.getQuote()
    } catch (error) {
      console.error('[getQuote]', error);
      Pop.error(error)
    }
  }
}