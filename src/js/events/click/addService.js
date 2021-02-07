import { $ } from '../../utilities/dom'

const $area = $('.js-services-area')

const createNewRow = () => {
  const $row = document.createElement('template')

  $row.innerHTML = `<div class="flex flex-col flex-auto">
    <input class="rect-rounded-border border-grey-400 mt-2 js-form-input" placeholder="Description" required>
  </div>
  <div class="flex flex-col flex-auto relative">
    <input class="rect-rounded-border border-grey-400 mt-2 js-form-input" placeholder="Heures" required>
    <button class="absolute -right-1/3 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-grey-400 rounded-full w-12 h-12 overflow-hidden" type="button" data-click="removeService">
      <span class="line transform -translate-x-1/2 -translate-y-1/2 rotate-45"></span>
      <span class="sr-only">Supprimer</span>
      <span class="line transform -translate-x-1/2 -translate-y-1/2 -rotate-45"></span>
    </button>
  </div>`

  return $row.content
}

export default () => $area.append(createNewRow())
