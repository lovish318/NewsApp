import { Request, Response } from 'express'
import mongoose from 'mongoose'
import { INews } from '../interface'
const News =  require('../model')

export const postNews = async (req: Request, res: Response) => {
    try {
      // destructuring request body
      const { video, thumbnail, title, description, category } = req.body

      const data: INews = {
        _id: mongoose.Types.ObjectId().toHexString(),
        title,
        thumbnail,
        description,
        video,
        category,
      }
      const news = new News(data)
      //inserting a news in DB
      const result = await news.save()
      res.send(result)
    } catch (error) {
      console.log(error)
    }
  }
