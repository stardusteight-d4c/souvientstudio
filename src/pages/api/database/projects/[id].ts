import { connectToDatabase } from '@/lib/mongodb'
import { uploadImageToFirebase } from '@/utils/upload-image-to-firebase'
import { ObjectId } from 'mongodb'
import type { NextApiRequest, NextApiResponse } from 'next'
import ShortUniqueId from 'short-unique-id'
import { IProjectBodyRequest } from '@/@interfaces/IProjectBodyRequest'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { db } = await connectToDatabase()
  const {
    method,
    body,
    query,
  }: {
    method?: string | undefined
    body: IProjectBodyRequest
    query?: { id?: string | undefined }
  } = req
  const id = query.id

  if (method === 'GET') {
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

  if (method === 'PUT') {
    try {
      if (id) {
        const coverImage = body.coverImageFile.base64
        let publicImageURL
        if (!coverImage.includes('https')) {
          const base64Image = coverImage
          const uid = new ShortUniqueId({ length: 10 })
          const fileNameFormatted = body.coverImageFile.name
            .split(' ')
            .join('_')
          const fileName = `${uid()}${fileNameFormatted}`
          publicImageURL = await uploadImageToFirebase(base64Image, fileName)
        } else {
          publicImageURL = coverImage
        }
        await db.collection('projects').updateOne(
          { _id: new ObjectId(String(id)) },
          {
            $set: {
              type: body.type,
              coverImage: publicImageURL,
              title: body.title,
              subtitle: body.subtitle,
              bodyEN: body.bodyEN,
              bodyPTBR: body.bodyPTBR,
              date: new Date(),
            },
          }
        )
        res.status(200).json({
          status: true,
          message: 'The project article has been updated.',
        })
      }
    } catch (error) {
      res.status(500).json(error)
    }
  }

  if (method === 'DELETE') {
    try {
      if (id) {
        try {
          const result = await db
            .collection('projects')
            .deleteOne({ _id: new ObjectId(String(id)) })
          if (result.deletedCount === 1) {
            res.status(204).json({})
          } else {
            res.status(404).json({ message: 'Document not found' })
          }
        } catch (error) {
          res.status(500).json({ message: 'Error deleting document', error })
        }
        res.status(200).json({
          status: true,
          message: 'The project article has been deleted.',
        })
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
