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

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [menuOpen]);

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-dark-green shadow-lg py-2' : 'bg-dark-green/90 backdrop-blur-sm py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* CTA - Left (اكتشف المنصة) */}
          <div className="hidden lg:block">
            <a 
              href="#about" 
              className="bg-bright-green/20 text-white border border-bright-green/30 px-6 py-2 rounded-full font-bold text-sm hover:bg-bright-green transition-all shadow-lg shadow-bright-green/10"
            >
              اكتشف المنصة
            </a>
          </div>

          {/* Links - Middle */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a 
                  href={link.href} 
                  className="text-white text-sm font-medium transition-colors hover:text-bright-green"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Logo - Right */}
          <a href="/" className="flex flex-col items-end group">
            <span className="text-2xl md:text-3xl font-black text-white leading-none tracking-tight">Food</span>
            <span className="text-[10px] md:text-xs font-bold text-white tracking-[0.2em] -mt-1 uppercase opacity-90">Bridge</span>
          </a>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden flex flex-col gap-1.5"
            onClick={() => setMenuOpen(true)}
          >
            <div className="w-6 h-0.5 bg-white"></div>
            <div className="w-6 h-0.5 bg-white"></div>
            <div className="w-6 h-0.5 bg-white"></div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu - Replicating screenshot 1:1 */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 bg-dark-green z-[100] lg:hidden flex flex-col pt-6 px-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Header in Menu */}
            <div className="flex justify-between items-center mb-20">
               {/* Close Icon (Left) */}
               <button 
                 onClick={() => setMenuOpen(false)}
                 className="text-white text-4xl font-light hover:rotate-90 transition-transform duration-300"
               >
                 ✕
               </button>

               {/* Logo (Right) */}
               <div className="flex flex-col items-end">
                  <span className="text-2xl font-black text-white leading-none">Food</span>
                  <span className="text-[10px] font-bold text-white tracking-widest uppercase -mt-0.5">Bridge</span>
               </div>
            </div>

            {/* Links Centered */}
            <ul className="flex flex-col items-center gap-10 flex-grow">
              {navLinks.map((link, i) => (
                <motion.li 
                  key={link.href}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <a 
                    href={link.href} 
                    className="text-3xl font-bold text-white hover:text-bright-green transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
              
              {/* CTA Button in Menu */}
              <motion.li 
                className="mt-10"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
              >
                <a 
                  href="#about" 
                  className="bg-[#5dbb6a] text-white px-16 py-4 rounded-full font-black text-xl shadow-2xl shadow-bright-green/20"
                  onClick={() => setMenuOpen(false)}
                >
                  اكتشف المنصة
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
