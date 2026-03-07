import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './JoinNetwork.css';

const steps = [
  { 
    icon: '✈️', 
    title: 'التسجيل كمكتب توريد', 
    desc: 'سجل الان في المنصة واطلب عرض السعر واحصل على المزارعين والموردين في ثانية واحدة.',
    btn: 'ابدء التسجيل'
  },
  { 
    icon: '🏢', 
    title: 'التسجيل كمورد', 
    desc: 'عرض منتجاتك بأعلى الجودة والكميات والوصول إلى الموردين بين عدة موانئ.',
    btn: 'ابدء التسجيل'
  },
  { 
    icon: '🚚', 
    title: 'التسجيل كنقل', 
    desc: 'سجل لادارة الصفقات وعرض الطلبات وتحقق من جودة المنتجات والخدمات والموردين.',
    btn: 'ابدء التسجيل'
  },
];

export default function JoinNetwork() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section className="join-network" id="join" ref={ref}>
      <div className="container">
        <motion.div
           className="join-header"
           initial={{ opacity: 0, y: 30 }}
           animate={inView ? { opacity: 1, y: 0 } : {}}
           transition={{ duration: 0.6 }}
        >
            <h2 className="join-title">انضم إلى شبكة فود بريدج</h2>
            <p className="join-subtitle">كن جزءاً من المنظومة التي تقود مستقبل تجارة الغذاء بالسوق السعودي</p>
        </motion.div>

        <div className="join-grid">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              className="join-card"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <div className="join-icon-box">
                <span className="join-icon">{step.icon}</span>
              </div>
              <h3 className="join-card-title">{step.title}</h3>
              <p className="join-card-desc">{step.desc}</p>
              <button className="join-btn">{step.btn} <span className="btn-arrow">←</span></button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
