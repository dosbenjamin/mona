export default () => {
  const settings = self.$inputs.reduce((settings, $input) => Object.assign(
    settings, { [$input.name]: $input.value }
  ), {})

  localStorage.setItem('settings', JSON.stringify(settings))
}
