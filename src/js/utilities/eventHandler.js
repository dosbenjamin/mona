import * as events from '../events'

const splitEvents = (events, type) => events
  && events.split(' ').forEach(event => type[event]())

export default (event, type) => splitEvents(event.target.dataset[type], events[type])
