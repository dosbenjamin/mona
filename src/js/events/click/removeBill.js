import { $ } from '../../utilities/dom'

export default () => {
  const $bill = event.target.closest('.js-bill-item')
  const { id } = $bill.dataset

  const storage = JSON.parse(localStorage.getItem(self.type))
  const newStorage = storage
    .filter((bill, index) => index !== parseInt(id))

  const { date } = storage[id]

  const isNotLast = newStorage
    .map(({ date }) => date)
    .some(({ year, month }) => year === date.year && month === date.month)

  $bill.remove()
  // !isNotLast && $bill.previousElementSibling.remove()
  localStorage.setItem(self.type, JSON.stringify(newStorage))
}
