import { $, $$ } from '../utilities/dom'

export default $service => {
  const $inputs = $$('.js-subdetails-area .js-form-input[name="hours"]', $service)
  const total = $inputs.length > 0 && $inputs
    .map(({ value }) => parseInt(value))
    .reduce((total, hours) => total + hours)
  $('.js-form-input[name="hours"]', $service).value = total ? total : 0
}
