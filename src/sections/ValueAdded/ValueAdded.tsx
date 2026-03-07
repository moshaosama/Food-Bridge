import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './ValueAdded.css';

const values = [
  { icon: '🛡️', title: 'مقارنة الموردين', desc: 'يستطيع الموردون مقارنة عدة موارد في الوقت الفعلي مما يساهم في خفض التكاليف من خلال المنافسة على العروض.' },
  { icon: '🔗', title: 'الربط المباشر بالموردين', desc: 'ربط المشترين مباشرة بالموردين المعتمدين مما يقلل الحاجة إلى الوسطاء والمفاوضات اليدوية.' },
  { icon: '⚡', title: 'تسريع إتمام الصفقات', desc: 'ضمان إتمام الصفقات بشكل أسرع وأداء وبطريقة آمنة مع تسهيل مطابقة المواصفات.' },
];

export default function ValueAdded() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section className="value-added" id="services" ref={ref}>
      <div className="container">
        <motion.div
            className="va-header"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
        >
            <h2 className="va-title">القيمة المضافة للسوق السعودي</h2>
            <div className="va-underline"></div>
        </motion.div>

        <div className="va-grid">
          {values.map((val, i) => (
            <motion.div
              key={val.title}
              className="va-card"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <div className="va-icon-box">
                <span className="va-icon">{val.icon}</span>
              </div>
              <h3 className="va-card-title">{val.title}</h3>
              <p className="va-card-desc">{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
