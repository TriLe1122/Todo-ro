import { appState } from "../AppState.js"
import { Todo } from "../Models/Todo.js"
import { sandboxServer } from "./Axios.js"


class ToDosService {
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