import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const navLinks = [
  { label: 'من نحن', href: '#about' },
  { label: 'السوق', href: '#market' },
  { label: 'رحلة العميل', href: '#journey' },
  { label: 'الشراكات', href: '#join' },
  { label: 'تواصل معنا', href: '#footer' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          {/* CTA - Left */}
          <div className="nav-left">
            <a href="#about" className="btn-nav">اكتشف المنصة</a>
          </div>

          {/* Links - Middle */}
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="nav-link-item">{link.label}</a>
              </li>
            ))}
          </ul>

          {/* Logo - Right */}
          <a href="/" className="nav-logo">
            <div className="logo-text-group">
                <span className="logo-top">Food</span>
                <span className="logo-bottom">BRIDGE</span>
            </div>
          </a>

          {/* Mobile Toggle */}
          <button className="mobile-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
            <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
            <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-nav"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <ul className="mobile-nav-links">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} onClick={() => setMenuOpen(false)}>{link.label}</a>
                </li>
              ))}
              <li><a href="#about" className="btn-nav" onClick={() => setMenuOpen(false)}>اكتشف المنصة</a></li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
