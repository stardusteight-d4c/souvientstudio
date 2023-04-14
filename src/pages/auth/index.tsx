import Header from '@/components/@globals/Header'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function Auth() {
  const router = useRouter()
  const token = router.query.token

  console.log('token da url:', token)

  useEffect(() => {
    if (token) {
      ;(async () => {
        const res = await axios.post(`/api/auth?token=${token}`)
        if (res.data.status === false) {
          alert(res.data.message)
          return
        } else {
          alert(res.data.message)
          return
        }
      })()
    }
  }, [token])

  return (
    <>
      <Header title="Authorization" />
      <main className="min-h-screen flex items-center justify-center h-[100vh] bg-[#FE9BBA] text-[#2e2e2e] overflow-hidden">
        <div className="spinner4546">
          <span>L</span>
          <span>O</span>
          <span>A</span>
          <span>D</span>
          <span>I</span>
          <span>N</span>
          <span>G</span>
        </div>
      </main>
    </>
  )
}
