import React from "react";
import Hero from "../components/Hero";
import { Helmet } from "react-helmet";
import AboutQuality from "../components/AboutQuality";

function Home() {
  const products = [
    {
      id: 1,
      name: "من نحن",
      desc: "مركز تعليمي رائد يقدم كورسات متنوعة في مختلف المجالات",
      img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      link: "/about",
    },
    {
      id: 2,
      name: "الكورسات",
      desc: "مجموعة متنوعة من الكورسات في البرمجة، التصميم، والتسويق",
      img: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      link: "/courses",
    },
    {
      id: 3,
      name: "طرق الدفع",
      desc: "وسائل دفع متنوعة وآمنة للحفاظ على راحتكم",
      img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      link: "/payment",
    },
    {
      id: 4,
      name: "حجز الكورس",
      desc: "احجز مكانك في الكورس الذي تريده بسهولة",
      img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      link: "/booking",
    },
  ];

  return (
    <section className="bg-gray-100">

      {/* <Helmet>
        <title>Home Page</title>
        <meta name="description" content="Home Page" />
        <meta name="keywords" content="Home Page" />
      </Helmet> */}
      
      <Helmet>
  <title>American Council - مركز الكورسات بجامعة المنصورة</title>
  <meta name="description" content="American Council بجامعة المنصورة - كورسات تعليمية متقدمة في الهندسة والبرمجة واللغات بأفضل الأسعار وأعلى جودة" />
  <meta name="keywords" content="كورسات, جامعة المنصورة, American Council, هندسة, برمجة, لغات, تعليم" />
  <meta property="og:title" content="American Council - مركز الكورسات بجامعة المنصورة" />
  <meta property="og:description" content="كورسات تعليمية متقدمة في الهندسة والبرمجة واللغات" />
</Helmet>
      {/*  */}
      <Hero />

      {/*  */}
      <svg
        width="100%"
        height="120"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="text-[#000524]"
      >
        <path
          fill="currentColor"
          d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
          opacity=".25"
        ></path>
        <path
          fill="currentColor"
          d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
          opacity=".5"
        ></path>
        <path
          fill="currentColor"
          d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
        ></path>
      </svg>

      {/*  */}
      <div className="px-10 mx-auto py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 gap-8 ">
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-white border-3 border-yellow-400 rounded-2xl shadow-2xl p-3 flex flex-col items-center hover:scale-105 transition-transform duration-500"
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-28 h-28 mb-4 rounded-xl object-cover"
            />
            <h3 className="text-2xl font-bold text-[#000524] mb-2 text-center">
              {item.name}
            </h3>
            <p className="text-gray-600 mb-4 text-center">{item.desc}</p>
            <a
              href={item.link}
              className="bg-yellow-400 text-white px-6 py-2 rounded-full font-bold hover:bg-[#000524] hover:text-yellow-400 transition-colors duration-300"
            >
              الذهاب{" "}
            </a>
          </div>
        ))}
      </div>

      {/*  */}
      <div className="flex flex-wrap px-5 justify-around bg-[#000524] py-7 mt-10 border-y-8  border-yellow-400">
        <div className="w-80 sm:w-100 h-80 sm:h-100">
          <img
            src="/img/hero.png"
            className="w-full h-full object-cover"
            alt="صوره شخصيه للدكتور/ ايه الملاح"
          />
        </div>

        <div className=" text-info text-right font-bold text-yellow-400 content-center  space-y-5">
          <p className="text-xl font-bold text-white mb-2"> تحت إشراف</p>
          <h2 className="text-5xl ">
            الدكتور
            <br />
            <span className="mt-5 block"> أيه محمد الملاح</span>
          </h2>
          <div className="text-lg  space-y-1">
            <p> باحث دكتوراه بالقضايا المجتمعيه *</p>
            <p> رئيس مجلس الاداره *</p>
            <p> بكالوريوس خدمه اجتماعيه جامعه المنصوره *</p>
            <p> ماجستير فى علم الاجتماع كليه الاداب , جامعه المنصوره *</p>
          </div>
        </div>
      </div>

        {/*  */}
      <div className="py-10 px-6">
        <h2 className=" relative w-fit mx-auto before:w-full before:bg-yellow-400 before:h-1 before:absolute before:-bottom-5  after:w-7 after:h-7 after:absolute after:-bottom-8 after:left-[50%] after:-translate-x-[50%] after:right-[50%]  after:rounded-full after:bg-yellow-300 after:border-3 text-4xl font-bold text-[#000524] text-center mb-16">
          توثيق أعمالنا
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 ">
          <div className="border-3 outline-4 outline-[#000524] border-yellow-400 mt-5  rounded-4xl overflow-hidden group cursor-grab">
            <img
              src="/img/30.jpg"
              className="object-cover group-hover:scale-[1.1]  group-hover:rotate-1 transition-all duration-300"
              alt="توثيق اعمالنا "
            />
          </div>
          <div className="border-3 outline-4 outline-[#000524] border-yellow-400 mt-5  rounded-4xl overflow-hidden group cursor-grab">
            <img
              src="/img/31.jpg"
              className="object-cover group-hover:scale-[1.1]  group-hover:rotate-1 transition-all duration-300"
              alt="توثيق اعمالنا "
            />
          </div>
          <div className="border-3 outline-4 outline-[#000524] border-yellow-400 mt-5  rounded-4xl overflow-hidden group cursor-grab">
            <img
              src="/img/32.jpg"
              className="object-cover group-hover:scale-[1.1]  group-hover:rotate-1 transition-all duration-300"
              alt="توثيق اعمالنا "
            />
          </div>
          <div className="border-3 outline-4 outline-[#000524] border-yellow-400 mt-5  rounded-4xl overflow-hidden group cursor-grab">
            <img
              src="/img/33.jpg"
              className="object-cover group-hover:scale-[1.1]  group-hover:rotate-1 transition-all duration-300"
              alt="توثيق اعمالنا "
            />
          </div>
        </div>
      </div>

        {/*  */}
        <AboutQuality/>
    </section>
  );
}

export default Home;
