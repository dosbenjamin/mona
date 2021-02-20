import * as Page from './pages'

const { controller, action } = document.body.dataset

export default class {
  constructor () {
    this.currentPage = new Page[controller]()
    this.currentPage[action]()
  }
}
