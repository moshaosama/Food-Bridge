import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Auction.css';

const items = [
  { name: 'مزارع الوادي', type: 'تمور ملكي', price: '26,500 ر.س' },
  { name: 'شركة النخيل الزراعية', type: 'زيت زيتون بكر', price: '25,000 ر.س' },
  { name: 'مورد التمور الأهلية', type: 'تمور خلاص', price: '24,300 ر.س' },
];

export default function Auction() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section className="auction section-padding" id="auction" ref={ref}>
      <div className="container">
        <div className="auction-layout">
          {/* Card Side */}
          <motion.div
            className="auction-card"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="auction-card-header">
                <span className="live-dot">●</span>
                <span>مزاد مباشر تمر خلاص</span>
                <span className="live-tag">ينتهي قريباً</span>
            </div>
            <div className="auction-list">
              {items.map((item, i) => (
                <div key={i} className="auction-item">
                    <div className="item-name-box">
                        <div className="item-name">{item.name}</div>
                        <div className="item-type">{item.type}</div>
                    </div>
                    <div className="item-price">{item.price}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            className="auction-text"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="auction-title">مركز المزايدات وشراء المواد الغذائية بالجملة</h2>
            <div className="auction-underline"></div>
            <p className="auction-desc">
              توفر منصة فود بريدج نظام مزايدات رقمي يتيح للمشترين طلب المنتجات بالجملة بينما يقدم الموردون عروض الأسعار خلال فترة محددة.
            </p>
            <p className="auction-desc" style={{ marginTop: '15px' }}>
              يساعد هذا النظام على تحقيق الشفافية والمنافسة العادلة وتخفيض التكاليف للمشترين.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
