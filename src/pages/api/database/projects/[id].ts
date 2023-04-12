import { connectToDatabase } from '@/lib/mongodb'
import { ObjectId } from 'mongodb'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { db } = await connectToDatabase()
  const { method, body } = req

  if (method === 'GET') {
    const { id } = req.query

    try {
      if (id) {
        const project = await db
          .collection('projects')
          .findOne({ _id: new ObjectId(String(id)) })
        res.status(200).json(project)
      }
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
