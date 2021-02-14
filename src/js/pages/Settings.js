import Page from './Page'
import { $, $$ } from '../utilities/dom'
import 'regenerator-runtime/runtime'
import { googleAuthentification, getGoogleStatus } from '../components/googleAuthentification'

const toggle = ($toAdd, $toRemove) => {
  $toAdd.classList.add('is-invisible')
  $toRemove.classList.remove('is-invisible')
}

const initGoogle = async () => {
  const $authorize = $('.js-google-authorize')
  const $signout = $('.js-google-signout')
  await googleAuthentification()
  const isSignedIn = getGoogleStatus()
  isSignedIn ? toggle($authorize, $signout) : toggle($signout, $authorize)
}

export default class extends Page {
  constructor () { super() }

  index () {
    const storage = JSON.parse(localStorage.getItem('settings'))
    self.$inputs = $$('.js-form-input')
    storage && self.$inputs.forEach($input => { $input.value = storage[$input.name] })

    gapi.load('client:auth2', initGoogle)
  }
}
