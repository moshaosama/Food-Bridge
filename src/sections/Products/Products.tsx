import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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
    <section className="py-20 bg-light-cream" id="products" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block bg-bright-green/10 text-bright-green px-5 py-1.5 rounded-full text-xs md:text-sm font-bold mb-4">
            الإنتائج المحلي
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-black text-dark-green mb-4">
            أهم المحاصيل السعودية
          </h2>
          <div className="w-16 md:w-20 h-1 bg-bright-green mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              className="bg-white rounded-[24px] md:rounded-[30px] overflow-hidden shadow-sm border border-black/5 hover:border-bright-green hover:shadow-xl hover:-translate-y-2 transition-all duration-400 group"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="h-[200px] md:h-[240px] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-6 md:p-8 text-center">
                <h3 className="text-xl md:text-2xl font-extrabold text-dark-green mb-3 md:mb-4">{product.name}</h3>
                <p className="text-sm md:text-base text-text-gray leading-loose">{product.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
