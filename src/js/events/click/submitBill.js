import { $$ } from '../../utilities/dom'
import calculateTva from '../../components/calculateTva'

const RATE = 40
const TVA = 21

export default () => {
  const bill = {}

  const $infos = $$('.js-contact-area .js-form-input')
  $infos.forEach($info => bill[$info.name] = $info.value)

  const $services = $$('.js-services-area .js-form-input')

  bill.services = $services
    .filter(($service, index) => !(index % 2))
    .map(($service, index) => {
      const hours = $services[index + 1].value
      return {
        description: $services[index].value,
        hours: hours,
        htva: RATE * hours,
        tvac: ((RATE * hours) * 0.21) + (RATE * hours)
      }
  })

  bill.htva = bill.services
    .map(({ htva }) => htva)
    .reduce((total, amout) => total + amout)

  bill.tvac = (bill.htva * 0.21) + bill.htva
  bill.tva = TVA
  bill.date = new Date()

  const storage = localStorage.getItem('saleBills')
    ? JSON.parse(localStorage.getItem('saleBills'))
    : localStorage.setItem('saleBills', JSON.stringify([bill]))

  storage && localStorage.setItem('saleBills', JSON.stringify([...storage, bill]))
}
