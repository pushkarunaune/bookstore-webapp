import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    description: { type: String, default: '' },
    image: { type: String, default: 'https://images.unsplash.com/...&auto=format&fit=crop&w=900&q=80' },
    rating: { type: Number, default: 4.5 },
    stock: { type: Number, default: 20 }
  },
  { timestamps: true }
);

const Book = mongoose.model('Book', bookSchema);
export default Book;
