import { useInView } from 'react-intersection-observer';
import './Footer.css';

export default function Footer() {
  const [ref,] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <footer className="footer" id="footer" ref={ref}>
      <div className="container footer-container">
        <div className="footer-grid-layout">
          {/* Main Column */}
          <div className="footer-main">
            <div className="footer-brand-logo">
              <span className="f-logo-top">Food</span>
              <span className="f-logo-bottom">BRIDGE</span>
            </div>
            <p className="footer-text">
               نحن فود بريدج، المنصة الرائدة التي تربط الموردين العالميين بالسوق السعودي، نهدف إلى تعزيز الأمن الغذائي من خلال حلول تقنية متكاملة.
            </p>
            <div className="footer-social-box">
              <a href="#" className="social-icon">𝕏</a>
              <a href="#" className="social-icon">in</a>
              <a href="#" className="social-icon">f</a>
            </div>
          </div>

          {/* Links Column 1 */}
          <div className="footer-col">
            <h4 className="footer-head">روابط سريعة</h4>
            <ul className="footer-list">
              <li><a href="#about">من نحن</a></li>
              <li><a href="#market">السوق</a></li>
              <li><a href="#journey">رحلة العميل</a></li>
              <li><a href="#join">الشراكات</a></li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div className="footer-col">
            <h4 className="footer-head">التواصل</h4>
            <ul className="footer-list">
              <li>info@foodbridge.sa</li>
              <li>+966 50 000 0000</li>
              <li>الرياض، المملكة العربية السعودية</li>
            </ul>
          </div>
        </div>

        <div className="footer-copyright">
          <p>© 2025 فود بريدج. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
}
