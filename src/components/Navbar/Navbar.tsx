import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* CTA - Left */}
          <div className="hidden md:block">
            <a 
              href="#about" 
              className="bg-dark-green text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-bright-green transition-colors"
            >
              اكتشف المنصة
            </a>
          </div>

          {/* Links - Middle */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a 
                  href={link.href} 
                  className={`text-sm font-medium transition-colors hover:text-bright-green ${
                      scrolled ? 'text-dark-green' : 'text-dark-green/80'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Logo - Right */}
          <a href="/" className="flex flex-col items-end group">
            <span className="text-xl md:text-2xl font-black text-dark-green leading-none tracking-tight">Food</span>
            <span className="text-[10px] md:text-xs font-bold text-bright-green tracking-[0.2em] -mt-1 uppercase">Bridge</span>
          </a>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden flex flex-col gap-1.5 z-50 relative"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className={`w-6 h-0.5 bg-dark-green transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-dark-green transition-all ${menuOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-dark-green transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 bg-white z-40 md:hidden flex flex-col items-center justify-center gap-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <ul className="flex flex-col items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href} 
                    className="text-2xl font-bold text-dark-green hover:text-bright-green"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="mt-4">
                <a 
                  href="#about" 
                  className="bg-dark-green text-white px-8 py-3 rounded-full font-bold text-lg"
                  onClick={() => setMenuOpen(false)}
                >
                  اكتشف المنصة
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
