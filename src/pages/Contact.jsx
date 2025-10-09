import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Contact ()  {
  const [activeTab, setActiveTab] = useState('vodafone');
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

// vodafone cash
  const handelVodafone = () =>{
    copyToClipboard('01012345678');
    setCopied(true);
  }
// instapay
    const handelInstapy = () =>{
    copyToClipboard('ayaelmalah11')
    setCopied(true);
  }
  return (
    <section dir='rtl' className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-500 to-purple-600 py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            تواصل <span className="text-blue-300">معنا</span>
          </h1>
          <div className="w-32 h-1 bg-blue-400 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
            نحن هنا لمساعدتك! اختر طريقة التواصل المناسبة أو استخدم أحد طرق الدفع الآمنة
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            
            {/* WhatsApp Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="flex items-center mb-6">
                <div className="bg-green-500 p-3 rounded-full ml-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893-.001-3.189-1.262-6.209-3.553-8.485"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white">الواتساب</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-white/5 rounded-xl border border-white/10">
                  <span className="text-blue-100 text-lg">الدعم الفني</span>
                  <button 
                    onClick={() => copyToClipboard('+201234567890')}
                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition-all duration-300"
                  >
                    +201234567890
                  </button>
                </div>
                
                <div className="flex justify-between items-center p-4 bg-white/5 rounded-xl border border-white/10">
                  <span className="text-blue-100 text-lg">الاستفسارات</span>
                  <button 
                    onClick={() => copyToClipboard('+201098765432')}
                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition-all duration-300"
                  >
                    +201098765432
                  </button>
                </div>
              </div>
            </div>


          </motion.div>

          {/* Payment Methods */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            
            {/* Payment Tabs */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="flex gap-4 mb-8">
                <button
                  onClick={() => setActiveTab('vodafone')}
                  className={`cursor-pointer flex-1 py-3 rounded-xl font-bold text-lg transition-all duration-300 ${
                    activeTab === 'vodafone' 
                      ? 'bg-red-600 text-white' 
                      : 'bg-white/5 text-blue-100 hover:bg-white/10'
                  }`}
                >
                  فودافون كاش
                </button>
                <button
                  onClick={() => setActiveTab('instapay')}
                  className={`cursor-pointer flex-1 py-3 rounded-xl font-bold text-lg transition-all duration-300 ${
                    activeTab === 'instapay' 
                      ? 'bg-purple-600 text-white' 
                      : 'bg-white/5 text-blue-100 hover:bg-white/10'
                  }`}
                >
                  انستاباي
                </button>
              </div>

              {/* Vodafone Cash Content */}
              {activeTab === 'vodafone' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-6"
                >
                  <div className="text-center">
                    <div className="bg-red-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.9 10.9C14.7 9 9.35 8.8 6.3 9.75C5.8 9.9 5.3 9.6 5.15 9.1C5 8.6 5.3 8.1 5.8 7.95C9.3 6.9 15.15 7.15 18.85 9.35C19.3 9.6 19.45 10.2 19.2 10.65C18.95 11 18.35 11.15 17.9 10.9ZM17.8 13.7C17.55 13.2 17.05 12.95 16.55 13.1C13.95 13.95 10.15 14.2 7.8 13.5C7.3 13.35 6.75 13.6 6.6 14.1C6.45 14.6 6.7 15.15 7.2 15.3C10.15 16.1 14.45 15.85 17.45 14.85C17.95 14.65 18.05 14.15 17.8 13.7ZM16.6 16.6C16.4 16.1 15.85 15.9 15.35 16.05C13.8 16.55 10.3 16.9 8.55 16.25C8.05 16.1 7.5 16.3 7.35 16.8C7.2 17.3 7.4 17.85 7.9 18C10.3 18.75 14.4 18.4 16.35 17.75C16.8 17.55 16.8 17.05 16.6 16.6Z"/>
                      </svg>
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-2">فودافون كاش</h4>
                    <p className="text-blue-100">رقم المحفظة: <span className="font-bold text-white">01012345678</span></p>
                  </div>

                  <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                    <h5 className="text-lg font-bold text-white mb-4">خطوات الدفع:</h5>
                    <ol className="text-blue-100 space-y-3 text-right list-decimal list-inside">
                      <li>افتح تطبيق فودافون كاش على هاتفك</li>
                      <li>اختر "إرسال أموال"</li>
                      <li>أدخل الرقم: <span className="font-bold text-white">01012345678</span></li>
                      <li>أدخل المبلغ المطلوب</li>
                      <li>أدخل الرقم السري الخاص بك</li>
                      <li>احفظ إيصال الدفع كدليل على السداد</li>
                    </ol>
                  </div>

                  <button 
                    onClick={handelVodafone}
                    className="cursor-pointer w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105"
                  >
                   {copied ? 'تم النسخ!' : 'نسخ رقم المحفظة'}
                  </button>
                </motion.div>
              )}

              {/* Instapay Content */}
              {activeTab === 'instapay' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-6"
                >
                  <div className="text-center">
                    <div className="bg-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-2">انستاباي</h4>
                    <p className="text-blue-100">اسم المستخدم: <span className="font-bold text-white">ayaelmalah11</span></p>
                  </div>

                  <div className="bg-white p-2 w-[80%] mx-auto rounded-xl border-2 border-purple-300">
                      <img src="/img/instapay.jpg" className='w-[300px]  h-full mx-auto' alt="" />
                  </div>

                  <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                    <h5 className="text-lg font-bold text-white mb-4">خطوات الدفع:</h5>
                    <ol className="text-blue-100 space-y-3 text-right list-decimal list-inside">
                      <li>افتح تطبيق الانستاباي على هاتفك</li>
                      <li>اختر "مسح باركود" أو "تحويل أموال"</li>
                      <li>اسم المستخدم: <span className="font-bold text-white">ayaelmalah11</span></li>
                      <li>أدخل المبلغ المطلوب</li>
                      <li>تأكد من البيانات ثم أكد العملية</li>
                      <li>احفظ إيصال الدفع للمتابعة</li>
                    </ol>
                  </div>

                  <button 
                    onClick={handelInstapy}
                    className=" cursor-pointer w-full bg-purple-600 hover:bg-purple-700 text-white py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105"
                  >
                    {copied ? 'تم النسخ!' : 'نسخ اسم المستخدم'}
                  </button>
                  
                </motion.div>
              )}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
