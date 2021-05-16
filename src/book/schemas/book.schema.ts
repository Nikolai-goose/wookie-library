import * as mongoose from 'mongoose';

export const BookSchema = new mongoose.Schema({
  title: String,
  description: String,
  author: String,
  price: Number,
  body: String,
  date_posted: String,
});
