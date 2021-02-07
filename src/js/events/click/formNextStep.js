import { $ } from '../../utilities/dom'

const visibleClass = 'is-visible'
const invisibleClass = 'is-invisible'
const activeClass = 'is-active'

const toggle = ({ $element, remove, add }) => {
  $element.classList.remove(remove)
  $element.classList.add(add)
}

export default () => {
  if (event.target.classList.contains(activeClass)) return

  [
    {
      $element: $(`.js-form.${ visibleClass }`),
      remove: visibleClass,
      add: invisibleClass
    },
    {
      $element: $(`.js-form-toggle.${ activeClass }`),
      remove: activeClass,
      add: null
    },
    {
      $element: $(`.js-form.${ invisibleClass }`),
      remove: invisibleClass,
      add: visibleClass
    },
    {
      $element: $(`.js-form-toggle:not(.${ activeClass })`),
      remove: null,
      add: activeClass
    }
  ].forEach(toggle)
}
