import { appState } from "../AppState.js"
import { sandboxServer } from "../Services/Axios.js"
import { todosService } from "../Services/ToDosService.js"
import { getFormData } from "../Utils/FormHandler.js"
import { Pop } from "../Utils/Pop.js"
import { setHTML, setText } from "../Utils/Writer.js"


function drawTodos() {
  let template = ''
  appState.toDo.forEach(t => template += t.TodoTemplate)
  setHTML('todo', template)
  // setHTML('toDoTotal', this.completed.length)
  let checked = appState.toDo.filter(t => t.completed == false)
  setText('toDoTotal', checked.length)
}


export class ToDosController {
  constructor() {
    this.getToDos()
    appState.on('toDo', drawTodos)
    // appState.on('toDo', drawTotal)
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

  async removeToDo(id) {
    try {
      const yes = await Pop.confirm('remove ToDo-Ro?')
      if (!yes) { return }
      await todosService.removeToDo(id)
    } catch (error) {
      console.error('[deleteToDo]', error);
    }
  }

  async toggleToDo(id) {
    try {
      await todosService.toggleToDo(id)
    } catch (error) {
      console.error("[toggleCompleted]", error);
      Pop.error(error)
    }
  }


}
