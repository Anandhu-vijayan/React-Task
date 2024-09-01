import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <header>
        <div className="container">
          <div className="logo">
            <img src="logo.png" alt="Logo" />
          </div>
          <div className="user-profile">
            <img src="user-profile.jpg" alt="User Profile" />
          </div>
        </div>
      </header>

      <div className="container">
        <aside className="sidebar">
          <nav>
            <a href="#">Dashboard</a>
            <a href="#">Create New List</a>
          </nav>
        </aside>

        <main>
          {/* Main content goes here */}
        </main>
      </div>

      <footer>
        &copy; 2024 Admin Dashboard
      </footer>
    </div>
  );
}

export default App;
