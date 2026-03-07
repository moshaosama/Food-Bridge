import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const items = [
  { name: 'مزارع الوادي', type: 'تمور ملكي', price: '26,500 ر.س' },
  { name: 'شركة النخيل الزراعية', type: 'زيت زيتون بكر', price: '25,000 ر.س' },
  { name: 'مورد التمور الأهلية', type: 'تمور خلاص', price: '24,300 ر.س' },
];

export default function Auction() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section className="py-20 bg-white" id="auction" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Card Side */}
          <motion.div
            className="bg-white rounded-3xl p-6 md:p-10 shadow-2xl shadow-black/5 border border-bright-green/10"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-between items-center mb-10 font-bold text-dark-green text-sm md:text-base">
                <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 bg-red-500 rounded-full animate-pulse"></span>
                    <span>مزاد مباشر تمر خلاص</span>
                </div>
                <span className="bg-red-50 text-red-500 px-4 py-1.5 rounded-lg text-xs font-black">ينتهي قريباً</span>
            </div>
            
            <div className="space-y-4">
              {items.map((item, i) => (
                <div key={i} className="flex justify-between items-center p-4 md:p-6 bg-gray-50 rounded-2xl border border-black/[0.03]">
                    <div className="text-right">
                        <div className="font-bold text-dark-green mb-1">{item.name}</div>
                        <div className="text-xs text-text-gray">{item.type}</div>
                    </div>
                    <div className="font-black text-bright-green text-lg">{item.price}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-right lg:order-first"
          >
            <h2 className="text-3xl lg:text-4xl font-black text-dark-green mb-6 leading-tight">مركز المزايدات وشراء المواد الغذائية بالجملة</h2>
            <div className="w-16 h-1 bg-bright-green mb-8 rounded-full ml-auto"></div>
            <p className="text-lg text-text-gray leading-loose mb-6">
              توفر منصة فود بريدج نظام مزايدات رقمي يتيح للمشترين طلب المنتجات بالجملة بينما يقدم الموردون عروض الأسعار خلال فترة محددة.
            </p>
            <p className="text-lg text-text-gray leading-loose">
              يساعد هذا النظام على تحقيق الشفافية والمنافسة العادلة وتخفيض التكاليف للمشترين.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
