import { $, $$ } from '../../utilities/dom'
import calculateHours from '../../components/calculateHours'

export default () => {
  const $detail = event.target.closest('.js-detail')

  $$('.js-subdetail', $detail).length === 1
    && $('.js-subdetails-area', $detail).classList.add('is-invisible')

  event.target.parentElement.remove()
  calculateHours($detail)
}
