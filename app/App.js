import { PicsController } from "./Controllers/PicsController.js";
import { QuotesController } from "./Controllers/QuotesController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {

  picsController = new PicsController()
  quotesController = new QuotesController()
}

window["app"] = new App();
