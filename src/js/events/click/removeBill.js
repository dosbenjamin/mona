export default () => {
  const $bill = event.target.closest('.js-bill-item')
  const { id } = $bill.dataset

  const storage = JSON.parse(localStorage.getItem('saleBills'))
    .filter((bill, index) => index !== parseFloat(id))

  $bill.remove()
  localStorage.setItem('saleBills', JSON.stringify(storage))
}
