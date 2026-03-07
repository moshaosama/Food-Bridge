import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './SupplyChain.css';

export default function SupplyChain() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section className="supply-chain section-padding" id="supply" ref={ref}>
      <div className="container">
        <div className="sc-grid">
           {/* Photo - Right in Layout, Left in AR/RTL visual */}
           <motion.div
            className="sc-photo-wrap"
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="sc-photo-frame">
              <img src="/images/b0cf81aec1b18c7066075e61d845b712885b6531.jpg" alt="Integration with Supply Chain" className="sc-photo" />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            className="sc-text"
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="sc-title">التكامل مع سلسلة الإمداد</h2>
            <div className="sc-underline"></div>
            <p className="sc-desc">
              تدمج فود بريدج حلول الخدمات اللوجستية والمدفوعات الرقمية لتسهيل إدارة عمليات التوريد وتتبع الشحنات والتعامل مع الطلبات الكبيرة بكفاءة عالية.
            </p>
            <p className="sc-desc" style={{ marginTop: '15px' }}>
              تتيح المنصة للشركات الوصول إلى الموردين المحليين والدوليين مما يوسع خيارات التوريد ويضمن استقرار الإمدادات.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
