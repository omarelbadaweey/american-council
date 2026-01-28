import { Cpu, Globe, Shield, Smartphone } from 'lucide-react'
import React from 'react'

function ServicesCode() {
  return (
          <section id="services" className="pt-20 px-6 bg-[#030a1c]">
        <div className="max-w-7xl mx-auto">
            <div>
              <h2 className="text-[#00d2ff] text-3xl md:text-5xl text-center font-black tracking-widest mb-2 uppercase">خدماتنا</h2>
              <div className='w-20 mx-auto h-1 mb-2 rounded-full bg-amber-400'></div>
                <p className=" mx-auto text-center max-w-md">نحن نغطي كافة جوانب الدورة الحياتية للبرمجيات، من التخطيط إلى الإطلاق والصيانة.</p>
            </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10">
            {[
              { title: "تطبيقات الويب", icon: <Globe />, color: "from-[#00d2ff]" },
              { title: "تطبيقات الموبايل", icon: <Smartphone />, color: "from-[#f7b500]" },
              { title: "الأمن السيبراني", icon: <Shield />, color: "from-red-500" },
              { title: "الذكاء الاصطناعي", icon: <Cpu />, color: "from-purple-500" },
            ].map((s, i) => (
              <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-[#00d2ff]/50 transition-all group cursor-default">
                <div className={`w-14 h-14 bg-linear-to-br ${s.color} to-transparent rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>{s.icon}</div>
                <h4 className="text-2xl font-black mb-4 group-hover:text-white transition-colors">{s.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">حلول برمجية متطورة تلبي احتياجات سوق العمل وتضمن لك الصدارة.</p>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default ServicesCode