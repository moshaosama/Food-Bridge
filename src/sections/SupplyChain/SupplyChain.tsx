import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function SupplyChain() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section className="py-20 bg-light-cream overflow-hidden" id="supply" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="rounded-[30px] md:rounded-[40px] overflow-hidden shadow-2xl shadow-black/5">
              <img
                src="/images/b0cf81aec1b18c7066075e61d845b712885b6531.jpg"
                alt="Integration with Supply Chain"
                className="w-full h-[220px] md:h-[440px] object-cover"
              />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-right"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-dark-green mb-6 leading-tight">التكامل مع سلسلة الإمداد</h2>
            <div className="w-16 h-1 bg-bright-green mb-6 md:mb-8 rounded-full ml-auto"></div>
            <p className="text-base md:text-lg text-text-gray leading-loose mb-6">
              تدمج فود بريدج حلول الخدمات اللوجستية والمدفوعات الرقمية لتسهيل إدارة عمليات التوريد وتتبع الشحنات والتعامل مع الطلبات الكبيرة بكفاءة عالية.
            </p>
            <p className="text-base md:text-lg text-text-gray leading-loose font-medium">
              تتيح المنصة للشركات الوصول إلى الموردين المحليين والدوليين مما يوسع خيارات التوريد ويضمن استقرار الإمدادات.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
