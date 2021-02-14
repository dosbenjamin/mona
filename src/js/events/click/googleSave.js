import 'regenerator-runtime/runtime'
import { getStorage, setJsonName } from '../../components/saveJson'
import { getGoogleStatus } from '../../components/googleAuthentification'

const save = async () => {
  const file = getStorage()
  const isSignedIn = getGoogleStatus()
  const request = isSignedIn && await gapi.client.request({
    path: 'https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: `'title': 'hello' ${JSON.stringify(file)}`
      // data:
      // 'mimeType': 'application/json',
    // resource: {
    //   'name': setJsonName(),
    //   data: ,
    // }
  })
}


export default () => {
  event.preventDefault()
  // console.log(file)
  save()
}
