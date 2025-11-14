import React from 'react';
import { Link } from 'react-router-dom';
import Transition from '../components/Transition';
import { Helmet } from 'react-helmet';

const TrainingTerms = () => {
  const terms = [
    {
      id: 1,
      text: "برجاء تقييم الأوراق لإثبات صحة المعلومات في الاستمارة رقم 1 (لنجاح صحة التقييم وحصول المتدرب على نسبة الدعم المناسبة)."
    },
    {
      id: 2,
      text: "ممنوع استخدام الأجهزة أو العينات الخاصة بها والاستخدام يكون تحت إشراف المدرب – الدكتور."
    },
    {
      id: 3,
      text: "ممنوع اصطحاب الأطفال."
    },
    {
      id: 4,
      text: "الحد الأقصى للتأخير 15 دقيقة عن الموعد المحدد."
    },
    {
      id: 5,
      text: "ممنوع تناول المأكولات داخل القاعات والالتزام باللوائح والقواعد في أماكنها."
    },
    {
      id: 6,
      text: "ضرورة إحضار مستلزمات التدريب كاملة."
    },
    {
      id: 7,
      text: "ممنوع التدخين داخل القاعات وإغلاق الموبايل أثناء التدريب."
    },
    {
      id: 8,
      text: "الالتزام بالجدية داخل القاعات."
    },
    {
      id: 9,
      text: "سداد رسوم البرنامج التدريبي في الموعد المحدد له من قبل الاستقبال."
    },
    {
      id: 10,
      text: "يجب إبلاغ موظفي الاستقبال عند حدوث أي تغيير في البيانات الشخصية وخاصة أرقام التليفونات الخاصة بالمتدربين."
    },
    {
      id: 11,
      text: "في حالة عدم التزام المتدرب بالحضور وتجاوز نسبة الغياب أكثر من 5 محاضرات يعتبر الحجز لاغي دون استرداد الرسوم السابقة وفي حالة استكمال البرنامج التدريبي يتم دفع غرامة 25% من قيمة البرنامج التدريبي زيادة على المبلغ المحدد في الاستمارة رقم 1. ولا تتحمل الشركة أي مسئولية."
    },
    {
      id: 12,
      text: "ممنوع استرداد المبالغ المدفوعة بعد 24 ساعة وذلك لالتزام الشركة بالخدمة المقدمة."
    },
    {
      id: 13,
      text: "يمنع نهائياً الخوض في أي نقاشات سياسية أو دينية أو عرقية."
    },
    {
      id: 14,
      text: "سيتم التواصل مع المتدرب من خلال الأرقام الخاصة به لإخطاره بالعروض الجديدة التي تقدمها الشركة."
    },
    {
      id: 15,
      text: "في حالة وجود أي شكوى يجب إبلاغ الإدارة مباشرة."
    },
    {
      id: 16,
      text: "يسمح بالتأجيل مرة واحدة فقط وفي حالة تكرار عملية التأجيل يتم دفع غرامة 25% من قيمة البرنامج التدريبي زيادة على المبلغ المحدد في الاستمارة رقم 1."
    },
    {
      id: 17,
      text: "يعتبر التعاقد ملغي في حالة عدم الالتزام بالقواعد السابقة."
    }
  ];

  return (
    <Transition>



      <Helmet>
  <title>الشروط والأحكام - American Council جامعة المنصورة</title>
  <meta name="description" content="شروط وأحكام استخدام American Council - سياسة الخصوصية, شروط التسجيل في الكورسات, سياسة الإلغاء والاسترجاع, حقوق ومسؤوليات الطلاب" />
  <meta name="keywords" content="شروط وأحكام, سياسة الخصوصية, American Council, شروط التسجيل, سياسة الإلغاء, جامعة المنصورة" />
  <meta property="og:title" content="الشروط والأحكام - American Council جامعة المنصورة" />
  <meta property="og:description" content="شروط الاستخدام وسياسة الخصوصية لتسجيل الكورسات" />
</Helmet>
   
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-8">
        {/* العنوان الرئيسي */}
        <div className="text-center mb-8 border-b-2 border-yellow-300 pb-6">
          <h1 className="text-3xl font-bold text-[#000524] mb-4">
            شروط التعاقد الملزمة للمتدرب
          </h1>
          <p className="text-gray-600 text-lg">
            يرجى قراءة الشروط التالية بعناية والالتزام بها
          </p>
        </div>

        {/* قائمة الشروط */}
        <div className="space-y-6 mb-8">
          {terms.map((term) => (
            <div 
              key={term.id}
              className="flex items-start p-4 bg-gray-50 rounded-lg border border-gray-200 hover:bg-blue-50 transition-colors duration-300"
            >
              <span className="flex-shrink-0 w-8 h-8 bg-[#000524] text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">
                {term.id}
              </span>
              <p className="text-gray-700 text-right leading-7 flex-1">
                {term.text}
              </p>
            </div>
          ))}
        </div>

        {/* قسم الموافقة */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">
          <h3 className="text-xl font-bold text-[#000524] mb-4 text-center">
            إقرار بالموافقة
          </h3>
          <p className="text-gray-700 text-center mb-4 leading-8">
          !! فى حال انك ضغطت على "متابعه التسجيل" فانت توافق على جميع الشروط !!
          </p>
          <Link 
            to={`/booking`}
            className="block w-fit mx-auto bg-[#000524] text-yellow-400 px-6 py-2 rounded-lg font-semibold hover:bg-yellow-400 hover:text-[#000524] border-2 border-[#000524] transition-colors"
          >
            متابعه التسجيل
          </Link>
        </div>


      </div>
    </div>
     </Transition>
  );
};

export default TrainingTerms;