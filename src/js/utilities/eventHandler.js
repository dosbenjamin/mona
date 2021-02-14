import * as clickEvents from '../events/click'
import * as inputEvents from '../events/input'
import * as changeEvents from '../events/change'

const splitEvents = (events, type) => events
  && events.split(' ').forEach(event => type[event]())

export const clickHandler = () => splitEvents(event.target.dataset.click, clickEvents)
export const inputHandler = () => splitEvents(event.target.dataset.input, inputEvents)
export const changeHandler = () => splitEvents(event.target.dataset.change, changeEvents)
