import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Blog from './pages/Blog';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#000066] flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;