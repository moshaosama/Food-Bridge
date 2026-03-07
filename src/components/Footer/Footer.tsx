import { useInView } from 'react-intersection-observer';

export default function Footer() {
  const [ref] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <footer className="bg-white py-20 border-t border-black/5" id="footer" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-8 flex flex-col items-center md:items-start text-center md:text-right">
             <a href="/" className="flex flex-col items-end md:items-start group">
                <span className="text-4xl font-black text-[#1a3c2e] leading-none mb-1">Food</span>
                <span className="text-sm font-black text-[#5dbb6a] tracking-widest uppercase">Bridge</span>
             </a>
             <p className="text-[#4b5563] font-medium text-lg leading-relaxed max-w-sm">
                نحول مستقبل الغذاء في المملكة العربية السعودية عبر التكنولوجيا والربط العالمي المباشر.
             </p>
             <div className="flex gap-4">
                {['🐦', '📘', '📸', '💼'].map((social, i) => (
                   <button key={i} className="w-12 h-12 rounded-2xl bg-[#f0f8f3] text-[#1a3c2e] flex items-center justify-center text-xl hover:bg-[#5dbb6a] hover:text-white transition-all">
                     {social}
                   </button>
                ))}
             </div>
          </div>

          {/* Links 1 */}
          <div className="text-center md:text-right">
            <h4 className="text-[#1a3c2e] font-black text-xl mb-8">روابط سريعة</h4>
            <ul className="space-y-4">
              {['من نحن', 'الشركاء', 'السوق والمزاد', 'سلسلة الإمداد'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-[#4b5563] font-bold hover:text-[#5dbb6a] transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links 2 */}
          <div className="text-center md:text-right">
            <h4 className="text-[#1a3c2e] font-black text-xl mb-8">التواصل</h4>
            <ul className="space-y-4">
              <li className="text-[#4b5563] font-bold">الرياض، المملكة العربية السعودية</li>
              <li className="text-[#4b5563] font-bold">info@foodbridge.sa</li>
              <li className="text-[#4b5563] font-bold text-lg direction-ltr">+966 000 000 000</li>
            </ul>
          </div>

        </div>

        <div className="mt-20 pt-8 border-t border-black/[0.03] text-center text-[#94a3b8] font-bold text-sm">
          جميع الحقوق محفوظة © فود بريدج 2025
        </div>
      </div>
    </footer>
  );
}
