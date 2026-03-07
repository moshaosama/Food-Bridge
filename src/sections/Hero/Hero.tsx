import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/854ea9e4b95e40c7a435e054789bcbe5785538b6.png" 
          alt="Agriculture Background" 
          className="w-full h-full object-cover saturate-[0.9] contrast-[1.1] brightness-[0.9]"
        />
        {/* White Radial Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.8)_0%,rgba(255,255,255,0.95)_100%)]"></div>
      </div>

      <div className="container relative z-10 mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Badge */}
          <div className="inline-block bg-bright-green/10 text-bright-green border border-bright-green/30 px-5 py-1.5 rounded-full text-sm font-bold mb-8">
            منصة الأمن الغذائي الدولي
          </div>

          {/* Brand Title */}
          <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-black text-dark-green mb-4 italic tracking-tight">
            Food Bridge
          </h1>

          {/* Main Title */}
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-dark-green mb-8 leading-[1.1] tracking-tight">
            مستقبل تجارة الغذاء
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-text-gray font-medium leading-relaxed mb-12 max-w-2xl mx-auto">
            منصة رقمية ربط موردي المواد الغذائية حول العالم بالسوق السعودي، وتوفر حلولاً متكاملة لتجارة المواد الغذائية بالجملة عبر نظام رقمي شفاف وآمن.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="#about"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto bg-dark-green text-white px-10 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 shadow-xl shadow-dark-green/20 hover:bg-bright-green transition-all"
            >
              اكتشف المنصة <span></span>
            </motion.a>
            <motion.a
              href="#join"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto bg-white text-dark-green border-2 border-dark-green/10 px-10 py-4 rounded-full font-bold text-lg flex items-center justify-center shadow-lg hover:border-dark-green transition-all"
            >
              سجل كمزود خدمة
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Hero Graphic Elements - Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-cream to-transparent z-10"></div>
    </section>
  );
}
