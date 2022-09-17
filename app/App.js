import { PicsController } from "./Controllers/PicsController.js";
import { QuotesController } from "./Controllers/QuotesController.js";
import { ToDosController } from "./Controllers/TodosController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {

  picsController = new PicsController()
  quotesController = new QuotesController()

  toDosController = new ToDosController()
}

window["app"] = new App();
