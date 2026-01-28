import { Mail, Phone  } from "lucide-react";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

function ContactCode() {
  return (
    <section
      id="contact"
      className="py-24 px-6 bg-linear-to-b from-transparent to-[#00d2ff]/5"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-black mb-8 text-white">
          هل مشروعك القادم هو <span className="text-[#f7b500]">قصة النجاح</span>{" "}
          القادمة؟
        </h2>
        <p className="text-slate-400 text-lg mb-12">
          لا تتردد في استشارتنا، فريقنا التقني جاهز لمساعدتك في التخطيط والبناء.
        </p>
        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {/* <a
            href="mailto:info@american-council.com"
            className="flex items-center justify-center gap-4 p-6 bg-white/5 border border-white/10 rounded-3xl hover:border-[#f7b500] transition-all group"
          >
            <Mail className="group-hover:text-[#f7b500]" />
            <span className="font-bold">info@american-council.com</span>
          </a> */}
          <a
            href="tel:+12345678"
            className="flex items-center justify-center gap-4 p-6 bg-white/5 border border-white/10 rounded-3xl hover:border-green-500 transition-all group"
          >
            <FaWhatsapp className="group-hover:text-green-500 text-3xl"  />
            <a href="https://api.whatsapp.com/send/?phone=201008790584&text&type=phone_number&app_absent=0" className="font-bold">واتساب</a>
          </a>
          <a
            href="tel:+12345678"
            className="flex items-center justify-center gap-4 p-6 bg-white/5 border border-white/10 rounded-3xl hover:border-[#00d2ff] transition-all group"
          >
            <Phone className="group-hover:text-[#00d2ff]" />
            <a href="tel:201008790584" className="font-bold">اتصل بنا الآن</a>
          </a>
        </div>
      </div>
    </section>
  );
}

export default ContactCode;
