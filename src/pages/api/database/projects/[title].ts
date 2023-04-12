import { connectToDatabase } from '@/lib/mongodb'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { db } = await connectToDatabase()
  const { method, body } = req

  if (method === 'GET') {
    const { title } = req.query
    
    try {
      const projects = await db
        .collection('projects')
        .find({ title: title })
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
