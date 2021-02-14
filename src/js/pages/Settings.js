import Page from './Page'
import { $$ } from '../utilities/dom'

export default class extends Page {
  constructor () { super() }

  index () {
    self.$inputs = $$('.js-form-input')
    const storage = JSON.parse(localStorage.getItem('settings'))
    storage && self.$inputs.forEach($input => { $input.value = storage[$input.name] })
  }
}
