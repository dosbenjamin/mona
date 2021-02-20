import { $, $$ } from '../../utilities/dom'

const createNewRow = () => {
  const $row = document.createElement('template')

  $row.innerHTML = `<li class="flex justify-between relative mt-2 js-subdetail">
    <input class="input-grey w-1/2 js-form-input" name="detail" placeholder="Dos Santos" type="text" required="required">
    <input class="input-grey w-1/2 ml-12 js-form-input" name="hours" placeholder="Dos Santos" type="number" required="required" data-input="calculateHours">
    <button class="absolute -right-2 top-1/2 transform translate-x-full -translate-y-1/2 btn-circle-grey w-4 h-4 overflow-hidden" type="button" data-click="removeSubdetail">
      <span class="line-short transform -translate-x-1/2 -translate-y-1/2 rotate-45"></span>
      <span class="sr-only">Supprimer</span>
      <span class="line-short transform -translate-x-1/2 -translate-y-1/2 -rotate-45"></span>
    </button>
  </li>`

  return $row.content
}

const disableTotal = $detail => {
  $('.js-subdetails-area', $detail).classList.remove('is-invisible')
  $('.js-form-input[name="hours"]', $detail).disabled = true
}

export default () => {
  const $detail = event.target.closest('.js-detail')
  event.target.previousElementSibling.append(createNewRow())
  $$('.js-subdetail', $detail).length >= 1 && disableTotal($detail)
}
