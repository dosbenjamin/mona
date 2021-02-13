import { $ } from '../../utilities/dom'

const visibleClass = 'is-visible'
const invisibleClass = 'is-invisible'
const activeClass = 'is-active'

const toggle = ({ $element, remove, add }) => {
  remove && $element.classList.remove(remove)
  add && $element.classList.add(add)
}

export default () => {
  if (event.target.classList.contains(activeClass)) return

  const actions = [
    {
      $element: $(`.js-form.${ visibleClass }`),
      remove: visibleClass,
      add: invisibleClass
    },
    {
      $element: $(`.js-form-toggle.${ activeClass }`),
      remove: activeClass,
    },
    {
      $element: $(`.js-form.${ invisibleClass }`),
      remove: invisibleClass,
      add: visibleClass
    },
    {
      $element: $(`.js-form-toggle:not(.${ activeClass })`),
      add: activeClass,
    }
  ]

  actions.forEach(toggle)
}
