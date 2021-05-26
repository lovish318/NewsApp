import express from 'express'
import mongoose from 'mongoose'
import adminRouter from './routes/adminRoutes';
import newsRouter from './routes/newsRoutes';

const app = express();
app.use(express.json())

//connectiong to mongodb
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

//routes for users
app.use('/api/news',newsRouter)

//routes for admin
app.use('/api/admin',adminRouter)

app.listen(3000, () => {
    console.log(`Example app listening at http://localhost:3000`)
  })