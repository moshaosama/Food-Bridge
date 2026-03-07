import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Market.css';

export default function Market() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section className="market section-padding" id="market" ref={ref}>
      <div className="container">
        <div className="market-grid">
          {/* Card - Left Side (in RTL visual order) */}
          <motion.div
            className="market-stats-card"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="m-card-header">
                <span className="m-card-tag">حجم السوق</span>
                <span className="m-card-icon">📊</span>
            </div>
            
            <div className="m-stat-item">
                <div className="m-stat-info">
                    <span className="m-stat-label">سوق جملة السعودية</span>
                    <span className="m-stat-val">70 مليار ر.س</span>
                </div>
                <div className="m-progress-bg">
                    <motion.div 
                        className="m-progress-fill" 
                        initial={{ width: 0 }}
                        animate={inView ? { width: '85%' } : {}}
                        transition={{ duration: 1, delay: 0.5 }}
                    />
                </div>
            </div>

            <div className="m-stat-item">
                <div className="m-stat-info">
                    <span className="m-stat-label">الخضروات والفواكه</span>
                    <span className="m-stat-val">22 مليار ر.س</span>
                </div>
                <div className="m-progress-bg">
                    <motion.div 
                        className="m-progress-fill" 
                        initial={{ width: 0 }}
                        animate={inView ? { width: '65%' } : {}}
                        transition={{ duration: 1, delay: 0.7 }}
                    />
                </div>
            </div>

            <div className="m-stat-item">
                <div className="m-stat-info">
                    <span className="m-stat-label">فواكه العالم</span>
                    <span className="m-stat-val">فائض سنوي</span>
                </div>
                <div className="m-progress-bg">
                    <motion.div 
                        className="m-progress-fill" 
                        initial={{ width: 0 }}
                        animate={inView ? { width: '92%' } : {}}
                        transition={{ duration: 1, delay: 0.9 }}
                    />
                </div>
            </div>
          </motion.div>

          {/* Text - Right Side */}
          <motion.div
            className="market-text"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="market-title">مؤشرات المزايدات وشراء المواد الغذائية بالجملة</h2>
            <div className="market-underline"></div>
            <p className="market-desc">
              تصل حجم تجارة المواد الغذائية بالجملة في المملكة العربية السعودية إلى أكثر من 70 مليار ريال سنوياً، مع نمو مستدام يتطلب حلولاً رقمية متطورة.
            </p>
            <p className="market-desc">
              توفر منصة فود بريدج تقارير دقيقة ومؤشرات حية لحركة السوق، مما يساعد الموردين والمشترين على اتخاذ قرارات مبنية على بيانات واقعية.
            </p>
            <div className="market-features">
               <div className="m-feature">
                  <span className="mf-icon">🛡️</span>
                  <span>توقعات الطلب بدقة %95</span>
               </div>
               <div className="m-feature">
                  <span className="mf-icon">🚀</span>
                  <span>توسع مستدام في السوق</span>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
