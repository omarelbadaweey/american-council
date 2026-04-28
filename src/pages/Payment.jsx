import React, { useState } from "react";
import Transition from "../components/Transition";
import Back from "../components/Back";

export default function PaymentMethods() {
  const paymentData = {
    vodafoneCash: {
      number: "01098825176",
      owner: " ايه محمدالملاح",
    },
    instapay: {
      email: "ayaelmalah11@instapay",
      businessName: "ayaelmalah11",
      qrCode: "/img/instapay.jpg",
    },
    paypal: {
      email: "ayaelmalah11@instapay",
      businessName: "ayaelmalah11",
    },
  };

  const methods = [
    {
      id: 1,
      name: "Vodafone Cash",
      description: "الدفع عبر محفظة فودافون كاش",
      type: "vodafone",
      data: paymentData.vodafoneCash,
    },
    {
      id: 2,
      name: "InstaPay",
      icon: (
        <svg viewBox="0 0 24 24" className="text-green-500 text-4xl">
          <path
            fill="currentColor"
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
          />
        </svg>
      ),
      description: "التحويل الفوري عبر InstaPay",
      type: "instapay",
      data: paymentData.instapay,
    },
  ];

  const [copy, setCopy] = useState(false);
  
  const copyToClipboard = (text) => {

    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(() => {
        setCopy(true);
        setTimeout(() => setCopy(false), 2000);
      }).catch(() => {

        fallbackCopy(text);
      });
    } else {
      fallbackCopy(text);
    }
  };

  const fallbackCopy = (text) => {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    
    try {
      document.execCommand('copy');
      setCopy(true);
      setTimeout(() => setCopy(false), 3000);
    } catch (err) {
      alert(`رقم ${text} - يرجى نسخه يدوياً${err}`);
    }
    
    document.body.removeChild(textArea);
  };

  return (
    <Transition>
      {/*  */}
      <section className="bg-gray-300 text-white pb-10 ">
        <Back/>
        {copy && (
          <div className="bg-green-600 w-full fixed top-30 z-10 left-0 h-20 text-center text-4xl font-bold content-center">
            تم النسخ
          </div>
        )}
        <div className="text-center mb-16 bg-[#000524] w-full p-10 border-b-10 border-yellow-500 ">
          <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-6">
            طرق الدفع المتاحة
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            اختر طريقة الدفع المناسبة وقم بإتمام عملية الدفع بسهولة وأمان تام
          </p>
        </div>

        <div className="max-w-6xl mx-auto px-5">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {methods.map((method) => (
              <div
                key={method.id}
                className="group bg-linear-to-br from-[#020b3a] to-[#0f1a4a] border border-yellow-400/30 rounded-3xl p-8 shadow-2xl hover:shadow-yellow-400/20 hover:border-yellow-400 transition-all duration-500 hover:scale-[1.03]"
              >

                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-yellow-400/10 rounded-2xl">
                    {method.icon}
                  </div>
                  <div className="text-right flex-1">
                    <h3 className="text-2xl font-bold text-yellow-400 mb-1">
                      {method.name}
                    </h3>
                    <p className="text-gray-400">{method.description}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {method.type === "vodafone" && (
                    <>
                      <div className="bg-black/30 rounded-2xl p-4 border border-yellow-400/20">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-gray-400">رقم المحفظة</span>
                          <button
                            onClick={() => copyToClipboard(method.data.number)}
                            className={`cursor-pointer bg-yellow-400 text-[#000524] px-3 py-0.5 rounded-2xl transition text-md font-bold`}
                          >
                            نسخ
                          </button>
                        </div>
                        <div className="text-lg font-mono text-yellow-400 bg-black/50 p-3 rounded-xl text-center">
                          {method.data.number}
                        </div>
                        <div className="text-center text-gray-400 text-sm mt-2">
                          {method.data.owner}
                        </div>
                      </div>
                    </>
                  )}

                  {method.type === "paypal" && (
                    <div className="bg-black/30 rounded-2xl p-4 border border-yellow-400/20">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-400">البريد الإلكتروني</span>
                        <button
                          onClick={() => copyToClipboard(method.data.email)}
                          className={`cursor-pointer bg-yellow-400 text-[#000524] px-3 py-0.5 rounded-2xl transition text-md font-bold`}
                        >
                          نسخ
                        </button>
                      </div>
                      <div className="text-md md:text-lg font-mono text-yellow-400 bg-black/50 p-3 rounded-xl text-center direction-ltr">
                        {method.data.email}
                      </div>
                      <div className="text-center text-gray-400 text-sm mt-2">
                        {method.data.businessName}
                      </div>
                    </div>
                  )}

                  {method.type === "instapay" && (
                    <>
                      <div className="space-y-3 mb-6">
                        <div className="bg-black/30 rounded-2xl p-4 border border-yellow-400/20">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-gray-400">
                              البريد الإلكتروني
                            </span>
                            <button
                              onClick={() => copyToClipboard(method.data.email)}
                              className={`cursor-pointer bg-yellow-400 text-[#000524] px-3 py-0.5 rounded-2xl transition text-md font-bold`}
                            >
                              نسخ
                            </button>
                          </div>
                          <div className="text-md md:text-lg font-mono text-yellow-400 bg-black/50 p-3 rounded-xl text-center direction-ltr">
                            {method.data.email}
                          </div>
                          <div className="text-center text-gray-400 text-sm mt-2">
                            {method.data.businessName}
                          </div>
                        </div>
                      </div>

                      <div className="text-center">
                        <div className="bg-white p-3 w-50 h-50 rounded-2xl inline-block border-2 border-yellow-400">
                          <img
                            src={method.data.qrCode}
                            alt="InstaPay QR Code"
                            className="w-full h-full mx-auto object-cover"
                          />
                        </div>
                        <p className="text-gray-400 text-sm mt-4">
                          افتح تطبيق البنك ومسح الباركود لإتمام الدفع
                        </p>
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10 p-6 bg-[#000524] rounded-2xl border border-yellow-400/30">
            <p className="text-yellow-400 text-lg">
              💡 بعد إتمام الدفع، يرجى إرسال إشعار الدفع على الواتساب: <a href="https://wa.me/201010098924" className="hover:underline">01010098924</a>
            </p>
          </div>
        </div>
      </section>
    </Transition>
  );
}