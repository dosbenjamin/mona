import 'regenerator-runtime/runtime'
import { getStorage, setJsonName } from '../../components/saveJson'
import { getGoogleStatus } from '../../components/googleAuthentification'

const save = async () => {
  const file = getStorage()
  const isSignedIn = getGoogleStatus()
  // const request = isSignedIn && await gapi.client.request({
  //   path: 'https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart',
  //   method: 'POST',
  //   body: JSON.stringify(file, {

  //     'title': setJsonName() + '.json'
  //   })
  // })


  const request = isSignedIn && await gapi.client.drive.files.create({
    resource: {
      'name': setJsonName(),
    },
    media: {
      mimeType: 'application/json',
      body: JSON.stringify(file)
    }
  })

  // await gapi.client.request({
  //   path: 'https://www.googleapis.com/upload/drive/v3/files/' + request.result.id,
  //   uploadType: 'media',
  //   method: 'PUT',
  //   body: JSON.stringify(file)
  // })
}

export default () => {
  event.preventDefault()
  // console.log(file)
  save()
}
