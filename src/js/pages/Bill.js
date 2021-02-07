import Page from './Page'
import { $ } from '../utilities/dom'

const createNewRow = ({ customer, firstname, lastname, tvac, htva, tva }, index) => {
  const $row = document.createElement('template')

  $row.innerHTML = `<tr class="font-bold">
    <td>${ index + 1 }</td>
    <td>${ customer ? customer : firstname }</td>
    <td>${ lastname }</td>
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
    const $rows = bills.map(createNewRow).reverse()

    $rows.forEach($row => $area.append($row))
  }
}
