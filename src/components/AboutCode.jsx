import { CheckCircle2 } from 'lucide-react'
import React from 'react'

function AboutCode() {
  return (
          <section id="about" className="py-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="bg-linear-to-br from-[#00d2ff] to-[#f7b500] p-1 rounded-[3rem]">
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
  )
}

export default AboutCode