import easyinvoice from 'easyinvoice'
import 'regenerator-runtime/runtime'

export default () => {
  // event.preventDefault()

  // const {
  //   customer,
  //   address,
  //   zip,
  //   city,
  //   number,
  //   firstname,
  //   country,
  //   lastname,
  //   services,
  //   date: { year, month, day }
  // } = JSON.parse(localStorage.getItem('saleBills'))[self.bill]

  // const data = {
  //   'currency': '€',
  //   'taxNotation': 'TVA',
  //   'client': {
  //     'company': customer,
  //     'address': `${ address } ${ number }`,
  //     'zip': zip,
  //     'city': city,
  //     'country': country
  //   },
  //   'invoiceNumber': self.bill,
  //   'invoiceDate': `${ day } ${ month } ${ year }`,
  //   'products': services
  // }

  // console.log('a')

  // easyinvoice.createInvoice(data, function (result) {
  //   // easyinvoice.download('myInvoice.pdf')
  //   console.log(result)
  //   //	you can download like this as well:
  //   //	easyinvoice.download();
  //   //	easyinvoice.download('myInvoice.pdf');
  // })
}
