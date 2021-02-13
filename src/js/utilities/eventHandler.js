import * as clickEvents from '../events/click'
import * as inputEvents from '../events/input'

const splitEvents = (events, type) => events
  && events.split(' ').forEach(event => type[event]())

export const clickHandler = () => splitEvents(event.target.dataset.click, clickEvents)
export const inputHandler = () => splitEvents(event.target.dataset.input, inputEvents)
