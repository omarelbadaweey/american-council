import React from "react";
import Transition from "../components/Transition";
import { Helmet } from "react-helmet";
const AboutUs = () => {
  return (
    <Transition>
      {/* <Helmet>
        <title>About</title>
        <meta name="description" content="About" />
        <meta name="keywords" content="About" />
      </Helmet> */}

      <Helmet>
        <title>عن American Council - رؤيتنا ورسالتنا</title>
        <meta
          name="description"
          content="تعرف على American Council بجامعة المنصورة - رؤيتنا في تقديم أفضل البرامج التعليمية وتطوير مهارات الطلاب"
        />
        <meta
          name="keywords"
          content="عن American Council, رؤية, رسالة, أهداف, جامعة المنصورة, تعليم"
        />
      </Helmet>

      <div
        dir="rtl"
        className=" min-h-screen bg-gradient-to-br from-gray-200 to-blue-100"
      >
        {/* Hero Section */}
        <section dir="ltr" className="relative py-16 bg-[#000524] text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                <span className="italic">American Council</span> للتدريب
                والبرمجيات
              </h1>
              <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
                الرائد في تقديم الحلول التدريبية والبرمجية المتكاملة في مصر منذ
                عام 2013
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-yellow-400 to-orange-400"></div>
        </section>

        {/* Main About Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
              <div className="lg:w-1/2">
                <div className="inline-block mb-4">
                  <span className="bg-yellow-300 text-[#000524] px-4 py-2 rounded-full text-sm font-semibold">
                    مرخصة من وزارة الاتصالات وتكنولوجيا المعلومات
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#000524] mb-6 leading-tight">
                  شركة مساهمة مصرية رائدة منذ 2013
                </h2>
                <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                  <p>
                    تأسس American Council عام 2013 كشبكة رائدة في تقديم الحلول
                    التدريبية والبرمجية المتكاملة في مصر. نحن نؤمن بأن التدريب
                    هو حجر الزاوية للتنمية الوطنية.
                  </p>
                  <p>
                    تعمل كشركة مساهمة مصرية مرخصة من وزارة الاستثمار ومرخصة من
                    قبل وزارة الاتصالات وتكنولوجيا المعلومات، مما يضمن استدامة
                    عملنا وكفاءة خدماتنا.
                  </p>
                  <p>
                    نلتزم بمعايير الجودة العالمية مع الحفاظ على القيم والثقافة
                    المصرية، لتحقيق أقصى استفادة للمتدربين والمؤسسات.
                  </p>
                </div>
              </div>
              <div className=" lg:w-1/2">
                <div className="relative">
                  <div className="relative bg-yellow-400 rounded-2xl shadow-2xl p-2 transform  hover:rotate-2 transition-transform duration-300">
                    <img
                      src="/img/about.jpg"
                      alt="فريق العمل"
                      className="w-full h-96 object-cover rounded-xl"
                    />
                    <div className="absolute top-5 right-5 w-23 h-23 border-3 overflow-hidden flex items-center border-yellow-400 shadow-2xl rounded-full">
                      <img
                        src="/img/amercan.png"
                        className=" w-full h-full object-cover "
                        alt=""
                      />
                    </div>{" "}
                  </div>
                  <div className="absolute -bottom-6 -left-2 md:-left-6 bg-yellow-400 text-[#000524] border-3 outline-2 outline-yellow-400  p-6 rounded-2xl shadow-lg">
                    <div className="text-center">
                      <div className="text-2xl font-bold">10+</div>
                      <div className="text-sm font-semibold">
                        سنوات من الخبرة
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className=" ">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Mission */}
              <div className="relative border-2 border-[#000524] bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 shadow-lg ">
                <div className="absolute -top-4 right-8 bg-[#000524] text-white px-6 py-2 rounded-full font-semibold">
                  الرسالة
                </div>
                <div className="mt-4">
                  <div className="w-12 h-1 bg-yellow-400 mb-4"></div>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    إعداد كوادر محترفة قادرة على نقل ونشر التكنولوجيا داخل
                    مجتمعاتهم، مما يسهم في سد الفجوة بين التعليم وسوق العمل.
                    نزود الشباب المصري والعربي بالمهارات الصلبة والناعمة التي
                    تضمن لهم النجاح المهني والتميز في سوق العمل التنافسي.
                  </p>
                </div>
              </div>

              {/* Vision */}
              <div className="relative bg-gradient-to-br border-2 border-yellow-400 from-yellow-50 to-white rounded-3xl p-8 shadow-lg ">
                <div className="absolute -top-4 right-8  bg-yellow-400 text-white px-6 py-2 rounded-full font-semibold">
                  الرؤية
                </div>
                <div className="mt-4">
                  <div className="w-12 h-1 bg-[#000524] mb-4"></div>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    معايير عالمية بثقافة محلية. نحقق جودة تدريبية غير مسبوقة في
                    مصر والوطن العربي من خلال رفع مستوى المحتوى التدريبي وفقاً
                    لمناهج عالمية معتمدة وتأهيل كوادر متخصصة في التكنولوجيا
                    الحديثة، مع الحفاظ على الهوية الثقافية المحلية.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pillars Section */}
        <section className="py-12 ">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#000524] mb-4">
                الركائز المؤسسية
              </h2>
              <div className="w-24 h-1 bg-yellow-400 mx-auto mb-4"></div>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                الأسس التي تقوم عليها رؤيتنا ونهجنا في تقديم خدمات التدريب
                والبرمجيات
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Pillar 1 */}
              <div className="group text-center p-8 rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 border-2 border-[#000524]">
                <div className="w-24 h-24 bg-gradient-to-br from-[#000524] to-blue-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-blue-900 text-3xl">🏛️</span>
                </div>
                <h3 className="text-2xl font-bold text-[#000524] mb-4">
                  الترخيص الرسمي
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  مرخصة من وزارة الاتصالات وتكنولوجيا المعلومات (MCIT) ومركز
                  تكنولوجيا المعلومات منذ 2020، مما يؤكد امتلاكنا للمعايير
                  المهنية والرقمية والجودة في تقديم الخدمات.
                </p>
              </div>

              {/* Pillar 2 */}
              <div className="group text-center p-8 rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 border-2 border-[#224a58]">
                <div className="w-24 h-24 bg-gradient-to-br from-[#000524] to-green-300 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className=" text-3xl">📊</span>
                </div>
                <h3 className="text-2xl font-bold text-[#000524] mb-4">
                  النمو الاستراتيجي
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  تحولنا في 2022 إلى شركة مساهمة مصرية، معززين بذلك قدرتنا على
                  التوسع والمساهمة الفعالة في الاقتصاد الوطني وتنمية الموارد
                  البشرية.
                </p>
              </div>

              {/* Pillar 3 */}
              <div className="group text-center p-8 rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 border-2 border-yellow-400">
                <div className="w-24 h-24 bg-gradient-to-br from-[#000524] to-yellow-300 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-purple-900 text-3xl">🚀</span>
                </div>
                <h3 className="text-2xl font-bold text-[#000524] mb-4">
                  المرونة الرقمية
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  استجابتنا الناجحة لجائحة كورونا في 2020 بتطبيق نظام التدريب عن
                  بعد بكفاءة عالية، يثبت جاهزيتنا الدائمة للتعامل مع تحديات
                  المستقبل الرقمي.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20 bg-[#000524] text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                مجالات التميز
              </h2>
              <div className="w-24 h-1 bg-yellow-400 mx-auto mb-4"></div>
              <p className="text-blue-200 text-lg max-w-2xl mx-auto">
                نقدم مجموعة شاملة من البرامج المتخصصة في المسار التعليمي والمهني
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[
                {
                  name: "دورات اللغات",
                  count: "8 لغات",
                  desc: "إنجليزية، فرنسية، ألمانية، إيطالية، إسبانية، صينية، روسية، عربية",
                  icon: "🌐",
                },
                {
                  name: "برمجة وتكنولوجيا",
                  count: "15+ دورة",
                  desc: "تطوير الويب، تطبيقات الموبايل، الذكاء الاصطناعي، الأمن السيبراني",
                  icon: "💻",
                },
                {
                  name: "التدريب المهني",
                  count: "12 تخصص",
                  desc: "إدارة، محاسبة، قانون، تسويق، موارد بشرية، قيادة",
                  icon: "🎯",
                },
                {
                  name: "التدريب الرقمي",
                  count: "10 برامج",
                  desc: "تحليل البيانات، التصميم الجرافيكي، التسويق الرقمي، المهارات الرقمية",
                  icon: "📱",
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-white/5 border-yellow-400 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300 hover:scale-105 border "
                >
                  <div className="text-3xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                  <div className="text-yellow-300 font-semibold mb-3">
                    {service.count}
                  </div>
                  <p className="text-blue-200 text-sm">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="py-20 ">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#000524] mb-4">
                شركاؤنا الاستراتيجيون
              </h2>
              <div className="w-24 h-1 bg-yellow-400 mx-auto mb-4"></div>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                نفتخر بشراكاتنا مع أبرز المؤسسات الحكومية والتعليمية والتدريبية
                في مصر
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {[
                { name: "وزارة الاتصالات", type: "حكومي" },
                { name: "وزارة الشباب والرياضة", type: "حكومي" },
                { name: "نقابة المحامين", type: "نقابي" },
                { name: "نقابة المهن العلمية", type: "نقابي" },
                { name: "جامعة المنصورة", type: "أكاديمي" },
                { name: "منظمة اليونسكو", type: "دولي" },
                { name: "اللجنة الأولمبية", type: "رياضي" },
                { name: "معاهد التربية والتعليم", type: "تعليمي" },
                { name: "نادي القضاء", type: "قضائي" },
                { name: "المجلس العربي", type: "إقليمي" },
              ].map((partner, index) => (
                <div
                  key={index}
                  className="bg-[#000524] rounded-2xl shadow-md p-6 flex flex-col items-center justify-center h-28 hover:shadow-lg transition-all duration-300 hover:scale-105 border-2 border-yellow-400"
                >
                  <span className="text-white font-semibold text-center text-md mb-2">
                    {partner.name}
                  </span>
                  <span className="text-sm text-[#000524] bg-yellow-400 px-2 py-1 rounded-full">
                    {partner.type}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Transition>
  );
};

export default AboutUs;
