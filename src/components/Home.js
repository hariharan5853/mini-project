import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <h1>Welcome to HR Bank</h1>
      <p>Your money, safe and secure!</p>

      <Link to="/create">
        <button className="main-btn">Create Account</button>
      </Link>
    </div>
  );
}

export default Home;