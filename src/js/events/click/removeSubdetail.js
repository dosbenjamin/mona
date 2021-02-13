import { $, $$ } from '../../utilities/dom'
import calculateHours from '../../components/calculateHours'

export default () => {
  const $detail = event.target.closest('.js-detail')
  event.target.parentElement.remove()
  calculateHours($detail)

  if ($$('.js-subdetail', $detail).length === 0) {
    $('.js-subdetails-area', $detail).classList.add('is-invisible')
    $('.js-form-input[name="hours"]', $detail).disabled = false
  }
}
