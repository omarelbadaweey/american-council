import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";

// استيراد أنماط Swiper
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Hero() {
  const categories = [
    {
      title: "برمجة وتطوير الويب",
      image: "/img/ai.png",
      courses: "Frontend & Backend",
    },
    {
      title: "اللغات الأجنبية",
      image: "/img/fr.png",
      courses: "إنجليزي - ألماني - فرنسي",
    },
    {
      title: "التسويق الرقمي",
      image: "/img/mark.png",
      courses: "سوشيال ميديا - إعلانات",
    },
    {
      title: "التصميم الجرافيكي",
      image: "/img/dig.png",
      courses: "فوتوشوب - Illustrator",
    },
    {
      title: "الهندسة والتصميم",
      image: "/img/Gem.png",
      courses: "AutoCAD - 3D Max",
    },
    {
      title: "البرمجه والتصميم",
      image: "/img/parm.png",
      courses: "AutoCAD - 3D Max",
    },
  ];

  return (
    <section className="pb-20 relative  top-0 bg-[#000524] text-white py-5 overflow-hidden">
      <div className="absolute top-0 inset-0 bg-[#000318]">
        <img
          src="/img/bg-intro-desktop.png"
          className="h-full w-full object-cover md:object-none"
          alt=""
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          <h2 className="text-3xl italic sm:text-5xl md:text-5xl font-bold mb-2  animate-fade-in-up">
            American Council
          </h2>
        <p className=" text-center mt-3 font-bold text-yellow-400">مرخص من قبل وزاره الاتصالات باعتماد جامعه المنصوره</p>
        </div>

        <div className="mt-5 w-full md:w-[90%] mx-auto">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            speed={800}
            className="w-full"
          >
            {categories.map((category, index) => (
              <SwiperSlide key={category.id}>
                <div className="relative group w-full ">
                  <div className="border-yellow-400/70 border-6 bg-[#000524]  backdrop-blur-lg rounded-2xl p-1   transition-all duration-500 hover:shadow-2xl overflow-hidden w-full">
                    <div className="relative w-full h-90  rounded-xl overflow-hidden">
                      <img
                        loading="lazy"
                        src={category.image}
                        alt={category.title}
                        className="w-full h-full  object-cover "
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                      <div className="absolute bottom-4 right-4 text-white z-10">
                        <h3 className="text-2xl font-bold mb-1">
                          {category.title}
                        </h3>
                        <p className="text-blue-200 text-sm bg-black/30 px-3 py-1 rounded-full inline-block">
                          {category.courses}
                        </p>
                      </div>
                      <div className="absolute top-4 left-4">
                        <span className="bg-yellow-400  text-white text-xs font-bold px-3 py-1 rounded-full">
                          #{index + 1}
                        </span>
                      </div>
                      <div className="absolute top-3 right-4 w-23 h-23 border-3 overflow-hidden flex items-center border-yellow-400 shadow-2xl rounded-full">
                        <img
                          src="/img/amercan.png"
                          className=" w-full h-full object-cover "
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Hero;