import { $ } from '../../utilities/dom'

export default () => {
  const $bill = event.target.closest('.js-bill-item')
  const { id } = $bill.dataset

  const storage = JSON.parse(localStorage.getItem('saleBills'))

  const newStorage = storage
    .filter((bill, index) => index !== parseInt(id))

  const current = storage[id]
  const { date } = current

  const isNotLast = newStorage
    .map(({ date }) => date)
    .some(({ year, month }) => year === date.year && month === date.month)

  !isNotLast && $(`.js-title-row[data-year="${ date.year }"][data-month="${ date.month }"]`).remove()
  $bill.remove()
  localStorage.setItem('saleBills', JSON.stringify(newStorage))
}
