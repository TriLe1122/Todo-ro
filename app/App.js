import { PicsController } from "./Controllers/PicsController.js";
import { QuotesController } from "./Controllers/QuotesController.js";
import { TimesController } from "./Controllers/TimesController.js";
import { ToDosController } from "./Controllers/TodosController.js";
import { ValuesController } from "./Controllers/ValuesController.js";
import { WeathersController } from "./Controllers/WeathersController.js";

class App {

  picsController = new PicsController()
  quotesController = new QuotesController()

  toDosController = new ToDosController()

  timesController = new TimesController()

  weathersController = new WeathersController()
}

window["app"] = new App();
