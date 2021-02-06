import clickHandler from '../utilities/eventHandler'

export default class {
  constructor () {
    console.log('Global: Page')

    document.addEventListener('click', clickHandler)
  }
}
