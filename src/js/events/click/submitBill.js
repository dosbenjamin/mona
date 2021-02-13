import { $, $$ } from '../../utilities/dom'
import getTVA from '../../components/tva'

const RATE = 40
const TVA = 21

const $infos = $$('.js-contact-area .js-form-input')

const calculateDetail = {
  purchases: amount => {
    return {
      htva: amount,
      tvac: getTVA(amount)
    }
  },
  sales: hours => {
    return {
      hours: hours,
      htva: RATE * hours,
      tvac: getTVA(RATE * hours)
    }
  }
}

export default () => {
  const infos = $infos.reduce((infos, $info) => {
    infos[$info.name] = $info.value
    return infos
  }, {})

  const $details = $$('.js-details-area .js-form-input')
  const details = $details
    .filter(($detail, index) => !(index % 2))
    .map(($detail, index) => {
      const $nextInput = $('.js-form-input', $detail.parentElement.nextElementSibling)
      const price = calculateDetail[self.type]($nextInput.value)
      return Object.assign({
        description: $detail.value
      }, price)
    })

  const htva = details
    .map(({ htva }) => htva)
    .reduce((total, amout) => total + amout)
  const tvac = getTVA(htva)
  const tva = tvac - htva

  const today = new Date()
  const date = {
    year: today.getFullYear(),
    month: today.getMonth() + 1,
    day: today.getDate()
  }

  const bill = { infos, details, htva, tvac, tva, date }

  const storage = localStorage.getItem(self.type)
    ? JSON.parse(localStorage.getItem(self.type))
    : localStorage.setItem(self.type, JSON.stringify([bill]))

  self.bill = storage.length

  storage && localStorage.setItem(self.type, JSON.stringify([...storage, bill]))
}
