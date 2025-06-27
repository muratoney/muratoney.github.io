import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Photography from './pages/Photography';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/photography" element={<Photography />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

// Footer component
const Footer = () => (
  <footer>
    <div className="container">
      <p>&copy; 2024 Murat. All rights reserved.</p>
    </div>
  </footer>
);

export default App; 