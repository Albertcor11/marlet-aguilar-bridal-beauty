import React, { useState, useEffect } from 'react';
import { navLinks } from '../constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  const textShadowStyle = !isScrolled ? { textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)' } : {};

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-background/90 shadow-md backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a
          href="#"
          className={`text-2xl font-serif font-bold transition-colors ${isScrolled ? 'text-brand-text hover:text-brand-accent' : 'text-white hover:text-gray-200'}`}
          style={textShadowStyle}
          onClick={(e) => handleLinkClick(e, 'body')}
        >
          MARLET AGUILAR
        </a>
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className={`font-medium transition-colors ${isScrolled ? 'text-brand-text hover:text-brand-accent' : 'text-white hover:text-gray-200'}`}
              style={textShadowStyle}
            >
              {link.name}
            </a>
          ))}
        </nav>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`transition-colors focus:outline-none ${isScrolled ? 'text-brand-text' : 'text-white'}`}
          >
            <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-2xl`} style={textShadowStyle}></i>
          </button>
        </div>
      </div>
      {isOpen && (
        <nav className="md:hidden bg-brand-background pb-4">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={(e) => handleLinkClick(e, link.href)} className="block py-2 px-6 text-center text-brand-text hover:bg-brand-primary">
              {link.name}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;