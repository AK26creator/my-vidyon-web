import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";

export const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 container-custom text-center">
        <ScrollAnimation animation="fade-up">
          <p className="text-lg md:text-xl text-primary font-semibold mb-4">
            My Vidyon ERP System
          </p>
        </ScrollAnimation>

        <ScrollAnimation animation="fade-up" delay={100}>
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-8 max-w-4xl mx-auto">
            Transforming Education Management Through{" "}
            <span className="text-gradient">Intelligent Digital Solutions</span>
          </h1>
        </ScrollAnimation>

        <ScrollAnimation animation="fade-up" delay={200}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="btn-cta text-base">
              Request a Demo
              <ChevronRight className="w-5 h-5" />
            </Link>
            <Link to="/erp-solutions" className="btn-outline text-base">
              Explore Solutions
            </Link>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default HeroSection;
