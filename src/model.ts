import mongoose from 'mongoose'
import { INews } from './interface';
import {newsSchema} from './schema'

module.exports = mongoose.model<INews>('News', newsSchema);