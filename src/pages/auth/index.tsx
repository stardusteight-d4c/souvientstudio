import Header from '@/components/@globals/Header'
import axios from 'axios'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function Auth() {
  const router = useRouter()
  const token = router.query.token

  useEffect(() => {
    if (token) {
      ;(async () => {
        const res = await axios.post(`/api/auth?token=${token}`)
        if (res.data.status === false) {
          alert(res.data.message)
          router.push('/')
        } else {
          alert(res.data.message)
          const now = new Date()
          const expireTime = now.getTime() + 7 * 24 * 60 * 60 * 1000 // expira em 7 dias
          now.setTime(expireTime)
          document.cookie = `sessionCookie=${
            res.data.sessionToken
          }; expires=${now.toUTCString()}; path=/`
          router.push('/')
        }
      })()
    } else {
      router.push('/')
    }
  }, [token])

  return (
    <>
      {token && (
        <>
          <Header title="Authorization" />
          <main className="min-h-screen flex items-center justify-center h-[100vh] bg-pink text-black overflow-hidden">
            <div className="spinner4546">
              <span>F</span>
              <span>E</span>
              <span>V</span>
              <span>I</span>
              <span>E</span>
              <span>N</span>
              <span>T</span>
            </div>
          </main>
        </>
      )}
    </>
  )
}
