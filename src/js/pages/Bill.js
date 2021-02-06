import Page from './Page'
import { $ } from '../utilities/dom'

const createNewRow = ({ firstname, lastname, tvac, htva, tva }, index) => {
  const $row = document.createElement('template')

  $row.innerHTML = `<tr class="font-bold">
    <td>${ index + 1 }</td>
    <td>${ lastname }</td>
    <td>${ firstname }</td>
    <td>${ htva }</td>
    <td>${ tvac }</td>
    <td>${ tva }</td>
  </tr>`

  return $row.content.firstChild
}

export default class extends Page {
  constructor () {
    super()
    console.log('Controller: Bill')
  }

  create () {
    console.log('Action: Create')
  }

  list () {
    const bills = localStorage.getItem('saleBills')
      && JSON.parse(localStorage.getItem('saleBills'))

    const $area = $('.js-bill-area')
    const $rows = bills.map(createNewRow)

    $rows.forEach($row => $area.append($row))
  }
}
