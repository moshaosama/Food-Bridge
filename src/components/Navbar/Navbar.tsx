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
        className={`fixed inset-x-0 top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-[#1a3c2e] shadow-lg py-3' : 'bg-[#1a3c2e] py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center relative">
          
          {/* Logo - First in DOM = Right Side in RTL */}
          <a href="/" className="flex flex-col items-end group">
            <span className="text-2xl md:text-3xl font-black text-white leading-none tracking-tight mb-1">Food</span>
            <span className="text-[10px] md:text-xs font-bold text-white tracking-[0.2em] uppercase opacity-90 leading-none">Bridge</span>
          </a>

          {/* Links - Middle (Visible only on lg) */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a 
                  href={link.href} 
                  className="text-white text-sm font-medium transition-colors hover:text-[#5dbb6a]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA - Third in DOM (Visible only on lg) */}
          <div className="hidden lg:block">
            <a 
              href="#about" 
              className="bg-[#5dbb6a]/20 text-white border border-[#5dbb6a]/30 px-6 py-2 rounded-full font-bold text-sm hover:bg-[#5dbb6a] transition-all shadow-lg shadow-[#5dbb6a]/10"
            >
              اكتشف المنصة
            </a>
          </div>

          {/* Mobile Toggle - Last in DOM = Left Side in RTL */}
          <button 
            className="lg:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(true)}
            aria-label="Open Menu"
          >
            <div className="w-6 h-0.5 bg-white"></div>
            <div className="w-6 h-0.5 bg-white"></div>
            <div className="w-6 h-0.5 bg-white"></div>
          </button>

        </div>
      </nav>

      {/* Mobile Menu - Exactly matching screenshot design */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 bg-[#1a3c2e] z-[100] lg:hidden flex flex-col pt-6 px-6 overflow-y-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Header in Menu */}
            <div className="flex justify-between items-center mb-16 mt-2">
               
               {/* Logo (First in DOM = Right in RTL) */}
               <div className="flex flex-col items-end">
                  <span className="text-2xl font-black text-white leading-none mb-1">Food</span>
                  <span className="text-[10px] font-bold text-white tracking-widest uppercase opacity-90 leading-none">Bridge</span>
               </div>

               {/* Close Icon (Last in DOM = Left in RTL) */}
               <button 
                 onClick={() => setMenuOpen(false)}
                 className="text-white text-3xl font-light hover:rotate-90 transition-transform duration-300 p-2"
               >
                 ✕
               </button>

            </div>

            {/* Links Centered */}
            <ul className="flex flex-col items-center gap-8 flex-grow">
              {navLinks.map((link, i) => (
                <motion.li 
                  key={link.href}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <a 
                    href={link.href} 
                    className="text-2xl font-bold text-white hover:text-[#5dbb6a] transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
              
              {/* CTA Button in Menu */}
              <motion.li 
                className="mt-8 w-full max-w-sm px-4 pb-12"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
              >
                <a 
                  href="#about" 
                  className="bg-[#5dbb6a] text-white w-full py-4 rounded-full font-black text-xl shadow-2xl shadow-[#5dbb6a]/20 flex justify-center items-center"
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
