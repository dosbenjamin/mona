import { gapi } from 'gapi-script'
import { on } from '../utilities/dom'
import * as eventsType from '../events'
import bindEvents from '../utilities/eventHandler'

export default class {
  constructor () {
    Object.keys(eventsType).forEach(type => on(type, event => bindEvents(event, type)))
  }
}
