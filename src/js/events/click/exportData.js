export default () => {
  const storage = JSON.stringify({
    saleBills: JSON.parse(localStorage.getItem('saleBills'))
  })

  const file = new Blob([storage], {
    type: 'application/json'
  })

  const url = URL.createObjectURL(file)

  event.target.href = url
  event.target.setAttribute( 'download', 'data.json' )

  // console.log(file)
}
