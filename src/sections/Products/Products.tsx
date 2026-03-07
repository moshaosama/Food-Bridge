import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Products.css';

const products = [
  { 
    image: '/images/c57064ce7a15a5f18ff31286ebe2396b15939057 (1).jpg', 
    name: 'البن الخولاني', 
    desc: 'تعمل المملكة على تطوير زراعة البن الخولاني ضمن برامج دعم المزارعين وزيادة الإنتاج المحلي.' 
  },
  { 
    image: '/images/d7db49887ab340323e155ff83c622785901de687.jpg', 
    name: 'الزيتون', 
    desc: 'تضم المملكة أكبر مزرعة زيتون حديثة في العالم في منطقة الجوف مع نمو كبير في الإنتاج خلال السنوات الماضية.' 
  },
  { 
    image: '/images/8e4a6a8ac91be2f005836905a16ddb2d519e3e37 (1).jpg', 
    name: 'التمور', 
    desc: 'تنتج المملكة أكثر من 1.9 مليون طن من التمور سنوياً مع أكثر من 30 مليون نخلة.' 
  },
];

export default function Products() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section className="products section-padding" id="products" ref={ref}>
      <div className="container">
        <motion.div
          className="text-center mb-60"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="products-badge">الإنتائج المحلي</div>
          <h2 className="products-title">أهم المحاصيل السعودية</h2>
          <div className="products-underline"></div>
        </motion.div>

        <div className="products-grid">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              className="product-card"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="product-image-box">
                <img src={product.image} alt={product.name} className="product-img" />
              </div>
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-description">{product.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
