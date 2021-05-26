import express from 'express'
import {postNews} from '../controllers/adminController'

const adminRouter = express.Router()

//route for posting news
adminRouter.post('/post',postNews)

export default adminRouter