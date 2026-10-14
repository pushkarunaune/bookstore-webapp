import express from 'express';
import Book from '../models/Book.js';

const router = express.Router();

const initialBooks = [
  {
    title: 'Atomic Habits',
    author: 'James Clear',
    price: 499,
    category: 'Self Growth',
    description: 'A practical guide to building good habits and breaking bad ones.',
    image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=900&q=80',
    rating: 4.8,
    stock: 25
  },
  {
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    price: 399,
    category: 'Fiction',
    description: 'A timeless tale of following dreams and discovering purpose.',
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=900&q=80',
    rating: 4.7,
    stock: 18
  },
  {
    title: 'Deep Work',
    author: 'Cal Newport',
    price: 599,
    category: 'Productivity',
    description: 'Learn how to focus intensely and produce meaningful work.',
    image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=900&q=80',
    rating: 4.6,
    stock: 14
  },
  {
    title: 'The Pragmatic Programmer',
    author: 'Andrew Hunt',
    price: 699,
    category: 'Technology',
    description: 'A classic programming book for developers who want durable skills.',
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=900&q=80',
    rating: 4.9,
    stock: 11
  },
  {
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    price: 329,
    category: 'Classic',
    description: 'A witty and romantic novel about love, reputation, and social class.',
    image: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=900&q=80',
    rating: 4.5,
    stock: 21
  },
  {
    title: 'Think and Grow Rich',
    author: 'Napoleon Hill',
    price: 449,
    category: 'Business',
    description: 'A motivational book focused on wealth mindset, discipline, and success.',
    image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=900&q=80',
    rating: 4.4,
    stock: 16
  }
];

router.get('/', async (req, res) => {
  try {
    let books = await Book.find();

    if (!books.length) {
      books = await Book.insertMany(initialBooks);
    }

    res.json(books);
  } catch (error) {
    res.status(500).json({ message: error.message || 'Failed to fetch books.' });
  }
});

router.post('/', async (req, res) => {
  try {
    const newBook = await Book.create(req.body);
    res.status(201).json(newBook);
  } catch (error) {
    res.status(400).json({ message: error.message || 'Failed to add book.' });
  }
});

export default router;
