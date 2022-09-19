import { Value } from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { loadState } from "./Utils/Store.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = loadState('values', Value)

  /** @type {import('./Models/Pic').Pic} */
  Pic = null


  /** @type {import('./Models/Quote').Quote} */
  quote = null

  // user = prompt('whats your name?')
  user = "tri"

  /** @type {import('./Models/ToDo').Todo[]} */
  toDo = []

  /** @type {import('./Models/Weather').Weather} */
  weather = null
}

export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
