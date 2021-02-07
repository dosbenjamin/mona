import { $$ } from '../../utilities/dom'

const RATE = 40
const TVA = 21

export default () => {
  event.preventDefault()

  const $infos = $$('.js-contact-area .js-form-input')

  const bill = $infos.reduce((bill, $info) => {
    bill[$info.name] = $info.value
    return bill
  })

  const $services = $$('.js-services-area .js-form-input')

  bill.services = $services
    .filter(($service, index) => index % 2 === 0)
    .map(($service, index) => {
      console.log($service)
      console.log($service.closest('.js-form-input'))
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
