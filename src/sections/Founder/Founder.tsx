import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Founder() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section className="py-20 bg-white" id="founder" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-right"
          >
            <span className="bg-bright-green/10 text-bright-green px-4 py-1.5 rounded-full text-xs font-bold mb-6 inline-block">المؤسس والرئيس التنفيذي</span>
            <h2 className="text-3xl lg:text-5xl font-black text-dark-green mb-6 leading-tight">أشرف حلوو</h2>
            <div className="w-16 h-1 bg-bright-green mb-8 rounded-full ml-auto"></div>
            <p className="text-lg text-text-gray leading-loose mb-6 max-w-xl ml-auto">
              قيادي أعمال متمرس بأكثر من عقدين في الخبرة العملية في قطاع الغذاء الدولي، وقطاعات تنفيذية عديدة ومتنوعة من قطاعات عالمية وإدارة المحافظ الاستثمارية والدخول في شراكات وأعمال هيئة التجارة.
            </p>
            <p className="text-lg text-text-gray leading-loose max-w-xl ml-auto">
              حامل شهادة البكالوريوس في الاقتصاد وثلاث درجات الأربعة من كاليفورنيا والتكنولوجيا. حاصل كذلك على درجة الماجستير في التسويق من جامعة الأميرة نورة الرياضية، ودرجة الماجستير في علوم المعلومات.
            </p>

            <div className="grid grid-cols-3 gap-4 mt-12 bg-[#f0f8f3] p-8 rounded-[32px]">
              {[
                { num: '+20', label: 'سنة خبرة' },
                { num: '+100', label: 'شراكة دولية' },
                { num: '3', label: 'درجات ماجستير' },
              ].map((s) => (
                <motion.div
                  key={s.label}
                  className="flex flex-col items-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <span className="text-2xl md:text-3xl font-black text-bright-green mb-2">{s.num}</span>
                  <span className="text-[10px] md:text-xs font-bold text-dark-green uppercase tracking-wide opacity-70 text-center">{s.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Card */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="order-first lg:order-last"
          >
            <div className="bg-[#1a3c2e] p-8 md:p-12 rounded-[48px] shadow-2xl shadow-green-950/20 text-center relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 transition-transform duration-700 group-hover:scale-150"></div>
              
              <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center text-4xl mx-auto mb-8 border border-white/10">
                👔
              </div>
              <div className="mb-8">
                <div className="text-2xl font-black text-white mb-1">أشرف حلوو</div>
                <div className="text-bright-green font-bold mb-1">المؤسس والرئيس التنفيذي</div>
                <div className="text-white/50 text-sm font-bold uppercase tracking-widest">Food Bridge</div>
              </div>
              <div className="text-white/80 italic text-lg leading-relaxed mb-10 max-w-sm mx-auto">
                "نهدف إلى تحويل سوق الغذاء الدولي إلى منصة عالمية لتجارة الغذاء والمزارعين والمستهلكين مع عدة مناطق مجاورة"
              </div>
              <div className="flex justify-center gap-4">
                {['💼', '🌐', '📧'].map((icon, i) => (
                  <motion.button
                    key={i}
                    className="w-12 h-12 bg-white/10 text-white rounded-2xl flex items-center justify-center text-xl hover:bg-bright-green hover:text-white transition-all shadow-lg"
                    whileHover={{ scale: 1.1, y: -4 }}
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
