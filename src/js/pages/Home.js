import Page from './Page'

export default class extends Page {
  constructor () {
    super()
    console.log('Page: Home')
  }

  index () {
    console.log('Action: Index')
  }
}
