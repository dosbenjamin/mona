import Page from './Page'
import { $, $$ } from '../utilities/dom'
import 'regenerator-runtime/runtime'

const months = {
  1: 'Janvier',
  2: 'Février',
  3: 'Mars',
  4: 'Avril',
  5: 'Mai',
  6: 'Juin',
  7: 'Juillet',
  8: 'Août',
  9: 'Septembre',
  10: 'Octobre',
  11: 'Novembre',
  12: 'Décembre'
}

const waitTitle = (year, month) => new Promise((resolve, reject) => setTimeout(() => {
  const noTitle = $(`.js-title-row[data-year="${year}"][data-month="${month}"]`) === null
  noTitle ? reject(true) : resolve(false)
}, 100))

const createTitleRow = (year, month) => {
  const $row = document.createElement('template')
  $row.innerHTML = `<tr class="js-title-row relative" data-year="${year}" data-month="${month}">
    <td colspan="5" class="uppercase py-8">${months[month]} ${year}</td>
  </tr>`
  return $row.content
}

const createNewRow = async ({ customer, tvac, htva, tva, date }, index) => {
  const { year, month } = date
  const { company, firstname, lastname } = customer

  const $row = document.createElement('template')

  try {
    await waitTitle(year, month)
  } catch(error) {
    const $titleRow = createTitleRow(year, month)
    $row.content.prepend($titleRow)
  } finally {
    $row.innerHTML += `<tr class="relative js-bill-item" data-id="${ index }">
      <td>${ index + 1}</td>
      <td>${ company ? company : (firstname + ' ' + lastname)}</td>
      <td>${ htva }</td>
      <td>${ tvac }</td>
      <td>${ tva }</td>
      <td class="relative">
        <button class="absolute -right-1/3 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-grey-400 rounded-full w-12 h-12 overflow-hidden" type="button" data-click="removeBill">
          <span class="line transform -translate-x-1/2 -translate-y-1/2 rotate-45"></span>
          <span class="sr-only">Supprimer</span>
          <span class="line transform -translate-x-1/2 -translate-y-1/2 -rotate-45"></span>
        </button>
      </td>
    </tr>`
  }

  return $row.content
}

export default class extends Page {
  constructor() {
    super()
    self.type = document.body.dataset.type
    console.log('Controller: Bill')
  }

  create() {
    console.log('Action: Create')
  }

  async list() {
    const bills = localStorage.getItem(self.type)
      && JSON.parse(localStorage.getItem(self.type))

    const $area = $('.js-bill-area')

    const promises = bills && bills.map(createNewRow).reverse()
    const $rows = await Promise.all(promises)

    bills && $rows.forEach($row => $area.append($row))
  }
}
