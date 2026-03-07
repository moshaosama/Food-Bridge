import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const values = [
  { icon: '🚀', title: 'سرعة التنفيذ', desc: 'نضمن لك وصول المنتجات في أسرع وقت ممكن وبأعلى معايير الجودة العالمية.' },
  { icon: '🛡️', title: 'أمان التعاملات', desc: 'نوفر بيئة آمنة وموثوقة لجميع التعاملات المالية والتجارية بين المورد والمشتري.' },
  { icon: '🌍', title: 'وصول عالمي', desc: 'ربط مباشر مع كبار الموردين في مختلف دول العالم لضمان تنوع المنتجات واستدامة الإمداد.' },
];

export default function ValueAdded() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section className="py-20 bg-dark-green text-white text-center" id="value" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl lg:text-5xl font-extrabold mb-4">ماذا نقدم؟</h2>
          <div className="w-20 h-1 bg-bright-green mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              className="bg-white/5 border border-white/10 p-10 rounded-[28px] hover:bg-white/10 hover:border-bright-green hover:-translate-y-2 transition-all duration-300 flex flex-col items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="w-16 h-16 bg-bright-green/20 rounded-2xl flex items-center justify-center text-3xl mb-6">
                {v.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{v.title}</h3>
              <p className="text-white/70 leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
