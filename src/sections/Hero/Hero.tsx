import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden pt-24 pb-12 bg-white">
      {/* Background Image Content */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/854ea9e4b95e40c7a435e054789bcbe5785538b6.png" 
          alt="Agriculture Background" 
          className="w-full h-full object-cover saturate-[0.85] contrast-[1.05]"
        />
        {/* Subtle white overlay exactly like screenshot */}
        <div className="absolute inset-0 bg-white/50 backdrop-blur-[1px]"></div>
      </div>

      <div className="container relative z-10 mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="max-w-5xl mx-auto"
        >
          {/* Global Tagline */}
          <div className="inline-block bg-[#e8f5ed] text-[#428a64] border border-[#d1e9db] px-8 py-2.5 rounded-full text-sm font-bold mb-12 shadow-sm">
            منصة الأمن الغذائي الدولي
          </div>

          {/* Brand Name */}
          <h1 className="font-tajawal text-3xl md:text-6xl lg:text-7xl font-extrabold text-[#1a3c2e] mb-2 tracking-tight">
            Food Bridge
          </h1>

          {/* Main Visual Headline */}
          <h2 className="text-3xl md:text-7xl lg:text-8xl font-black text-[#1a3c2e] mb-8 md:mb-12 leading-[1.1] tracking-tight">
            مستقبل تجارة الغذاء
          </h2>

          {/* Description Text */}
          <p className="text-base md:text-xl text-[#1a3c2e]/60 font-bold leading-relaxed mb-12 md:mb-16 max-w-2xl mx-auto px-4">
            منصة رقمية ربط موردي المواد الغذائية حول العالم بالسوق السعودي، وتوفر حلولاً متكاملة لتجارة المواد الغذائية بالجملة عبر نظام رقمي شفاف وآمن.
          </p>

          {/* Landing Actions - Replicating screenshot 1:1 */}
          <div className="flex flex-col sm:flex-row-reverse items-center justify-center gap-4 md:gap-6">
            {/* Primary Button (Green) */}
            <motion.a
              href="#about"
              whileHover={{ scale: 1.02, backgroundColor: '#2d5a40' }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto bg-[#366854] text-white px-8 md:px-14 py-4 md:py-5 rounded-full font-black text-lg md:text-xl flex items-center justify-center gap-3 transition-all"
            >
               <span className="leading-none flex items-center pt-1">اكتشف المنصة</span>
               <span className="text-2xl md:text-3xl leading-none flex items-center">›</span>
            </motion.a>

            {/* Secondary Button (White) */}
            <motion.a
              href="#join"
              whileHover={{ scale: 1.02, backgroundColor: '#f9fafb' }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto bg-white text-[#1a3c2e] border-2 border-[#1a3c2e]/5 px-8 md:px-14 py-4 md:py-5 rounded-full font-black text-lg md:text-xl flex items-center justify-center transition-all shadow-xl shadow-black/5"
            >
              سجل كمزود خدمة
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Decorative Blur Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/50 z-5 pointer-events-none"></div>
    </section>
  );
}
