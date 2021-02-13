import { $ } from '../../utilities/dom'

const $area = $('.js-details-area')

const content = {
  purchases: {
    firstLabel: 'Nom du produit',
    secondLabel: 'Prix',
    secondName: 'price'
  },
  sales: {
    firstLabel: 'Nom du service',
    secondLabel: 'Nombre d\'heures(s)',
    secondName: 'hours'
  }
}

const subdetail = `<ul class="flex flex-col w-full mt-10 js-subdetails-area">
    <li class="flex justify-between">
      <label>Détail du service</label>
      <label>Nombres d'heures</label>
    </li>
  </ul>
<button type="button" class="flex-wrap rect-rounded-border border-blue text-blue font-bold m-l-auto ml-auto mt-4" data-click="addSubdetail">Ajouter un sous-service</button>`

const createNewRow = () => {
  const $row = document.createElement('template')

  $row.innerHTML = `<div class="flex flex-col border-grey-400 p-10 border-2 rounded-md items-start mt-10 relative js-detail">
    <div class="flex justify-between w-full">
      <div class="flex flex-col flex-auto">
        <label>${ content[self.type].firstLabel }</label>
        <input class="rect-rounded-border border-grey-400 mt-2 js-form-input" name="description" placeholder="Dos Santos" type="text" required="required">
      </div>
      <div class="flex flex-col flex-auto">
        <label>${ content[self.type].secondLabel }</label>
        <input class="rect-rounded-border border-grey-400 mt-2 js-form-input" name="${ content[self.type].secondName }" placeholder="Dos Santos" type="text" required="required">
      </div>
    </div>

    ${ self.type === 'sales' ? subdetail : '' }

    <button class="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 bg-grey-400 rounded-full w-12 h-12 overflow-hidden" type="button" data-click="removeParent">
      <span class="line transform -translate-x-1/2 -translate-y-1/2 rotate-45"></span>
      <span class="sr-only">Supprimer</span>
      <span class="line transform -translate-x-1/2 -translate-y-1/2 -rotate-45"></span>
    </button>
  </div>`

  return $row.content
}

export default () => $area.append(createNewRow())