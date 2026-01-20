
import React, { useState, useEffect } from 'react';
import { Menu, X, Rocket, Smartphone, Globe, Shield, Cpu, Users, Mail, Phone, ArrowRight, CheckCircle2 } from 'lucide-react';

const AmericanCouncilPro = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // تأثير عند التمرير لتغيير خلفية الهيدر
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'تواصل معنا', href: '#contact' },
    { name: 'أعمالنا', href: '#portfolio' },
    { name: 'خدماتنا', href: '#services' },
    { name: 'من نحن', href: '#about' },
    { name: 'الرئيسية', href: '#home' },
  ];

  return (
    <div className="bg-[#020817] min-h-screen font-sans text-slate-200 selection:bg-[#f7b500] selection:text-black" dir='rtl'>
      
      {/* 1. Header & Mobile Nav */}
      <nav dir='ltr' className={`fixed top-0 w-full z-[100] transition-all duration-300 px-6 py-4 ${scrolled ? 'bg-[#020817]/80 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#00d2ff] to-[#f7b500] rounded-lg flex items-center justify-center shadow-[0_0_20px_rgba(0,210,255,0.3)]">
              <span className="text-[#020817] font-black text-xl">A</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tighter text-white leading-none">AMERICAN <span className="text-[#f7b500]">COUNCIL</span></span>
              <span className="text-[10px] font-bold text-[#00d2ff] tracking-[0.2em] uppercase">Software House</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10" >
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-sm font-bold hover:text-[#f7b500] transition-colors">{link.name}</a>
            ))}
            <button className="cursor-pointer bg-[#f7b500] text-[#020817] px-6 py-2 rounded-xl font-black text-sm hover:scale-105 transition-all">ابدأ الآن</button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-white cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Sidebar */}
        <div className={`fixed z-200 inset-y-0 right-0 w-full sm:w-80 bg-[#020817]  transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-500 ease-in-out border-l border-white/10 p-8 md:hidden`}>
           <div className="flex justify-between items-center mb-12">
              <span className="font-black text-xl text-[#f7b500]">القائمة</span>
              <button onClick={() => setIsMenuOpen(false)}><X size={30} /></button>
           </div>
           <div className="flex flex-col gap-8">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-2xl font-black hover:text-[#00d2ff]">{link.name}</a>
              ))}
              <button className="mt-4 bg-[#00d2ff] text-white p-4 rounded-2xl font-black text-lg">طلب استشارة</button>
           </div>
        </div>
      </nav>

      {/* 2. Hero Section */}
      <section id="home" className="relative pt-48 pb-32 px-6 overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#00d2ff]/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-[-5%] w-[400px] h-[400px] bg-[#f7b500]/5 rounded-full blur-[100px]"></div>

        <div className="max-w-7xl mx-auto relative z-10 text-center md:text-right grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#f7b500] text-xs font-black mb-8">
              <span className="ml-2">🔥</span> التقنية بين يديك
            </div>
            <h1 className="text-5xl md:text-8xl font-black leading-tight mb-8">
              نصمم <span className="text-[#00d2ff]">التميز</span> <br /> 
              للعلامات التجارية.
            </h1>
            <p className="text-slate-400 text-lg md:text-xl max-w-xl leading-relaxed mb-10">
              في أميريكان كونسيل، نوفر حلولاً برمجية متكاملة تبدأ من الفكرة وتصل إلى العالمية. نحن نبني المستقبل بكود احترافي.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="h-16 px-10 bg-[#f7b500] text-black font-black rounded-2xl hover:shadow-[0_0_30px_rgba(247,181,0,0.3)] transition-all">مشاهدة أعمالنا</button>
              <button className="h-16 px-10 border border-white/10 font-black rounded-2xl hover:bg-white/5 transition-all flex items-center gap-3">تحدث معنا <ArrowRight size={20} /></button>
            </div>
          </div>
          <div className="relative hidden md:block">
            <div className="w-full aspect-square bg-gradient-to-tr from-[#00d2ff]/20 to-[#f7b500]/20 rounded-[4rem] border border-white/10 backdrop-blur-3xl animate-pulse"></div>
            <div className="absolute inset-0 rounded-2xl flex items-center justify-center overflow-hidden">
              <img src="/img/code-logo.png"   alt="" />
               {/* <div className="text-[12rem] font-black opacity-5 text-white">AC</div> */}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Services - Grid Layout */}
      <section id="services" className="py-24 px-6 bg-[#030a1c]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
            <div>
              <h2 className="text-[#00d2ff] font-black tracking-widest mb-4 uppercase">خدماتنا</h2>
              <h3 className="text-4xl md:text-5xl font-black">ماذا يمكننا أن نفعل؟</h3>
            </div>
            <p className="text-slate-500 max-w-md">نحن نغطي كافة جوانب الدورة الحياتية للبرمجيات، من التخطيط إلى الإطلاق والصيانة.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "تطبيقات الويب", icon: <Globe />, color: "from-[#00d2ff]" },
              { title: "تطبيقات الموبايل", icon: <Smartphone />, color: "from-[#f7b500]" },
              { title: "الأمن السيبراني", icon: <Shield />, color: "from-red-500" },
              { title: "الذكاء الاصطناعي", icon: <Cpu />, color: "from-purple-500" },
            ].map((s, i) => (
              <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-[#00d2ff]/50 transition-all group cursor-default">
                <div className={`w-14 h-14 bg-gradient-to-br ${s.color} to-transparent rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>{s.icon}</div>
                <h4 className="text-2xl font-black mb-4 group-hover:text-white transition-colors">{s.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">حلول برمجية متطورة تلبي احتياجات سوق العمل وتضمن لك الصدارة.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why Us Section */}
      <section id="about" className="py-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="bg-gradient-to-br from-[#00d2ff] to-[#f7b500] p-1 rounded-[3rem]">
               <div className="bg-[#020817] rounded-[2.9rem] p-12">
                  <h4 className="text-6xl font-black text-white mb-6 tracking-tighter">10+</h4>
                  <p className="text-[#f7b500] font-black text-2xl mb-4">سنوات من الخبرة</p>
                  <p className="text-slate-400 font-bold">بدأنا من حيث انتهى الآخرون لنضع بصمتنا في عالم البرمجة العربي.</p>
               </div>
            </div>
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#00d2ff]/20 rounded-full blur-3xl animate-pulse"></div>
          </div>
          <div>
            <h2 className="text-4xl font-black mb-10 leading-snug text-white">لماذا يختارنا عمالقة <br/> السوق العربي والعالمي؟</h2>
            <div className="space-y-6">
              {[
                { t: "فريق من صفوة المبرمجين", d: "نختار بعناية المواهب البرمجية لضمان كود نظيف وقابل للتطوير." },
                { t: "التزام صارم بالنتائج", d: "مشاريعنا تتحدث عن جودتها، نلتزم بالوقت والأداء العالي." },
                { t: "دعم فني استباقي", d: "لا ننتظر حدوث المشاكل، أنظمتنا تراقب نفسها على مدار الساعة." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-6 rounded-2xl hover:bg-white/5 transition-all group">
                   <div className="shrink-0 w-10 h-10 rounded-full bg-[#f7b500]/10 flex items-center justify-center text-[#f7b500] group-hover:bg-[#f7b500] group-hover:text-black transition-all">
                      <CheckCircle2 size={24} />
                   </div>
                   <div>
                      <h5 className="font-black text-xl mb-1">{item.t}</h5>
                      <p className="text-slate-400 text-sm">{item.d}</p>
                   </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Contact Section */}
      <section id="contact" className="py-24 px-6 bg-gradient-to-b from-transparent to-[#00d2ff]/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-black mb-8 text-white">هل مشروعك القادم هو <span className="text-[#f7b500]">قصة النجاح</span> القادمة؟</h2>
          <p className="text-slate-400 text-lg mb-12">لا تتردد في استشارتنا، فريقنا التقني جاهز لمساعدتك في التخطيط والبناء.</p>
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
             <a href="mailto:info@american-council.com" className="flex items-center justify-center gap-4 p-6 bg-white/5 border border-white/10 rounded-3xl hover:border-[#f7b500] transition-all group">
                <Mail className="group-hover:text-[#f7b500]" />
                <span className="font-bold">info@american-council.com</span>
             </a>
             <a href="tel:+12345678" className="flex items-center justify-center gap-4 p-6 bg-white/5 border border-white/10 rounded-3xl hover:border-[#00d2ff] transition-all group">
                <Phone className="group-hover:text-[#00d2ff]" />
                <span className="font-bold">اتصل بنا الآن</span>
             </a>
          </div>
        </div>
      </section>

      {/* 6. Footer */}
      <footer className="py-12 border-t border-white/10 px-6 text-center">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-8">
          <div className="flex items-center gap-3">
             <span className="text-2xl font-black italic">AMERICAN <span className="text-[#f7b500]">COUNCIL</span></span>
          </div>
          <div className="flex gap-10 text-slate-500 font-bold text-sm">
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">GitHub</a>
          </div>
          <p className="text-slate-600 text-xs tracking-widest uppercase">© 2026 American Council Tech. Developed for the Future.</p>
        </div>
      </footer>
    </div>
  );
};

export default AmericanCouncilPro;