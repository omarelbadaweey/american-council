import React from "react";

function Hero() {
  const categories = [
    {
      title: "برمجة وتطوير الويب",
      image: "/img/Front&Back.jpg",
      courses: "Frontend & Backend",
    },
    {
      title: "اللغات الأجنبية",
      image:
        "/img/all-languages.jpg",
      courses: "إنجليزي - ألماني - فرنسي",
    },
    {
      title: "التسويق الرقمي",
      image:
        "/img/Course-Digital-Markting.jpg",
      courses: "سوشيال ميديا - إعلانات",
    },
    {
      title: "التصميم الجرافيكي",
      image:
        "/img/Course-Graphic.jpg",
      courses: "فوتوشوب - Illustrator",
    },
    {
      title: "الهندسة والتصميم",
      image:
        "/img/AutoCAD.jpg",
      courses: "AutoCAD - 3D Max",
    },
  ];


  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 text-white py-24 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-60 h-60 bg-blue-400/10 rounded-full blur-2xl animate-bounce"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-10 animate-fade-in-up">
            Amercan Council
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed max-w-3xl mx-auto">
            تأهيل كوادر محترفة قادرة على نقل التكنولوجيا داخل المجتمع
          </p>
          <button className="bg-white text-blue-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all duration-300 transform shadow-lg animate-bounce-slow">
            ابدأ رحلتك التعليمية 🚀
          </button>
        </div>


        <div className="mt-16">
          <div className="relative">
            <div className="flex overflow-x-auto pb-8  space-x-reverse scrollbar-hide snap-x snap-mandatory">
              {categories.map((category, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-80 mx-3 snap-center transform transition-all duration-500 hover:scale-105"
                >
                  <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:shadow-2xl">
                    <div className="relative h-48 mb-4 rounded-xl overflow-hidden">
                      <img
                        src={category.image}
                        alt={category.title}
                        className="w-full h-full object-cover transform hover:scale-110 transition duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div className="absolute bottom-4 right-4 text-white">
                        <h3 className="text-xl font-bold">{category.title}</h3>
                        <p className="text-blue-200 text-sm">
                          {category.courses}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Scroll Indicator */}
            <div className="flex justify-center mt-6 space-x-reverse">
              {[1, 2, 3, 4, 5].map((dot) => (
                <div
                  key={dot}
                  className="w-3 mx-2 h-3 bg-white/30 rounded-full hover:bg-white/60 transition-all duration-300 cursor-pointer"
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;