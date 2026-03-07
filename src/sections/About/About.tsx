import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section className="py-20 bg-white overflow-hidden" id="about" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-right"
          >
            <h2 className="text-3xl lg:text-5xl font-black text-dark-green flex items-center gap-4 justify-end mb-10">
              من نحن <span className="text-bright-green">——</span>
            </h2>
            
            <p className="text-lg text-text-gray leading-loose mb-8 max-w-xl ml-auto">
              منصة فود بريدج هي سوق جملة رقمية تجمع موردي المواد الغذائية في العالم بالسوق السعودي بأفضل الأسعار، مع سلسلة توريد متكاملة تمتد من المزرعة إلى المشتري.
            </p>
            
            <p className="text-lg text-text-gray leading-loose max-w-xl ml-auto">
              تأسست فود بريدج في الرياض عام 2025 لتكون سوقاً إلكترونياً متخصصاً في التعاملات التجارية بين الشركات (B2B) في قطاع الأغذية، وتوفر بيئة رقمية موثوقة تتيح للمشترين مقارنة الموردين والوصول إلى أفضل العروض.
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-first lg:order-last"
          >
            <div className="rounded-[40px] overflow-hidden shadow-2xl shadow-dark-green/10">
              <img 
                src="/images/854ea9e4b95e40c7a435e054789bcbe5785538b6.png" 
                alt="منصة فود بريدج" 
                className="w-full h-[300px] md:h-[480px] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
