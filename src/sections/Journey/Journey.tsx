import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Journey.css';

const steps = [
  { num: '3', title: 'اعتماد البيع', desc: 'يتم اختيار العرض الأنسب وإتمام البيع بالسعر المفضل.' },
  { num: '2', title: 'طلبات الشراء', desc: 'تتم تقديم طلبات الشراء بنظام المزايدة خلال 24 ساعة.' },
  { num: '1', title: 'عرض المنتجات', desc: 'يتم عرض المنتجات بالجملة مع تحديد الكميات والوزن والنوع.' },
];

const partnershipOpportunities = [
  { title: 'فرص الشراكة الاستراتيجية', desc: 'الانضمام إلى منظومة فود بريدج للمساهمة في تطوير الأمن الغذائي.', icon: '🤝' },
  { title: 'حلول مخصصة', desc: 'تقديم حلول مخصصة لمختلف الأطراف في سلسلة القيمة الغذائية.', icon: '🏢' },
  { icon: '📉', title: 'أثر قابل للقياس', desc: 'نعمل على تقارير وتحليلات لقياس أثر التوريد في دعم الأمن الغذائي.' },
  { icon: '🚀', title: 'دعم التطبيق والتنفيذ', desc: 'يوفر فريق فود بريدج الدعم الكامل والتدريب والمساعدة التقنية.' }
];

export default function Journey() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section className="journey-partnership section-padding" id="journey" ref={ref}>
      <div className="container">
        {/* Journey Section */}
        <motion.div
          className="text-center mb-60"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">رحلة العميل</h2>
          <p className="section-desc mx-auto">خطوات بسيطة وسريعة لإتمام الصفقات بنجاح</p>
        </motion.div>

        <div className="journey-grid">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              className="journey-item"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <div className="journey-num">{step.num}</div>
              <h3 className="journey-title">{step.title}</h3>
              <p className="journey-desc">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Partnership Section */}
        <motion.div
            className="text-center mt-100 mb-60"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
        >
            <h2 className="section-title">فرص مقدمي الخدمات</h2>
        </motion.div>

        <div className="partnership-grid">
          {partnershipOpportunities.map((op, i) => (
            <motion.div
              key={op.title}
              className="partnership-card"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + (i * 0.1) }}
            >
               <div className="p-icon-box">{op.icon}</div>
               <div className="p-content">
                  <h3 className="p-title">{op.title}</h3>
                  <p className="p-desc">{op.desc}</p>
               </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
