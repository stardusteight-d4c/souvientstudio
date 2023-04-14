import { connectToDatabase } from '@/lib/mongodb'
import type { NextApiRequest, NextApiResponse } from 'next'
import ShortUniqueId from 'short-unique-id'
import { uploadImageToFirebase } from '@/utils/upload-image-to-firebase'
import { IProjectBodyRequest } from '@/@interfaces/IProjectBodyRequest'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { db } = await connectToDatabase()
  const {
    method,
    body,
    url,
  }: {
    method?: string | undefined
    body: IProjectBodyRequest
    url?: string | undefined
  } = req

  if (method === 'POST') {
    try {
      const base64Image = body.coverImageFile.base64
      const uid = new ShortUniqueId({ length: 10 })
      const fileNameFormatted = body.coverImageFile.name.split(' ').join('_')
      const fileName = `${uid()}${fileNameFormatted}`

      const publicImageURL = await uploadImageToFirebase(base64Image, fileName)
      await db.collection('projects').insertOne({
        type: body.type,
        coverImage: publicImageURL,
        title: body.title,
        subtitle: body.subtitle,
        body: body.body,
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
    if (url && url.includes('title=')) {
      const title = url.split('=')[1]
      try {
        const projects = await db
          .collection('projects')
          .find({ title: { $regex: title, $options: 'i' } })
          .sort({ timestamp: -1 })
          .toArray()
        res.status(200).json(projects)
      } catch (error) {
        res.status(500).json(error)
      }
    } else {
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
}

export const config = {
  api: {
    responseLimit: '5mb',
    bodyParser: {
      sizeLimit: '5mb',
    },
  },
}
