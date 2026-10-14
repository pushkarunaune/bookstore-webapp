import { useEffect, useState } from 'react';

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

function HomePage() {
  const [featuredBooks, setFeaturedBooks] = useState<Book[]>([]);

  useEffect(() => {
    const loadBooks = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setFeaturedBooks(data.slice(0, 3));
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    loadBooks();
  }, []);

  return (
    <div>
      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">A world of stories</p>
          <h1>Discover your next favorite book.</h1>
          <p>
            Explore trending titles, bestsellers, and timeless classics designed to spark imagination.
          </p>
          <div className="cta-row">
            <a href="/catalogue" className="primary-btn">Browse Catalogue</a>
            <a href="/register" className="secondary-btn">Create Account</a>
          </div>
        </div>

        <div className="hero-card">
          <div className="mini-book">
            <span>Top Pick</span>
            <h3>Atomic Habits</h3>
            <p>James Clear</p>
          </div>
        </div>
      </section>

      <section className="feature-grid">
        <div className="feature-card">
          <h3>Curated Collections</h3>
          <p>Handpicked titles for every interest and imagination.</p>
        </div>
        <div className="feature-card">
          <h3>Fast Delivery</h3>
          <p>Quick shipping with secure checkout and easy tracking.</p>
        </div>
        <div className="feature-card">
          <h3>Verified Reviews</h3>
          <p>Community ratings and trusted recommendations.</p>
        </div>
      </section>

      <section className="popular-books">
        <div className="section-heading">
          <h2>Featured Books</h2>
          <a href="/catalogue">View all</a>
        </div>

        <div className="book-grid">
          {featuredBooks.map((book) => (
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
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default HomePage;
