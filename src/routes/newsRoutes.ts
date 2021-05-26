import express from 'express'
import { getNewsByCategory, getNewsById } from '../controllers/newsController'

const newsRouter = express.Router()

//route for getting news by id
newsRouter.get('/:_id',getNewsById)

//route for getting news by category
newsRouter.get('/:category',getNewsByCategory)

export default newsRouter