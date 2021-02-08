import { $, $$ } from '../../utilities/dom'

const RATE = 40
const TVA = 21

const $infos = $$('.js-contact-area .js-form-input')

export default () => {
  const $services = $$('.js-services-area .js-form-input')

  const customer = $infos.reduce((infos, $info) => {
    infos[$info.name] = $info.value
    return infos
  }, {})

  const services = $services
    .filter(($service, index) => !(index % 2))
    .map(($service, index) => {
      const hours = $('.js-form-input', $service.parentElement.nextElementSibling).value

      return {
        description: $service.value,
        hours: hours,
        htva: RATE * hours,
        tvac: ((RATE * hours) * 0.21) + (RATE * hours)
      }
    })

  const htva = services
    .map(({ htva }) => htva)
    .reduce((total, amout) => total + amout)

  const tvac = htva * 1.21
  const tva = tvac - htva

  const date = {
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 3,
    day: new Date().getDay()
  }

  const bill = { customer, services, htva, tvac, tva, date }

  const storage = localStorage.getItem('saleBills')
    ? JSON.parse(localStorage.getItem('saleBills'))
    : localStorage.setItem('saleBills', JSON.stringify([bill]))

  self.bill = storage.length

  storage && localStorage.setItem('saleBills', JSON.stringify([...storage, bill]))
}
