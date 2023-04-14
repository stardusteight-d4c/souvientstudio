import { randomUUID } from 'node:crypto'
import type { NextApiRequest, NextApiResponse } from 'next'
import jwt from 'jsonwebtoken'
import nodemailer from 'nodemailer'
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

  let tmpToken: string

  // gerar token temporário que expira em 15min

  // salvar em uma variável fora da rota, mandar para o email do usuário
  // um link com queryParam de token?='aslskalkslkdlskldsksd' que caia em uma página
  // na aplicação que enviará para o servidor confirmar o token e criar uma sessão de 7 dias

  // salvar sessão nos cokies do browser do usuário

  if (method === 'POST') {
    if (url && url.includes('token=')) {
      const token = url.split('=')[1]

      try {
        const verifiedToken = jwt.verify(token, secret!)
        console.log('Token válido e decodificado:', verifiedToken)
        // criar uma sessão de 7 dias enviar token pro front e salvar nos cookies
        // sempre que entrar em uma página verificar no server os cookies do browser e pegar o token
        // e assim retornar se é um user autenticado ou não
        return res.status(200).json({ status: true, message: 'Valid token.' })
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
        tmpToken = generateToken()
        const authUrl = `${baseUrl}/auth?token=${tmpToken}`
        if (body.email !== rootUserEmail || body.serverKey !== serverKey) {
          res
            .status(200)
            .json({ status: false, message: 'Invalid credentials.' })
        } else {
          await sendUrlAuthToRootUserEmail(authUrl)
          res.status(200).json({
            status: true,
            message: 'The access link has been sent to your email! The link will expire in 15 minutes.',
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
