import mongoose from 'mongoose';
import { INews } from './interface';
const { Schema } = mongoose;

export const newsSchema = new Schema<INews>({
  id:mongoose.Types.ObjectId,
  title:String,
  timestamp:{type: Date ,default: Date.now},
  description:String,
  category:String,
  thumbnail:String,
  video:String,
});