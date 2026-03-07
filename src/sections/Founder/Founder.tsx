import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Founder.css';

export default function Founder() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section className="founder section-padding" id="founder" ref={ref}>
      <div className="container">
        <div className="founder-grid">
          {/* Text */}
          <motion.div
            className="founder-text"
            initial={{ opacity: 0, x: -80 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <span className="section-tag">المؤسس والرئيس التنفيذي</span>
            <h2 className="section-title">أشرف حلوو</h2>
            <div className="divider"></div>
            <p className="section-desc">
              قيادي أعمال متمرس بأكثر من عقدين في الخبرة العملية في قطاع الغذاء الدولي، وقطاعات تنفيذية عديدة ومتنوعة من قطاعات عالمية وإدارة المحافظ الاستثمارية والدخول في شراكات وأعمال هيئة التجارة.
            </p>
            <p className="section-desc" style={{ marginTop: '1rem' }}>
              حامل شهادة البكالوريوس في الاقتصاد وثلاث درجات الأربعة من كاليفورنيا والتكنولوجيا. حاصل كذلك على درجة الماجستير في التسويق من جامعة الأميرة نورة الرياضية، ودرجة الماجستير في علوم المعلومات.
            </p>

            <div className="founder-stats">
              {[
                { num: '+20', label: 'سنة خبرة' },
                { num: '+100', label: 'شراكة دولية' },
                { num: '3', label: 'درجات ماجستير' },
              ].map((s) => (
                <motion.div
                  key={s.label}
                  className="founder-stat"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <span className="fstat-num">{s.num}</span>
                  <span className="fstat-label">{s.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Card */}
          <motion.div
            className="founder-card-wrap"
            initial={{ opacity: 0, x: 80 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="founder-card">
              <div className="founder-avatar">
                <div className="avatar-emoji">👔</div>
              </div>
              <div className="founder-info">
                <div className="founder-name">أشرف حلوو</div>
                <div className="founder-role">المؤسس والرئيس التنفيذي</div>
                <div className="founder-company">Food Bridge</div>
              </div>
              <div className="founder-quote">
                "نهدف إلى تحويل سوق الغذاء الدولي إلى منصة عالمية لتجارة الغذاء والمزارعين والمستهلكين مع عدة مناطق مجاورة"
              </div>
              <div className="founder-social">
                {['💼', '🌐', '📧'].map((icon, i) => (
                  <motion.button
                    key={i}
                    className="social-btn"
                    whileHover={{ scale: 1.15, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {icon}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
