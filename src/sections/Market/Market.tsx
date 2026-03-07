import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Market() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section className="py-20 bg-light-cream" id="market" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Card - Left Side (in RTL visual order) */}
          <motion.div
            className="bg-white rounded-[32px] p-8 md:p-10 shadow-2xl shadow-black/5 border border-black/[0.03]"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-between items-center mb-10">
                <span className="bg-bright-green/10 text-bright-green px-4 py-1.5 rounded-full text-xs font-bold border border-bright-green/20">حجم السوق</span>
                <span className="text-2xl">📊</span>
            </div>
            
            <div className="mb-8">
                <div className="flex justify-between items-end mb-3">
                    <span className="text-dark-green font-bold">سوق جملة السعودية</span>
                    <span className="text-bright-green font-black text-xl">70 مليار ر.س</span>
                </div>
                <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div 
                        className="h-full bg-linear-to-r from-bright-green to-accent-green rounded-full" 
                        initial={{ width: 0 }}
                        animate={inView ? { width: '85%' } : {}}
                        transition={{ duration: 1, delay: 0.5 }}
                    />
                </div>
            </div>

            <div className="mb-8">
                <div className="flex justify-between items-end mb-3">
                    <span className="text-dark-green font-bold">الخضروات والفواكه</span>
                    <span className="text-bright-green font-black text-xl">22 مليار ر.س</span>
                </div>
                <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div 
                        className="h-full bg-linear-to-r from-bright-green to-accent-green rounded-full" 
                        initial={{ width: 0 }}
                        animate={inView ? { width: '65%' } : {}}
                        transition={{ duration: 1, delay: 0.7 }}
                    />
                </div>
            </div>

            <div>
                <div className="flex justify-between items-end mb-3">
                    <span className="text-dark-green font-bold">فواكه العالم</span>
                    <span className="text-bright-green font-black text-xl">فائض سنوي</span>
                </div>
                <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div 
                        className="h-full bg-linear-to-r from-bright-green to-accent-green rounded-full" 
                        initial={{ width: 0 }}
                        animate={inView ? { width: '92%' } : {}}
                        transition={{ duration: 1, delay: 0.9 }}
                    />
                </div>
            </div>
          </motion.div>

          {/* Text - Right Side */}
          <motion.div
            className="text-right"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl lg:text-5xl font-black text-dark-green mb-6 leading-tight">مؤشرات المزايدات وشراء المواد الغذائية بالجملة</h2>
            <div className="w-20 h-1.5 bg-bright-green mb-8 rounded-full ml-auto"></div>
            <p className="text-lg text-text-gray leading-loose mb-6">
              تصل حجم تجارة المواد الغذائية بالجملة في المملكة العربية السعودية إلى أكثر من 70 مليار ريال سنوياً، مع نمو مستدام يتطلب حلولاً رقمية متطورة.
            </p>
            <p className="text-lg text-text-gray leading-loose mb-10">
              توفر منصة فود بريدج تقارير دقيقة ومؤشرات حية لحركة السوق، مما يساعد الموردين والمشترين على اتخاذ قرارات مبنية على بيانات واقعية.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-end">
               <div className="flex items-center gap-3 justify-end">
                  <span className="w-12 h-12 rounded-2xl bg-bright-green/10 flex items-center justify-center text-xl">🛡️</span>
                  <span className="font-bold text-dark-green text-sm">توقعات الطلب بدقة %95</span>
               </div>
               <div className="flex items-center gap-3 justify-end">
                  <span className="w-12 h-12 rounded-2xl bg-bright-green/10 flex items-center justify-center text-xl">🚀</span>
                  <span className="font-bold text-dark-green text-sm">توسع مستدام في السوق</span>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
