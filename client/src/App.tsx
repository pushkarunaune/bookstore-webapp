import { Routes, Route, Link, NavLink, useNavigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import CataloguePage from './pages/CataloguePage';

export type User = {
  id: string;
  name: string;
  email: string;
};

function App() {
  const navigate = useNavigate();
  const storedUser = localStorage.getItem('bookstore-user');
  const user: User | null = storedUser ? JSON.parse(storedUser) : null;

  const handleLogout = () => {
    localStorage.removeItem('bookstore-user');
    localStorage.removeItem('bookstore-token');
    navigate('/');
    window.location.reload();
  };

  return (
    <div className="app-shell">
      <header className="topbar">
        <Link to="/" className="brand">
          BookNest
        </Link>

        <nav className="nav">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/catalogue">Catalogue</NavLink>
          {!user ? (
            <>
              <NavLink to="/login">Login</NavLink>
              <NavLink to="/register">Register</NavLink>
            </>
          ) : (
            <>
              <span className="welcome-text">Hi, {user.name}</span>
              <button className="logout-btn" onClick={handleLogout}>Logout</button>
            </>
          )}
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/catalogue" element={<CataloguePage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
