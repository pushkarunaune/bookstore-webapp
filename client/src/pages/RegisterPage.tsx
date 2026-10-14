import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const API_URL = 'http://localhost:5000/api/auth/register';

function RegisterPage() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setError('');

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password })
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || 'Registration failed');
      }

      localStorage.setItem('bookstore-user', JSON.stringify(data.user));
      localStorage.setItem('bookstore-token', data.token);
      navigate('/catalogue');
      window.location.reload();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unexpected error');
    }
  };

  return (
    <div className="auth-card">
      <h2>Create Account</h2>
      {error && <div className="error-box">{error}</div>}
      <form onSubmit={handleSubmit} className="auth-form">
        <label>
          Full Name
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <label>
          Email
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <label>
          Password
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </label>
        <button type="submit" className="primary-btn full-width">Register</button>
      </form>
    </div>
  );
}

export default RegisterPage;
