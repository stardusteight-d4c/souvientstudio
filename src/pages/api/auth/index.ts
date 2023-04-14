import type { NextApiRequest, NextApiResponse } from 'next'
import jwt from 'jsonwebtoken'
import { sendUrlAuthToRootUserEmail } from '@/lib/nodemailer'

interface Request {
  email: string
  serverKey: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    method,
    body,
    url,
  }: {
    method?: string | undefined
    body: Request
    url?: string | undefined
  } = req
  const serverKey = process.env.SERVER_KEY
  const rootUserEmail = process.env.ROOT_USER_EMAIL
  const secret = process.env.JWT_SECRET_KEY
  const baseUrl = process.env.BASE_URL

  if (method === 'POST') {
    if (url && url.includes('token=')) {
      try {
        const token = url.split('=')[1]
        const verifiedToken = jwt.verify(token, secret!)
        if (verifiedToken) {
          function generateToken() {
            const payload = {
              email: verifiedToken,
              key: serverKey,
            }
            return jwt.sign(payload, secret!, { expiresIn: '7d' })
          }
          const sessionToken = generateToken()
          return res.status(200).json({
            status: true,
            message: 'Valid token.',
            sessionToken: sessionToken,
          })
        }
      } catch (err) {
        console.error('Invalid Token:', err)
        // redirecionar para login
        return res
          .status(200)
          .json({ status: false, message: 'Invalid or expired token.' })
      }
    } else {
      function generateToken() {
        const payload = {
          email: rootUserEmail,
          key: serverKey,
        }
        return jwt.sign(payload, secret!, { expiresIn: '15min' })
      }
      try {
        const tmpToken = generateToken()
        const authUrl = `${baseUrl}/auth?token=${tmpToken}`
        if (body.email !== rootUserEmail || body.serverKey !== serverKey) {
          res
            .status(200)
            .json({ status: false, message: 'Invalid credentials.' })
        } else {
          await sendUrlAuthToRootUserEmail(authUrl)
          res.status(200).json({
            status: true,
            message:
              'The access link has been sent to your email! The link will expire in 15 minutes.',
          })
        }
      } catch (error) {
        res.status(500).json(error)
      }
    }
  }
}

export const config = {
  api: {
    responseLimit: '5mb',
    bodyParser: {
      sizeLimit: '5mb',
    },
  },
}
