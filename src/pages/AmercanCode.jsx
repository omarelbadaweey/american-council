import HeaderCode from '../components/HeaderCode';
import HeroCode from '../components/HeroCode';
import ServicesCode from '../components/ServicesCode';
import AboutCode from '../components/AboutCode';
import ProjectsCode from '../components/ProjectsCode';
import ContactCode from '../components/ContactCode';
import FooterCode from '../components/FooterCode';

const AmericanCode = () => {
  return (
    <div className="bg-[#030a1c] overflow-hidden min-h-screen font-sans text-slate-200 selection:bg-[#f7b500] selection:text-black" dir='rtl'>
      {/* Header */}
      <HeaderCode/>
      {/* hero */}
      <HeroCode />
      {/* Services */}
      <ServicesCode/>
      {/* About Us */}
      <AboutCode/>
      {/* Projects */}      
      <ProjectsCode/>
      {/* Contact */}
      <ContactCode/>

      {/* Footer */}
      <FooterCode/>
    </div>
  );
};

export default AmericanCode;