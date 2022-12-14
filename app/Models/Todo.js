import { appState } from "../AppState.js"
import { setHTML, setText } from "../Utils/Writer.js"



export class Todo {
  constructor(data) {
    this.id = data.id
    this.description = data.description
    this.user = data.user
    this.completed = data.completed || false
  }



  get TodoTemplate() {
    return /*html*/` 
    <div class="d-flex justify-content-between mb-1 pt-2 ">
              <input onchange="app.toDosController.toggleToDo('${this.id}')" class = "selectable" type="checkbox" name="completed" id="" ${this.completed
        ? 'checked' : ''}>
              <p class="px-2 text-center text-break">${this.description}
              </p>
              <div class="d-flex ">
                <i onclick="app.toDosController.removeToDo('${this.id}')"
                  class="mdi mdi-delete-forever-outline fs-5 selectable"></i>
              </div>
            </div>
    `
  }



}