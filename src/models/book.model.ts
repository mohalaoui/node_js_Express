import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate";
import { v4 as uuidv4 } from "uuid";

let bookSchema = new mongoose.Schema({
  _id: { type: String, default: uuidv4 },
  title: { type: String, required: true },
  author: { type: String, required: true },
  price: { type: Number, required: true },
  publishingDate: { type: Date, required: true, default: new Date() },
  available: { type: Boolean, required: true, default: true },
  quantity: { type: Number, required: true, default: 0 },
});

bookSchema.plugin(mongoosePaginate);

const Book = mongoose.model("Book", bookSchema);

export default Book;
