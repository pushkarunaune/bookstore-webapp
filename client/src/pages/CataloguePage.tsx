import { useEffect, useMemo, useState } from 'react';

const API_URL = 'http://localhost:5000/api/books';

type Book = {
  _id: string;
  title: string;
  author: string;
  price: number;
  category: string;
  description: string;
  image: string;
  rating: number;
};

function CataloguePage() {
  const [books, setBooks] = useState<Book[]>([]);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setBooks(data);
      } catch (error) {
        console.error('Failed to load books:', error);
      }
    };

    fetchBooks();
  }, []);

  const categories = useMemo(() => ['All', ...new Set(books.map((book) => book.category))], [books]);

  const filteredBooks = books.filter((book) => {
    const matchesSearch = `${book.title} ${book.author}`.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === 'All' || book.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="catalogue-section">
      <div className="catalogue-header">
        <div>
          <p className="eyebrow">Explore all titles</p>
          <h2>Book Catalogue</h2>
        </div>
        <div className="filters">
          <input
            type="text"
            placeholder="Search by title or author"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            {categories.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="book-grid catalogue-grid">
        {filteredBooks.map((book) => (
          <div key={book._id} className="book-card">
            <img src={book.image} alt={book.title} />
            <div className="book-content">
              <span className="category-tag">{book.category}</span>
              <h3>{book.title}</h3>
              <p>{book.author}</p>
              <div className="book-meta">
                <strong>₹{book.price}</strong>
                <span>⭐ {book.rating}</span>
              </div>
              <p className="book-description">{book.description}</p>
              <button className="primary-btn add-btn">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CataloguePage;
