import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const values = [
  { icon: '🍃', title: 'مقارنة الموردين', desc: 'يستطيع المشترون مقارنة عدة موردين في الوقت الفعلي مما يساهم في خفض التكاليف من خلال المنافسة على العروض' },
  { icon: '🔗', title: 'الربط المباشر بالموردين', desc: 'ربط المشترين مباشرة بالموردين المعتمدين مما يقلل الحاجة إلى الوسطاء والمفاوضات اليدوية.' },
  { icon: '⚡', title: 'تسريع إتمام الصفقات', desc: 'ضمان إتمام الصفقات بشكل أسرع بطريقة آمنة مع تسهيل مطابقة المواصفات.' },
];

export default function ValueAdded() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section className="py-20 bg-dark-green text-white text-center overflow-hidden" id="value" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          className="mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-extrabold mb-4">القيمة المضافة للسوق السعودي</h2>
          <div className="w-16 md:w-20 h-1 bg-bright-green mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              className="bg-white/5 border border-white/10 p-8 md:p-10 rounded-[24px] md:rounded-[28px] hover:bg-white/10 hover:border-bright-green hover:-translate-y-2 transition-all duration-300 flex flex-col items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="w-12 h-12 md:w-16 md:h-16 bg-bright-green/20 rounded-xl md:rounded-2xl flex items-center justify-center text-2xl md:text-3xl mb-4 md:mb-6">
                {v.icon}
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">{v.title}</h3>
              <p className="text-sm md:text-base text-white/70 leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
