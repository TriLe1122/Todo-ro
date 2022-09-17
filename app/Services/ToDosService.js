import { appState } from "../AppState.js"
import { Todo } from "../Models/Todo.js"
import { sandboxServer } from "./Axios.js"


class ToDosService {
  // getToDoCompleted() {
  //   throw new Error("Method not implemented.")
  // }
  async toggleToDo(id) {
    const toDo = appState.toDo.find(t => t.id == id)
    if (!toDo) {
      throw new Error('bad id')
    }

    toDo.completed = !toDo.completed
    await sandboxServer.put(`/api/${appState.user}/todos/${id}`, toDo)
    appState.emit('toDo')
  }
  async removeToDo(id) {
    await sandboxServer.delete(`/api/${appState.user}/todos/${id}`)
    appState.toDo = appState.toDo.filter(t => t.id != id)
  }
  async addToDo(formData) {
    const res = await sandboxServer.post(`/api/${appState.user}/todos`, formData)
    console.log(res.data);
    // appState.toDo = new Todo(res.data)
    appState.toDo = [new Todo(res.data), ...appState.toDo]
  }
  async getToDos() {
    const res = await sandboxServer.get(`/api/${appState.user}/todos`)
    appState.toDo = res.data.map(t => new Todo(t))
  }

}

export const todosService = new ToDosService()