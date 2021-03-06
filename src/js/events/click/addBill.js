import { $, $$ } from '../../utilities/dom'
import getTVA from '../../components/tva'

const calculateDetail = {
  purchases: amount => {
    return {
      htva: amount ? parseFloat(amount) : 0,
      tvac: getTVA(amount)
    }
  },
  sales: (hours, rate) => {
    return {
      hours: parseFloat(hours),
      htva: parseFloat(rate * hours),
      tvac: getTVA(rate * hours),
      tva: getTVA(rate * hours) - parseFloat(rate * hours)
    }
  }
}

export default () => {
  const { rate } = JSON.parse(localStorage.getItem('settings'))

  const $infos = $$('.js-infos-area .js-form-input')
  const infos = $infos.reduce((infos, $info) => Object.assign(
    infos, { [$info.name]: $info.value }
  ), {})

  const $details = $$('.js-detail')
  const details = $details
    .map($detail => {
      const $secondInput = $('.js-form-input[name="hours"], .js-form-input[name="price"]', $detail)
      const details = Object.assign({
        description: $('.js-form-input[name="description"]', $detail).value
      }, calculateDetail[self.type]($secondInput.value, rate))

      self.type === 'sales' && Object.assign(details, $$('.js-subdetail', $detail.closest('.js-detail'))
        .map($subdetail => {
          const hours = $('.js-form-input[name="hours"]', $subdetail).value
          return Object.assign({
            description: $('.js-form-input[name="detail"]', $subdetail).value,
          }, calculateDetail.sales(hours, rate))
        }))

      return details
    })

  const htva = details
    .map(({ htva }) => htva)
    .reduce((total, amount) => total + amount)
  const tvac = getTVA(htva)
  const tva = tvac - htva

  const today = new Date()
  const date = {
    year: today.getFullYear(),
    month: today.getMonth() + 1,
    day: today.getDate()
  }

  const id = [
    date.year,
    date.month,
    date.day,
    today.getHours(),
    today.getMinutes(),
    today.getMilliseconds()
  ].reduce((id, current) => id + current.toString())

  const bill = { infos, details, htva, tvac, tva, date, id }

  const storage = localStorage.getItem(self.type)
    ? JSON.parse(localStorage.getItem(self.type))
    : localStorage.setItem(self.type, JSON.stringify([bill]))

  // self.bill = storage.length

  storage && localStorage.setItem(self.type, JSON.stringify([...storage, bill]))
}
