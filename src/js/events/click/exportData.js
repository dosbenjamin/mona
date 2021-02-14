export default () => {
  const $target = event.target

  const storage = ['sales', 'purchases', 'settings']
    .reduce((storage, type) => Object.assign(
      storage, localStorage.getItem(type)
        && { [type]: JSON.parse(localStorage.getItem(type)) }
    ), {})

  const file = new Blob([JSON.stringify(storage)], { type: 'application/json' })

  const today = new Date()
  const date = [
    today.getFullYear(),
    today.getMonth() + 1,
    today.getDate(),
    today.getHours(),
    today.getMinutes(),
    today.getMilliseconds()
  ].map(value => value)

  $target.href = URL.createObjectURL(file)
  $target.download = date
    .reduce((name, date) => `${name}-${date}`, 'mona')
}
