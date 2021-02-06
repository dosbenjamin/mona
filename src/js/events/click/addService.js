import { $ } from '../../utilities/dom'

const $area = $('.js-services-area')

const createNewRow = () => {
  const $row = document.createElement('template')

  $row.innerHTML = `<div class="flex flex-col flex-auto">
    <label>Description du service</label>
    <input name="service" class="rect-rounded-border border-grey-400 mt-2 js-form-input" placeholder="Heures" required>
  </div>
  <div class="flex flex-col flex-auto">
    <label>Description du service</label>
    <input name="hour" class="rect-rounded-border border-grey-400 mt-2 js-form-input" placeholder="Heures" required>
  </div>`

  return $row.content
}

export default () => $area.append(createNewRow())
