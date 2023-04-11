import { connectToDatabase } from '@/lib/mongodb'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { db } = await connectToDatabase()
  const { method, body } = req

  // Salvar foto de capa no storage do mongodb, criar uma URL

  if (method === 'POST') {
    try {
      await db.collection('projects').insertOne({
        ...body,
        date: new Date(),
      })
      res
        .status(201)
        .json({ status: true, message: 'The project article was published!' })
    } catch (error) {
      res.status(500).json(error)
    }
  }
  if (method === 'GET') {
    try {
      const projects = await db
        .collection('projects')
        .find()
        .sort({ timestamp: -1 })
        .toArray()
      res.status(200).json(projects)
    } catch (error) {
      res.status(500).json(error)
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
