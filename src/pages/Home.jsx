import React from "react";
import Hero from "../components/Hero";
// import { Helmet } from "react-helmet";
import AboutQuality from "../components/AboutQuality";
import SoftwareCompanySection from "../components/SoftwareCompanySection";

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
        <title>American Council - مركز الكورسات بجامعة المنصورة</title>
        <meta
          name="description"
          content="American Council بجامعة المنصورة - كورسات تعليمية متقدمة في الهندسة والبرمجة واللغات بأفضل الأسعار وأعلى جودة"
        />
        <meta
          name="keywords"
          content="كورسات, جامعة المنصورة, American Council, هندسة, برمجة, لغات, تعليم"
        />
        <meta
          property="og:title"
          content="American Council - مركز الكورسات بجامعة المنصورة"
        />
        <meta
          property="og:description"
          content="كورسات تعليمية متقدمة في الهندسة والبرمجة واللغات"
        />
      </Helmet> */}
      {/*  */}
      <Hero />

      <SoftwareCompanySection/>

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

      <section>
       <h2 className=" text-4xl font-bold text- text-center mb-1">حدد مستواك فى الانجليزيه </h2>
       <p className="text-center font-bold text-[#000524]">اختبار تحديد مستوى اللغه الانجليزيه <span className="text-green-600 underline text-xl">مجانا</span></p>
       <div className="w-50 h-1 bg-amber-400 mx-auto mt-3"></div>
       <div className="w-60 h-60 mx-auto my-5 border-5 border-x-amber-400  rounded-xl overflow-hidden shadow-lg">
        <img src="/img/TestEnglish.png" className="h-full w-full object-cover" alt="اختبار تحديد المستوى مجانا"  />
       </div>
      </section>
      {/*  */}
      <section className="px-10 mx-auto py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 gap-12 ">
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-white border-5 border-yellow-400 border-y-[#000524] rounded-[100px]  p-3 flex flex-col items-center hover:scale-102 hover:shadow-2xl transition-transform duration-500"
          >
            <img
              loading="lazy"
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
              className="text-yellow-400 hover:text-[#000524]  px-5.5 py-1.5 rounded-full font-bold bg-[#000524] hover:bg-yellow-400 border-3  border-[#000524] transition-all duration-500"
            >
              الذهاب{" "}
            </a>
          </div>
        ))}
      </section>

      {/*  */}
      <section className="flex flex-wrap px-5 justify-around bg-[#000524] py-7 mt-10 border-y-8  border-yellow-400">
        <div className="w-80 sm:w-100 h-80 sm:h-100">
          <img
            loading="lazy"
            src="/img/hero.png"
            className="w-full h-full object-cover"
            alt="صوره شخصيه للدكتور/ ايه الملاح"
          />
        </div>

        <div className=" text-info text-right font-bold text-yellow-400 content-center  space-y-5">
          <p className="text-xl font-bold text-white mb-2"> تحت إشراف</p>
          <h2 className="text-4xl ">
            الدكتوره
            <br />
            <span className="mt-5 block"> أيه محمد الملاح</span>
          </h2>
          <div dir="rtl" className=" text-lg   space-y-1">
            <li> رئيس مجلس الاداره </li>
            <li> بكالوريوس خدمه اجتماعيه جامعه المنصوره </li>
            <li>ماجستير بعلم الاجتماع - جامعه المنصوره ( بالحوكمه الاداريه النسائيه ) </li>
            <li>باحث دكتوراه بعلم الاجتماع كليه الاداب - جامعه المنصوره بالقضايا المجتمعيه</li>
          </div>
        </div>
      </section>

      {/*  */}
      <section className="py-10 ">
        <h2 className=" relative w-fit mx-auto before:w-full before:bg-yellow-400 before:h-1 before:absolute before:-bottom-5  after:w-7 after:h-7 after:absolute after:-bottom-8 after:left-[50%] after:-translate-x-[50%] after:right-[50%]  after:rounded-full after:bg-yellow-300 after:border-3 text-4xl font-bold text-[#000524] text-center mb-16">
          الاعتمادات
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 ">
          <div className="mb-12 md:mb-0 mx-auto outline-5 outline-[#000524] rounded-lg w-90 lg:w-120 h-60 lg:h-70 flex items-center justify-center">
            <img
              src="/img/examp1.png"
              alt="الصورة الأولى"
              className="w-full h-full object-cover "
            />
          </div>

          <div className=" mx-auto outline-5 outline-yellow-900 rounded-lg  w-90 lg:w-120 h-60 lg:h-70 flex items-center justify-center">
            <img
              src="/img/examp2.png"
              alt="الصورة الثانية"
              className="w-full h-full object-cover rounded"
            />
          </div>
        </div>
      </section>

      {/*  */}
      <section className="py-10 px-6">
        <h2 className=" relative w-fit mx-auto before:w-full before:bg-yellow-400 before:h-1 before:absolute before:-bottom-5  after:w-7 after:h-7 after:absolute after:-bottom-8 after:left-[50%] after:-translate-x-[50%] after:right-[50%]  after:rounded-full after:bg-yellow-300 after:border-3 text-4xl font-bold text-[#000524] text-center mb-16">
          توثيق أعمالنا
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 ">
          <div className="border-3 outline-4 outline-[#000524] border-yellow-400 mt-5  rounded-4xl overflow-hidden group cursor-grab">
            <img
              loading="lazy"
              src="/img/30.jpg"
              className="object-cover group-hover:scale-[1.1]  group-hover:rotate-1 transition-all duration-300"
              alt="توثيق اعمالنا "
            />
          </div>
          <div className="border-3 outline-4 outline-[#000524] border-yellow-400 mt-5  rounded-4xl overflow-hidden group cursor-grab">
            <img
              src="/img/31.jpg"
              loading="lazy"
              className="object-cover group-hover:scale-[1.1]  group-hover:rotate-1 transition-all duration-300"
              alt="توثيق اعمالنا "
            />
          </div>
          <div className="border-3 outline-4 outline-[#000524] border-yellow-400 mt-5  rounded-4xl overflow-hidden group cursor-grab">
            <img
              loading="lazy"
              src="/img/32.jpg"
              className="object-cover group-hover:scale-[1.1]  group-hover:rotate-1 transition-all duration-300"
              alt="توثيق اعمالنا "
            />
          </div>
          <div className="border-3 outline-4 outline-[#000524] border-yellow-400 mt-5  rounded-4xl overflow-hidden group cursor-grab">
            <img
              loading="lazy"
              src="/img/33.jpg"
              className="object-cover group-hover:scale-[1.1]  group-hover:rotate-1 transition-all duration-300"
              alt="توثيق اعمالنا "
            />
          </div>
        </div>
      </section>

      {/*  */}
      <AboutQuality />
    </section>
  );
}

export default Home;
