import { $ } from '../../utilities/dom'

export default () => {
  const $hours = event.target.parentElement
  const $toDelete = [$hours, $hours.previousElementSibling]
  $toDelete.forEach($input => $input.remove())
}
