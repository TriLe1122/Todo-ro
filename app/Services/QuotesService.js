import { appState } from "../AppState.js";
import { Quote } from "../Models/Quote.js";
import { sandboxServer } from "./Axios.js"


class QuotesService {
  async getQuote() {
    const res = await sandboxServer.get('/api/quotes', {
      params: {
        author: 'Thich Nhat Hanh'
      }
    })

    appState.quote = new Quote(res.data)

  }

}


export const quotesService = new QuotesService()