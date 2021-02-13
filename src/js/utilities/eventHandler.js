import * as clickEvents from '../events/click'

const splitEvents = (events, type) => events
  && events.split(' ').forEach(event => type[event]())

export const clickHandler = () => splitEvents(event.target.dataset.click, clickEvents)
