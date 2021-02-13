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

  const today = new Date()

  const date = {
    year: today.getFullYear(),
    month: today.getMonth() + 1,
    day: today.getDate()
  }

  const bill = { customer, services, htva, tvac, tva, date }

  const storage = localStorage.getItem(self.type)
    ? JSON.parse(localStorage.getItem(self.type))
    : localStorage.setItem(self.type, JSON.stringify([bill]))

  storage && localStorage.setItem(self.type, JSON.stringify([...storage, bill]))

  self.bill = storage.length
}
