import React from 'react';
import { Link } from 'react-router-dom';
import Transition from '../components/Transition';

const TrainingTerms = () => {

const terms = [
  {
    id: 1,
    text: "يجب على المتدرب حضور الدورة بنسبة (60%) على الأقل من عدد ساعات البرنامج ومدته."
  },
  {
    id: 2,
    text: "الالتزام بجميع التمارين المطلوبة."
  },
  {
    id: 3,
    text: "يجب على المتدرب الحصول على (60%) على الأقل في الاختبارات."
  },
  {
    id: 4,
    text: "يتيح للمتدرب فرصة إعادة اختبار الدورة في حال الرسوب (مجاناً)."
  },
  {
    id: 5,
    text: "يلتزم المتدرب بإثبات الحضور بالدورة من خلال كشف الحضور أوفلاين أو جروب الحضور أونلاين."
  },
  {
    id: 6,
    text: "يتم تقسيط رسوم الدورة قبل انتهاء النصف الأول من مدة الدورة التدريبية."
  },
  {
    id: 7,
    text: "لا يحق للمتدرب استرداد المبالغ بعد التسجيل أو إلغاء الاشتراك."
  },
  {
    id: 8,
    text: "يُفضل الاحتفاظ بإيصالات الدفعات لتأكيد المعاملات المالية."
  },
  {
    id: 9,
    text: "في حالة تسديد فودافون كاش يتم الدفع عبر رقم (01098825176) الخاص بنا فقط ويتم تأكيد العملية بإرسال رقم التحويل والإيصالات عبر الواتساب خلال 48 ساعة فقط."
  },
  {
    id: 10,
    text: "الالتزام بتقديم محتوى تدريبي بجودة عالية من قبل American Council."
  },
  {
    id: 11,
    text: "توفير الدعم للمتدربين خلال الدورة من قبل American Council."
  },
  {
    id: 12,
    text: "توفير مكان التدريب مجهز من قبل American Council."
  },
  {
    id: 13,
    text: "الالتزام بحضور جميع المحاضرات والاختبارات من قبل المتدرب."
  },
  {
    id: 14,
    text: "تنفيذ المتطلبات المحددة من قبل المتدرب."
  },
  {
    id: 15,
    text: "عدم تأجيل الدورة التدريبية إلا في الظروف القهرية مع تقديم الأوراق اللازمة للإدارة مع تقديم طلب التأجيل واستلام موافقة كتابية."
  },
  {
    id: 16,
    text: "جميع المواد التدريبية والوثائق ملك للأكاديمية."
  },
  {
    id: 17,
    text: "يحظر أي نسخ أو توزيع للمواد التدريبية بدون إذن."
  },
  {
    id: 18,
    text: "يتم تجهيز الشهادات وتسليمها للكلية لاعتمادها خلال 30 يومًا بعد انتهاء الدورة التدريبية وينتظر المتدرب توثيقها وموعد استلامها."
  },
  {
    id: 19,
    text: "يتحمل المتدرب رسوم الشحن الخاصة بالشهادات في حالة الأونلاين."
  },
  {
    id: 20,
    text: "لا يُمكن تعديل البنود إلا بموافقة كتابية من الطرفين."
  },
  {
    id: 21,
    text: "إلغاء العقد يتطلب أيضًا موافقة الطرفين."
  },
  {
    id: 22,
    text: "أي نزاع يُفضّل حله وديًا."
  },
  {
    id: 23,
    text: "إذا لم تنجح الطرق الودية، يُحال النزاع إلى التحكيم من قبل المستشار القانوني بالشركة، ويكون القرار ملزمًا."
  },
  {
    id: 24,
    text: "الالتزام بتوفير جهاز مناسب (كمبيوتر/هاتف) مع اتصال إنترنت في حالة الأونلاين."
  },
  {
    id: 25,
    text: "المشاركة الفعالة في جميع الأنشطة التدريبية."
  },
  {
    id: 26,
    text: "توفير رقم واتساب ثابت للمتابعة."
  },
  {
    id: 27,
    text: "أي مشكلة أو مقترح يتم فيها الرجوع لإدارة المؤسسة فقط."
  },
  {
    id: 28,
    text: "يُعتبر الدخول باستخدام أسماء حقيقية للحصول على إثبات الحضور."
  },
  {
    id: 29,
    text: "كل محاضرة تُسجل من قبل المتدرب وتُحفظ ولا يتيح له نشرها."
  },
  {
    id: 30,
    text: "يجب الالتزام بالقواعد السلوكية داخل المنصة التدريبية."
  },
  {
    id: 31,
    text: "في حالة الانضمام للجروب الواتساب وعدم الحضور يتم التزام المتدرب بدفع رسوم الدورة مرة أخرى للإعادة."
  }
];
  return (
    <Transition>
      {/*  */}
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-8">

        <div className="text-center mb-8 border-b-2 border-yellow-300 pb-6">
          <h1 className="text-3xl font-bold text-[#000524] mb-4">
            شروط التعاقد الملزمة للمتدرب
          </h1>
          <p className="text-gray-600 text-lg">
            يرجى قراءة الشروط التالية بعناية والالتزام بها
          </p>
        </div>

        <div className="space-y-6 mb-8">
          {terms.map((term) => (
            <div 
              key={term.id}
              className="flex items-start p-4 bg-gray-50 rounded-lg border border-gray-200 hover:bg-blue-50 transition-colors duration-300"
            >
              <span className="shrink-0 w-8 h-8 bg-[#000524] text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">
                {term.id}
              </span>
              <p className="text-gray-700 text-right leading-7 flex-1">
                {term.text}
              </p>
            </div>
          ))}
        </div>

        
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