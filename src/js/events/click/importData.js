import 'regenerator-runtime/runtime'

export default async () => {
  const file = await event.target.previousElementSibling.files[0].text()
  localStorage.setItem('saleBills', file)
}
