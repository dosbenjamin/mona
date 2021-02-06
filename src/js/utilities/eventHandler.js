import * as clickEvents from '../events/click'

// const splitEvents = events => events.split(' ')

// export default clickHandler => splitEvents(event.target.dataset.click)
//   .map(event => clickEvents[event]())

export default clickHandler => clickEvents[event.target.dataset.click]()
