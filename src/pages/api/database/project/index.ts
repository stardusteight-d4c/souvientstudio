import { Timestamp } from 'mongodb'
import { connectToDatabase } from '@/lib/mongodb'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
  ) {
  const { db } = await connectToDatabase()
  const { method, body } = req

  // if (method === 'GET') {
  //   try {
  //     const posts = await db
  //       .collection('posts')
  //       .find()
  //       .sort({ timestamp: -1 })
  //       .toArray()
  //     res.status(200).json(posts)
  //   } catch (error) {
  //     res.status(500).json(error)
  //   }
  // }
  console.log(body);
  

  if (method === 'POST') {
    try {
      const project = await db.collection('projects').insertOne({
        ...body,
        // timestamp: new Timestamp(BigInt(Date.now() / 1000)),
      })
      res.status(201).json(project)
    } catch (error) {
      res.status(500).json(error)
    }
  }
}
