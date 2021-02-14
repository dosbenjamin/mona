import 'regenerator-runtime/runtime'

export default async () => {
  const files = event.target.files
  const file = files.length && await files[0].text()
  const json = JSON.parse(file)
  const backup = Object.entries(json)

  const newStorages = backup
    .map(([ type, storage ]) => Array.isArray(storage)
      ? { type, storage: localStorage.getItem(type)
          ? [...storage, ...JSON.parse(localStorage.getItem(type))]
            .reduce((uniques, data) => JSON.stringify(uniques).includes(JSON.stringify(data))
              ? uniques
              : [...uniques, data], [])
          : storage
        }
      : { type, storage })

  newStorages.forEach(({ type, storage }) => localStorage.setItem(type, JSON.stringify(storage)))
}
