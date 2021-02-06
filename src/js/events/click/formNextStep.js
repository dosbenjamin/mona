import { $ } from '../../utilities/dom'

export default () => {
  const $new = event.target
  const $old = $('.js-form-toggle.is-active')

  const $oldStep = $('.js-form.is-visible')
  const $newStep = $('.js-form.is-invisible')

  $old.classList.remove('is-active')
  $new.classList.add('is-active')

  $oldStep.classList.remove('is-visible')
  $oldStep.classList.add('is-invisible')

  $newStep.classList.remove('is-invisible')
  $newStep.classList.add('is-visible')
}
