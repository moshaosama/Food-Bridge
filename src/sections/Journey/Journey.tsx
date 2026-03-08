import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const steps = [
  { num: '3', title: 'اعتماد البيع', desc: 'يتم اختيار العرض الأنسب وإتمام البيع بالسعر المفضل.' },
  { num: '2', title: 'طلبات الشراء', desc: 'تتم تقديم طلبات الشراء بنظام المزايدة خلال 24 ساعة.' },
  { num: '1', title: 'عرض المنتجات', desc: 'يتم عرض المنتجات بالجملة مع تحديد الكميات والوزن والنوع.' },
];

const partnershipOpportunities = [
  { title: 'فرص الشراكة الاستراتيجية', desc: 'الانضمام إلى منظومة فود بريدج للمساهمة في تطوير الأمن الغذائي.', icon: '🤝' },
  { title: 'حلول مخصصة', desc: 'تقديم حلول مخصصة لمختلف الأطراف في سلسلة القيمة الغذائية.', icon: '🏢' },
  { icon: '📉', title: 'أثر قابل للقياس', desc: 'نعمل على تقارير وتحليلات لقياس أثر التوريد في دعم الأمن الغذائي.' },
  { icon: '🚀', title: 'دعم التطبيق والتنفيذ', desc: 'يوفر فريق فود بريدج الدعم الكامل والتدريب والمساعدة التقنية.' }
];

export default function Journey() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section className="py-24 bg-[#faf7f2] overflow-hidden" id="journey" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Journey Section */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
        >
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-black text-[#1a3c2e] mb-4 md:mb-6">رحلة العميل</h2>
          <p className="text-sm md:text-lg text-[#4b5563] font-medium leading-relaxed max-w-xl mx-auto px-4">خطوات بسيطة وسريعة لإتمام الصفقات بنجاح</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 lg:gap-20">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              className="text-center relative flex flex-col items-center"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <div className="w-16 h-16 md:w-20 md:h-20 bg-white border-2 border-[#5dbb6a] text-[#5dbb6a] rounded-full flex items-center justify-center text-2xl md:text-3xl font-black mb-6 md:mb-8 shadow-xl shadow-[#5dbb6a]/10">
                {step.num}
              </div>
              <h3 className="text-xl md:text-2xl font-black text-[#1a3c2e] mb-3 md:mb-4">{step.title}</h3>
              <p className="text-sm md:text-base text-[#4b5563] leading-relaxed font-medium">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Partnership Section */}
        <motion.div
          className="text-center mt-24 md:mt-32 mb-12 md:mb-16"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-black text-[#1a3c2e]">فرص مقدمي الخدمات</h2>
          <div className="w-16 md:w-20 h-1 bg-[#5dbb6a] mx-auto mt-4 md:mt-6 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {partnershipOpportunities.map((op, i) => (
            <motion.div
              key={op.title}
              className="bg-white p-6 md:p-8 rounded-[24px] md:rounded-3xl border border-black/5 flex flex-col items-center md:items-start text-center md:text-right hover:shadow-2xl hover:-translate-y-2 transition-all group"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + (i * 0.1) }}
            >
              <div className="w-12 h-12 md:w-16 md:h-16 bg-[#f0f8f3] rounded-xl md:rounded-2xl flex items-center justify-center text-2xl md:text-3xl mb-4 md:mb-6 group-hover:bg-[#5dbb6a] group-hover:text-white transition-colors">
                {op.icon}
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold text-[#1a3c2e] mb-2 md:mb-3 leading-tight">{op.title}</h3>
                <p className="text-[13px] md:text-sm text-[#4b5563] font-medium leading-relaxed">{op.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
