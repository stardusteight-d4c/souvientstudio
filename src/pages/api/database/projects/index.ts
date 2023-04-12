import { connectToDatabase } from '@/lib/mongodb'
import type { NextApiRequest, NextApiResponse } from 'next'
import ShortUniqueId from 'short-unique-id'
import { storage } from '@/lib/firebase'
import { ref, uploadString } from 'firebase/storage'

interface ProjectArticle {
  type: string
  title: string
  subtitle: string
  coverImageFile: {
    type: string
    name: string
    base64: string
  }
  body: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { db } = await connectToDatabase()
  const {
    method,
    body,
  }: { method?: string | undefined; body: ProjectArticle } = req

  if (method === 'POST') {
    try {
      const base64Image = body.coverImageFile.base64
      const uid = new ShortUniqueId({ length: 10 })
      const fileNameFormatted = body.coverImageFile.name.split(' ').join('_')
      const fileName = `${uid()}${fileNameFormatted}`

      async function uploadImageToFirebase(image: string, fileName: string) {
        const storageRef = ref(storage, `images/${fileName}`)
        uploadString(storageRef, image, 'data_url').then(() => {
          console.log('Uploaded a base64url string!')
        })
        const publicImageURL = `https://firebasestorage.googleapis.com/v0/b/souvientstudio.appspot.com/o/images%2F${fileName}?alt=media`
        return publicImageURL
      }

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
