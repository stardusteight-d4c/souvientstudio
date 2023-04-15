import Header from '@/components/@globals/Header'
import axios from 'axios'
import Link from 'next/link'
import { useState } from 'react'

export default function Login() {
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
      <Header title="Login" />
      <main className="min-h-screen bg-gradient-to-b from-pink text-black to-transparent overflow-hidden">
        <Link href="/">
          <span className="absolute left-1/2 -translate-x-1/2 mt-8 font-bold mx-auto w-fit text-3xl cursor-pointer tracking-[-1px] uppercase text-white">
            Fevient
          </span>
        </Link>
        <div className="flex flex-col items-center justify-center h-[100vh]">
          <div className="flex shadow-sm shadow-black/10 bg-white rounded-[50px] px-8 pt-14 pb-10 items-center flex-col gap-4">
            <input
              placeholder="Email"
              type='email'
              name="email"
              value={inputFormData.email}
              onChange={(e) => handleInputChange(e)}
              className="py-1 px-4 bg-white placeholder:text-gray border-[2px] border-black focus:border-orange outline-none rounded-full"
            />
            <input
              placeholder="Server key"
              type='password'
              autoComplete="new-password"
              name="serverKey"
              value={inputFormData.serverKey}
              onChange={(e) => handleInputChange(e)}
              className="py-1 px-4 bg-white placeholder:text-gray border-[2px] border-black focus:border-orange outline-none rounded-full"
            />
            <button
              onClick={requestAccessLink}
              className="block mt-2 mx-auto w-fit bg-pink py-2 px-4 text-white font-medium rounded-full"
            >
              Request Access Link
            </button>
          </div>
        </div>
      </main>
    </>
  )
}
