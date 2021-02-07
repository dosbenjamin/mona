import { $ } from '../../utilities/dom'

const visibleClass = 'is-visible'
const invisibleClass = 'is-invisible'
const activeClass = 'is-active'

const toggle = ({ $element, remove, add }) => {
  $element.classList.remove(remove)
  $element.classList.add(add)
}

export default () => {
  const $newButton = $(`.js-form-toggle:not(.${ activeClass })`)
  const $oldButton = $(`.js-form-toggle.${ activeClass }`)
  const $oldStep = $(`.js-form.${ visibleClass }`)
  const $newStep = $(`.js-form.${ invisibleClass }`)

  if (event.target.classList.contains(activeClass)) return

  [
    {
      $element: $oldStep,
      remove: visibleClass,
      add: invisibleClass
    },
    {
      $element: $newStep,
      remove: invisibleClass,
      add: visibleClass
    },
    {
      $element: $oldButton,
      remove: activeClass,
      add: null
    },
    {
      $element: $newButton,
      remove: null,
      add: activeClass
    }
  ].forEach(toggle)
}
