import { changeHandler, clickHandler, inputHandler } from '../utilities/eventHandler'

export default class {
  constructor () {
    console.log('Global: Page')
    document.addEventListener('click', clickHandler)
    document.addEventListener('input', inputHandler)
    document.addEventListener('change', changeHandler)
  }
}
