import { useForm } from "react-hook-form";
import Transition from "../components/Transition";
import { Link } from "react-router-dom";
import { FaInfoCircle } from "react-icons/fa";

function BookingtPage({ targetNumber }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const text = `
👤 الاسم: ${data.name}
📞 رقم الهاتف: ${data.phone}
🏠 العنوان: ${data.address}
📚 اسم الكورس/الدورة: ${data.course}
🆔 الرقم القومي: ${data.nationalId}
📧 البريد الإلكتروني: ${data.email}
    `;
    const waUrl = `https://wa.me/${targetNumber}?text=${encodeURIComponent(
      text
    )}`;
    window.open(waUrl, "_blank");
    reset();
  };

  return (
    <Transition>
  
      <div
        dir="auto"
        className="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-900 to-[#000524] px-4 py-8"
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-4xl bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl border-2 border-yellow-400 overflow-hidden"
        >
          {/* الهيدر */}
          <div className="bg-linear-to-r from-[#000524] to-gray-900 p-8 text-center border-b border-yellow-400">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              نموذج التسجيل في الدورات
            </h2>
            <p dir="ltr" className="text-yellow-400 text-md md:text-lg">
              American Council للتدريب والبرمجيات
            </p>
            <Link
              className="flex justify-center items-center gap-3 text-white mt-2 text-[14px] sm:text-[16px]"
              to={"/trainingterms"}
            >
              <p className="border-b-2 border-red-500">
                برجاء قراءه جميع الشروط قبل التسجيل{" "}
              </p>
              <span className="bg-red-600 p-1 rounded-full  ">
                <FaInfoCircle />
              </span>
            </Link>
          </div>

          <div className="p-6 md:p-8">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">
                  الاسم الكامل *
                </label>
                <input
                  {...register("name", {
                    required: "الاسم مطلوب",
                    minLength: {
                      value: 3,
                      message: "الاسم يجب أن يكون على الأقل 3 أحرف",
                    },
                  })}
                  placeholder="اكتب اسمك بالكامل"
                  className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 outline-0 transition-all duration-300 bg-white/50"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                    <span>⚠</span>
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">
                  رقم الهاتف *
                </label>
                <input
                  {...register("phone", {
                    required: "رقم الهاتف مطلوب",
                    pattern: {
                      value: /^01[0-9]{9}$/,
                      message:
                        "رقم الهاتف غير صحيح (يجب أن يبدأ بـ 01 ويكون 11 رقمًا)",
                    },
                  })}
                  placeholder="مثال: 01012345678"
                  className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 outline-0 transition-all duration-300 bg-white/50"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                    <span>⚠</span>
                    {errors.phone.message}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">
                  البريد الإلكتروني *
                </label>
                <input
                  {...register("email", {
                    required: "البريد الإلكتروني مطلوب",
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@gmail\.com$/,
                      message: "يجب أن يكون بريد Gmail صحيح",
                    },
                  })}
                  placeholder="example@gmail.com"
                  className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 outline-0 transition-all duration-300 bg-white/50"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                    <span>⚠</span>
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">
                  العنوان *
                </label>
                <input
                  {...register("address", {
                    required: "العنوان مطلوب",
                    minLength: { value: 5, message: "اكتب عنوانًا واضحًا" },
                  })}
                  placeholder="اكتب عنوانك بالكامل"
                  className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 outline-0 transition-all duration-300 bg-white/50"
                />
                {errors.address && (
                  <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                    <span>⚠</span>
                    {errors.address.message}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">
                  الرقم القومي *
                </label>
                <input
                  {...register("nationalId", {
                    required: "الرقم القومي مطلوب",
                    pattern: {
                      value: /^[0-9]{14}$/,
                      message: "الرقم القومي يجب أن يكون 14 رقمًا",
                    },
                  })}
                  placeholder="اكتب رقمك القومي 14 رقم"
                  className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 outline-0 transition-all duration-300 bg-white/50"
                />
                {errors.nationalId && (
                  <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                    <span>⚠</span>
                    {errors.nationalId.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">
                  اسم الكورس أو الدورة *
                </label>
                <input
                  {...register("course", {
                    required: "اسم الكورس مطلوب",
                    minLength: { value: 2, message: "اسم الكورس قصير جدًا" },
                  })}
                  placeholder="اكتب اسم الكورس أو الدورة التي ترغب في التسجيل بها"
                  className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 outline-0 transition-all duration-300 bg-white/50"
                />
                {errors.course && (
                  <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                    <span>⚠</span>
                    {errors.course.message}
                  </p>
                )}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between pt-6 border-t border-gray-200">
              <button
                type="submit"
                className="cursor-pointer w-full sm:w-auto bg-linear-to-r from-yellow-400 to-yellow-500 text-[#000524] font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>📱</span>
                أرسل على واتساب
              </button>

              <button
                type="button"
                onClick={() => reset()}
                className="cursor-pointer w-full sm:w-auto text-gray-600 hover:text-gray-800 font-medium py-3 px-6 rounded-lg border border-gray-300 hover:border-gray-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>🔄</span>
                مسح الحقول
              </button>
            </div>
          </div>
        </form>
      </div>
    </Transition>
  );
}

export default BookingtPage;