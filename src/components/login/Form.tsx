import { useState } from 'react'
import axios from 'axios'
import { formStyles as css } from './styles'

interface Props {}

export default function Form(props: Props) {
  const [inputFormData, setInputFormData] = useState({
    email: '',
    serverKey: '',
  })

  function handleInputChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target
    setInputFormData({ ...inputFormData, [name]: value })
  }

  async function requestAccessLink() {
    if (inputFormData.email === '') {
      alert('Enter your email.')
      return
    } else if (inputFormData.serverKey === '') {
      alert('Enter server key.')
      return
    }
    const res = await axios.post('/api/auth', {
      email: inputFormData.email,
      serverKey: inputFormData.serverKey,
    })
    if (res.data.status === false) {
      alert(res.data.message)
      return
    } else {
      alert(res.data.message)
      return
    }
  }

  return (
    <>
      <input
        placeholder="Email"
        type="email"
        name="email"
        value={inputFormData.email}
        onChange={(e) => handleInputChange(e)}
        className={css.input}
      />
      <input
        placeholder="Server key"
        type="password"
        autoComplete="new-password"
        name="serverKey"
        value={inputFormData.serverKey}
        onChange={(e) => handleInputChange(e)}
        className={css.input}
      />
      <button onClick={requestAccessLink} className={css.requestAccessLinkBtn}>
        Request Access Link
      </button>
    </>
  )
}
