import React from 'react';
import { ExternalLink, Layout, Code2, Smartphone } from 'lucide-react';

const ProjectsCode = () => {
  const projects = [
    {
      title: "منصة MX",
      category: "مواقع الويب",
      image: "/img/mx.png",
      icon: <Layout className="w-5 h-5" />,
      tag: "React / Next.js",
      link:"https://mx-blond.vercel.app/"
    },
    {
      title: "متجر الكترونى ",
      category: "مواقع الويب",
      image: "/img/store.png",
      icon: <Smartphone className="w-5 h-5" />,
      tag: "Java Script",
      link:"https://badawey-store.vercel.app/"
    },
    {
      title: "نظام إدارة المستودعات",
      category: "حلول برمجية",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
      icon: <Code2 className="w-5 h-5" />,
      tag: "Python / AI"
    },
    {
      title: "متجر إلكتروني متكامل",
      category: "تطبيقات الويب",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800",
      icon: <Layout className="w-5 h-5" />,
      tag: "Node.js"
    }
  ];

  return (
    <section id="portfolio" className="py-6 px-6 bg-[#030a1c] relative">
      {/* خلفية ضوئية خفيفة */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#00d2ff]/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-[#00d2ff] text-3xl md:text-5xl font-black tracking-widest mb-4 uppercase">أعمالنا</h2>
          <div className='w-24 mx-auto h-1.5 mb-6 rounded-full bg-gradient-to-r from-[#00d2ff] to-[#f7b500]'></div>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            نحول الأفكار المعقدة إلى واقع رقمي ملموس. استعرض بعضاً من مشاريعنا التي نفخر بها.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-[2rem] bg-white/5 border border-white/10 hover:border-[#00d2ff]/50 transition-all duration-500"
            >
              {/* Image Container */}
              <div className="aspect-[16/9] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#030a1c] via-[#030a1c]/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex items-center gap-3 mb-3">
                  <span className="p-2 rounded-lg bg-[#f7b500] text-black shadow-[0_0_15px_rgba(247,181,0,0.3)]">
                    {project.icon}
                  </span>
                  <span className="text-[#00d2ff] font-bold text-sm tracking-widest">{project.category}</span>
                </div>
                
                <div className="flex justify-between items-end">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-black text-white mb-2">{project.title}</h3>
                    <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-xs font-medium text-slate-300 border border-white/10">
                      {project.tag}
                    </span>
                  </div>
                  
                  <a href={project.link} target='_blank' className="p-4 rounded-full bg-white/10 hover:bg-[#00d2ff] text-white hover:text-black transition-all duration-300 group/btn">
                    <ExternalLink  size={24} className="group-hover/btn:scale-110 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button (Optional) */}
        <div className="mt-16 text-center">
          <a href='https://github.com/omarelbadaweey' target='_blank' className="px-10 py-4 rounded-full border-2 border-[#f7b500] text-[#f7b500] font-black hover:bg-[#f7b500] hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(247,181,0,0.1)] hover:shadow-[0_0_30px_rgba(247,181,0,0.3)]">
            مشاهدة كافة المشاريع
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsCode;