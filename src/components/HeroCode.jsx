import React from "react";
import { motion } from "framer-motion";
function HeroCode() {
  return (
    <section id="home" className="relative pt-30 pb-20 px-6 overflow-hidden">
      <div className=" mb-10 text-center">
        <h2 className="text-3xl md:text-4xl mb-2 font-black tracking-tighter text-white leading-none">
          AMERICAN <span className="text-yellow-400">COUNCIL</span>
        </h2>
        <p className="text-sm font-bold text-yellow-400 tracking-[0.2em] uppercase">
          حول فكرتك لمشروع حقيقى باقل تكلفه واعلى جوده
        </p>
      </div>
      <div className="absolute top-[-10%] right-[-10%] w-125 h-125 bg-[#00d2ff]/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 left-[-5%] w-100 h-100 bg-[#f7b500]/5 rounded-full blur-[100px]"></div>

      <div className="max-w-7xl mx-auto relative z-10 text-center md:text-right grid md:grid-cols-2 gap-12 items-center px-6 ">
        {/* القسم النصي مع أنيميشن ظهور */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#f7b500] text-xs font-bold mb-8 backdrop-blur-md">
            <span className="ml-2 animate-bounce">🔥</span> التقنية بين يديك
          </div>

          <h1 className="text-3xl md:text-6xl   font-black leading-[1.1] mb-8 tracking-tight">
            نصمم{" "}
            <span className="text-[#00d2ff] drop-shadow-[0_0_15px_rgba(0,210,255,0.3)]">
              {" "}
              التميز{" "}
            </span>
            للعلامات التجارية
          </h1>

          <p className="text-slate-400 text-lg max-w-xl leading-relaxed mb-10 mx-auto md:mr-0">
            في أميريكان كونسيل، نوفر حلولاً برمجية متكاملة تبدأ من الفكرة وتصل
            إلى العالمية. نحن نبني المستقبل بكود احترافي.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href="#portfolio" className=" group content-center relative h-14 px-10 bg-[#f7b500] text-black font-black rounded-2xl overflow-hidden transition-all hover:scale-105 active:scale-95">
              <span className="relative z-10">مشاهدة أعمالنا</span>
            </a>

            <a href="https://api.whatsapp.com/send/?phone=201098825176&text&type=phone_number&app_absent=0" className="content-center h-14 px-10 border border-white/10 font-black rounded-2xl hover:bg-white/5 transition-all text-white backdrop-blur-sm">
              تحدث معنا
            </a>
          </div>
        </motion.div>

        {/* قسم الصورة مع تأثيرات بصرية */}
        <motion.div
          className="relative  "
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          {/* الخلفية المضيئة */}
          <div className="absolute -inset-4 bg-linear-to-tr from-[#00d2ff]/20 to-[#f7b500]/20 rounded-[4rem] blur-2xl animate-pulse"></div>

          <div className="relative w-full aspect-square max-w-100 mx-auto bg-white/5 border border-white/10 backdrop-blur-xl rounded-[3rem] flex items-center justify-center p-8 overflow-hidden shadow-2xl">
            {/* الأنيميشن العائم للصورة */}
            <motion.img
              src="/img/code-logo.png"
              alt="Logo"
              className="w-full h-full object-contain drop-shadow-2xl rounded-3xl"
              animate={{
                y: [0, -20, 0],
                rotate: [0, 4, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* زخرفة خلفية خفيفة */}
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-30">
              <span className="text-[15rem] font-black select-none">AC</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroCode;
