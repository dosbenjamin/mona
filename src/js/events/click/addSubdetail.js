const createNewRow = () => {
  const $row = document.createElement('template')

  $row.innerHTML = `<li class="flex justify-between relative mt-2 js-subdetail">
    <input class="rect-rounded-border border-grey-400 js-form-input" name="detail" placeholder="Dos Santos" type="text" required="required">
    <input class="rect-rounded-border border-grey-400 js-form-input" name="hours" placeholder="Dos Santos" type="text" required="required">
    <button class="absolute -right-2 top-1/2 transform translate-x-full -translate-y-1/2 bg-grey-400 rounded-full w-4 h-4 overflow-hidden" type="button" data-click="removeParent">
      <span class="line transform -translate-x-1/2 -translate-y-1/2 rotate-45"></span>
      <span class="sr-only">Supprimer</span>
      <span class="line transform -translate-x-1/2 -translate-y-1/2 -rotate-45"></span>
    </button>
  </li>`
  return $row.content
}

export default () => event.target.previousElementSibling.append(createNewRow())
