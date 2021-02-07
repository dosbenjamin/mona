import * as clickEvents from '../events/click'

const splitEvents = events => events
  && events.split(' ').forEach(event => clickEvents[event]())

export const clickHandler = () => splitEvents(event.target.dataset.click)
export const hoverHandler = () => splitEvents(event.target.dataset.hover)
