export default () => {
  const $bill = event.target.closest('.js-bill-item')
  const domId = $bill.dataset.id

  const storage = JSON.parse(localStorage.getItem(self.type))
  const newStorage = storage
    .filter(({ id }) => id !== domId)

  const { date } = storage
    .find(({ id }) => id === domId)

  const isNotLast = newStorage
    .map(({ date }) => date)
    .some(({ year, month }) => year === date.year && month === date.month)

  localStorage.setItem(self.type, JSON.stringify(newStorage))
  !isNotLast && $bill.previousElementSibling.remove()
  $bill.remove()
}
