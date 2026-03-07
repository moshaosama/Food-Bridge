import { motion } from 'framer-motion';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-bg">
        <img src="/images/854ea9e4b95e40c7a435e054789bcbe5785538b6.png" alt="Logistics" className="hero-bg-img" />
        <div className="hero-overlay"></div>
      </div>
      
      <div className="container hero-content">
        <motion.div
          className="hero-badge-tag"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          منصة الأمن الغذائي الدولي
        </motion.div>

        <motion.h2
          className="hero-brand-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Food Bridge
        </motion.h2>

        <motion.h1
          className="hero-main-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
        >
          مستقبل تجارة الغذاء
        </motion.h1>

        <motion.p
          className="hero-subtext"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          منصة رقمية ربط موردي المواد الغذائية حول العالم بالسوق السعودي، 
          وتوفر حلولاً متكاملة لتجارة المواد الغذائية بالجملة عبر نظام رقمي شفاف وآمن.
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
        >
          <a href="#about" className="btn-hero-green">
            اكتشف المنصة <span className="arrow">‹</span>
          </a>
          <a href="#join" className="btn-hero-white">
            سجل كمزود خدمة
          </a>
        </motion.div>
      </div>
    </section>
  );
}
