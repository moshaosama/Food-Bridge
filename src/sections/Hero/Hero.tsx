import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-24 pb-12">
      {/* Background Image Content */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/854ea9e4b95e40c7a435e054789bcbe5785538b6.png" 
          alt="Agriculture Background" 
          className="w-full h-full object-cover saturate-[0.8] contrast-[1.05] brightness-[1.05]"
        />
        {/* Subtle white overlay for text readability but keeping colors vivid */}
        <div className="absolute inset-0 bg-white/40"></div>
      </div>

      <div className="container relative z-10 mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          {/* Global Tagline (منصة الأمن الغذائي الدولي) */}
          <div className="inline-block bg-bright-green/10 text-bright-green border border-bright-green/20 px-6 py-2 rounded-full text-sm font-bold mb-10">
            منصة الأمن الغذائي الدولي
          </div>

          {/* Brand Name (Food Bridge) */}
          <h1 className="font-tajawal text-5xl md:text-7xl lg:text-8xl font-black text-dark-green mb-4 tracking-tight">
            Food Bridge
          </h1>

          {/* Main Visual Headline */}
          <h2 className="text-4xl md:text-7xl lg:text-8xl font-black text-dark-green mb-10 leading-[1.15] tracking-tight">
            مستقبل تجارة الغذاء
          </h2>

          {/* Description Text */}
          <p className="text-lg md:text-xl text-dark-green/70 font-bold leading-relaxed mb-14 max-w-3xl mx-auto">
            منصة رقمية ربط موردي المواد الغذائية حول العالم بالسوق السعودي، وتوفر حلولاً متكاملة لتجارة المواد الغذائية بالجملة عبر نظام رقمي شفاف وآمن.
          </p>

          {/* Landing Actions (Buttons) */}
          <div className="flex flex-col sm:flex-row-reverse items-center justify-center gap-6">
            <motion.a
              href="#about"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto bg-dark-green text-white px-12 py-5 rounded-full font-black text-xl flex items-center justify-center gap-3 shadow-2xl shadow-dark-green/30 hover:bg-bright-green transition-all"
            >
              اكتشف المنصة <span></span>
            </motion.a>
            <motion.a
              href="#join"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto bg-white text-dark-green px-12 py-5 rounded-full font-black text-xl flex items-center justify-center shadow-xl hover:shadow-2xl transition-all"
            >
              سجل كمزود خدمة
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Decorative Blur Blobs */}
      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-bright-green/10 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-cream/30 rounded-full blur-3xl z-0"></div>
    </section>
  );
}
