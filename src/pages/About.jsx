import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <section id="about" className="py-16 bg-gradient-to-br from-blue-50 to-white" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            من <span className="text-blue-600">نحن</span>
          </h2>
          <motion.div 
            className="w-24 h-1 bg-blue-500 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : { width: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Text Content */}
            <div className="space-y-8">
              {/* First Card */}
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300 group cursor-pointer"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start mb-4">
                  <motion.div 
                    className="bg-blue-100 p-3 rounded-full mr-4"
                    animate={{
                      y: [-5, 5, -5],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </motion.div>
                  <p className="text-xl text-gray-700 leading-relaxed text-right">
                    تأسس المجلس الأمريكي عام <span className="text-blue-600 font-semibold">2013</span> وبدأ رسالة التعليم والتدريب من <span className="text-blue-600 font-semibold">2014</span>. 
                    تم ترخيصه واعتماده رسمياً عام <span className="text-blue-600 font-semibold">2020</span> من وزارة الاتصالات مركز تكنولوجيا المعلومات.
                  </p>
                </div>
              </motion.div>

              {/* Second Card */}
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-gradient-to-l from-blue-600 to-blue-700 p-8 rounded-2xl text-white shadow-lg group cursor-pointer"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start">
                  <div className="bg-white bg-opacity-20 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <p className="text-xl leading-relaxed text-right">
                    نحن نعمل على تأهيل وتدريب الشباب المصري والعربي لاكتساب المعرفة العلمية 
                    وتطوير المهارات اللازمة لهم والمساهمة في دعم المؤسسات العامة والخاصة.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { number: "+7", text: "سنوات من الخبرة", delay: 0.6 },
                { number: "2020", text: "سنة الاعتماد الرسمي", delay: 0.8 },
                { number: "100%", text: "جودة التدريب", delay: 1.0 },
                { number: "∞", text: "طموح لا يتوقف", delay: 1.2 }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                  transition={{ 
                    type: "spring",
                    stiffness: 200,
                    delay: stat.delay
                  }}
                  className="bg-white p-6 rounded-xl shadow-lg border border-blue-100 text-center cursor-pointer"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                  }}
                >
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.text}
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>

        {/* Floating Background Elements */}
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20"
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-40 right-20 w-16 h-16 bg-blue-300 rounded-full opacity-30"
          animate={{
            y: [0, 15, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>
    </section>
  )
}

export default About;