import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#home" className="logo">Daffiansyah</a>
        
        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
          <li><a href="#home" onClick={() => setIsOpen(false)}>Tentang</a></li>
          <li><a href="#projects" onClick={() => setIsOpen(false)}>Proyek</a></li>
          <li><a href="#contact" className="nav-cv" onClick={() => setIsOpen(false)}>Get In Touch</a></li>
        </ul>

        {/* Hamburger Menu Icon */}
        <div className={`burger ${isOpen ? 'toggle' : ''}`} onClick={() => setIsOpen(!isOpen)}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;