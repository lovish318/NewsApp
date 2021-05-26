import { Request, Response } from 'express'
const News = require('../model')

export const getNewsById =  async (req: Request, res:Response) => {
    try {
        const id = req.params._id
        const result = await News.findById(id).exec();
        res.send(result)
    } catch (error) {
        console.log(error)
    }
}
export const getNewsByCategory =  async (req: Request, res:Response) => {
    try {
        const category = req.params.category
        const result = await News.find({ category: `${category}`}).exec()
        res.send(result)
    } catch (error) {
        console.log(error)
    }
}

