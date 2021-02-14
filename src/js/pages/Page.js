import { changeHandler, clickHandler, inputHandler } from '../utilities/eventHandler'
import { gapi } from 'gapi-script'

export default class {
  constructor () {
    console.log('Global: Page')
    document.addEventListener('click', clickHandler)
    document.addEventListener('input', inputHandler)
    document.addEventListener('change', changeHandler)
  }
}
