import Page from './Page'
import { $, $$ } from '../utilities/dom'

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

const createTitleRow = ({ year, month }) => {
  const $row = document.createElement('template')

  $row.innerHTML = `<tr class="js-title-row relative" data-year="${ year }" data-month="${ month }">
    <td colspan="5" class="uppercase py-8">${ months[month] } ${ year }</td>
  </tr>`

  return $row.content
}

const createNewRow = ({ infos: { company, firstname, lastname }, date: { year, month }, tvac, htva, tva, id }) => {
  const $row = document.createElement('template')

  $row.innerHTML += `<tr class="relative js-bill-item" data-id="${ id }">
    <td>${ id }</td>
    <td>${ company ? company : (firstname + ' ' + lastname) }</td>
    <td>${ htva.toFixed(2) }</td>
    <td>${ tvac.toFixed(2) }</td>
    <td>${ tva.toFixed(2) }</td>
    <td class="relative">
      <button class="absolute -right-1/3 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-grey-400 rounded-full w-12 h-12 overflow-hidden" type="button" data-click="removeBill">
        <span class="line transform -translate-x-1/2 -translate-y-1/2 rotate-45"></span>
        <span class="sr-only">Supprimer</span>
        <span class="line transform -translate-x-1/2 -translate-y-1/2 -rotate-45"></span>
      </button>
    </td>
  </tr>`

  return $row.content
}

// const createSubRow = () => {
//   cons $
// }

export default class extends Page {
  constructor () {
    super()
    self.type = document.body.dataset.type
    console.log('Controller: Bill')
  }

  create () {
    console.log('Action: Create')
  }

  list () {
    const $area = $('.js-bill-area')

    const bills = localStorage.getItem(self.type)
      && JSON.parse(localStorage.getItem(self.type))

    bills && bills
      .map(({ date }) => date)
      .reduce((uniques, date) => JSON.stringify(uniques).includes(JSON.stringify(date))
        ? uniques
        : [...uniques, date], [])
      .reverse()
      .forEach(date => $area.append(createTitleRow(date)))

    bills && bills.forEach(bill => {
      const { date: { year, month } } = bill
      const $row = createNewRow(bill)
      $area.insertBefore($row, $(`.js-title-row[data-year="${ year }"][data-month="${ month }"]`).nextSibling)
    })
  }
}
