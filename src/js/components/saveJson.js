export const getStorage = () => ['sales', 'purchases', 'settings']
  .reduce((storage, type) => Object.assign(
    storage, localStorage.getItem(type)
      && { [type]: JSON.parse(localStorage.getItem(type)) }
  ), {})

export const setJsonName = () => {
  const today = new Date()
  const date = [
    today.getFullYear(),
    today.getMonth() + 1,
    today.getDate(),
    today.getHours(),
    today.getMinutes(),
    today.getMilliseconds()
  ].map(value => value)
  return date.reduce((name, date) => `${name}-${date}`, 'mona')
}
