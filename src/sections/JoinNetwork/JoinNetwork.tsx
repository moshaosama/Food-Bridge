import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const joinCards = [
  { 
    title: 'التسجيل كمكتب توريد', 
    desc: 'انضم كمورد معتمد ووسع نطاق أعمالك في السوق السعودي والدولي.', 
    icon: '🏢' 
  },
  { 
    title: 'التسجيل كشركة نقل', 
    desc: 'ساهم في سلسلة الإمداد من خلال تقديم خدمات النقل واللوجستيات.', 
    icon: '🚛' 
  },
  { 
    title: 'التسجيل كتاجر/مشتري', 
    desc: 'احصل على أفضل أسعار الجملة للمنتجات الغذائية العالمية.', 
    icon: '💼' 
  }
];

export default function JoinNetwork() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section className="py-24 bg-[#1a3c2e]" id="join" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
           className="text-center mb-16"
           initial={{ opacity: 0, y: 20 }}
           animate={inView ? { opacity: 1, y: 0 } : {}}
        >
           <h2 className="text-3xl md:text-5xl font-black text-white">انضم إلى شبكتنا</h2>
           <div className="w-20 h-1 bg-[#5dbb6a] mx-auto mt-6 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {joinCards.map((card, i) => (
            <motion.div
              key={card.title}
              className="bg-white p-10 rounded-[32px] text-center hover:scale-[1.02] transition-transform shadow-2xl shadow-black/20 group"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className="w-20 h-20 bg-[#f0f8f3] rounded-3xl flex items-center justify-center text-4xl mx-auto mb-8 group-hover:bg-[#5dbb6a] transition-colors group-hover:text-white">
                {card.icon}
              </div>
              <h3 className="text-2xl font-black text-[#1a3c2e] mb-4">{card.title}</h3>
              <p className="text-[#4b5563] font-medium leading-relaxed mb-8">{card.desc}</p>
              <button className="text-[#1a3c2e] font-black hover:text-[#5dbb6a] transition-colors flex items-center justify-center gap-2 mx-auto">
                <span>ابدأ الآن</span>
                <span className="mt-1 text-xl">›</span>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
