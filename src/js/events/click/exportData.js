import { getStorage, setJsonName } from '../../components/saveJson'

export default () => {
  const $target = event.target
  const storage = getStorage()
  const file = new Blob([JSON.stringify(storage)], { type: 'application/json' })
  $target.href = URL.createObjectURL(file)
  $target.download = setJsonName()
}
