import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './About.css';

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section className="about section-padding" id="about" ref={ref}>
      <div className="container">
        <div className="about-grid">
          {/* Text - Left Side (based on latest screenshot) */}
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="about-header-group">
               <h2 className="about-title-styled">من نحن ——</h2>
            </div>
            
            <p className="about-content">
              منصة فود بريدج هي سوق جملة رقمية تجمع موردي المواد الغذائية في العالم بالسوق السعودي بأفضل الأسعار، مع سلسلة توريد متكاملة تمتد من المزرعة إلى المشتري.
            </p>
            
            <p className="about-content">
              تأسست فود بريدج في الرياض عام 2025 لتكون سوقاً إلكترونياً متخصصاً في التعاملات التجارية بين الشركات (B2B) في قطاع الأغذية، وتوفر بيئة رقمية موثوقة تتيح للمشترين مقارنة الموردين والوصول إلى أفضل العروض.
            </p>
          </motion.div>

          {/* Image - Right Side */}
          <motion.div
            className="about-image-wrap"
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="about-rounded-frame">
              <img src="/images/854ea9e4b95e40c7a435e054789bcbe5785538b6.png" alt="منصة فود بريدج" className="about-main-img" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
