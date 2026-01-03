import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ERPSection from "@/components/ERPSection";
import AttendanceSection from "@/components/AttendanceSection";
import FeaturesSection from "@/components/FeaturesSection";
import TechStackSection from "@/components/TechStackSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ERPSection />
      <AttendanceSection />
      <FeaturesSection />
      <TechStackSection />
      <WhyChooseSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
