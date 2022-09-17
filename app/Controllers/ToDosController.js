import { appState } from "../AppState.js"
import { sandboxServer } from "../Services/Axios.js"
import { todosService } from "../Services/ToDosService.js"
import { getFormData } from "../Utils/FormHandler.js"
import { Pop } from "../Utils/Pop.js"
import { setHTML } from "../Utils/Writer.js"


function drawTodos() {
  let template = ''
  appState.toDo.forEach(t => template += t.TodoTemplate)
  setHTML('todo', template)
}
export class ToDosController {
  constructor() {
    this.getToDos()
    appState.on('toDo', drawTodos)
  }


  async getToDos() {
    try {
      await todosService.getToDos()
    } catch (error) {
      console.error('[getTodos]', error);
      Pop.error(error)
    }
  }

  async addToDo() {
    try {
      window.event.preventDefault()
      const form = window.event.target
      let formData = getFormData(form)
      await todosService.addToDo(formData)
      // @ts-ignore
      form.reset()
    } catch (error) {
      console.error('[addToDo]', error);
      Pop.error(error)
    }
  }
}
