import * as clickEvents from '../events/click'
import * as submitEvents from '../events/submit'

const splitEvents = (events, type) => events
  && events.split(' ').forEach(event => type[event]())

export const clickHandler = () => splitEvents(event.target.dataset.click, clickEvents)
export const submitHandler = () => splitEvents(event.target.dataset.submit, submitEvents)
