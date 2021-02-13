import { $, $$ } from '../../utilities/dom'
import calculateHours from '../../components/calculateHours'

const enableTotal = $detail => {
  $('.js-subdetails-area', $detail).classList.add('is-invisible')
  $('.js-form-input[name="hours"]', $detail).disabled = false
}

export default () => {
  const $detail = event.target.closest('.js-detail')
  event.target.parentElement.remove()
  calculateHours($detail)
  $$('.js-subdetail', $detail).length === 0 && enableTotal($detail)
}
