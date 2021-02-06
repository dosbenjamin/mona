import Page from './Page'

export default class extends Page {
  constructor () {
    super()
    console.log('Controller: Bill')
  }

  create () {
    console.log('Action: Create')
  }

  list () {
    console.log('Action: List')
  }
}
