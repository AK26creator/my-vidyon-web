import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";

export const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/hero-background.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-foreground/60" />

      {/* Content */}
      <div className="relative z-10 container-custom text-center">
        <ScrollAnimation animation="fade-up">
          <p className="text-lg md:text-xl text-primary font-semibold mb-4">
            My Vidyon ERP System
          </p>
        </ScrollAnimation>

        <ScrollAnimation animation="fade-up" delay={100}>
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-8 max-w-4xl mx-auto text-background">
            Transforming Education Management Through{" "}
            <span className="text-primary">Intelligent Digital Solutions</span>
          </h1>
        </ScrollAnimation>

        <ScrollAnimation animation="fade-up" delay={200}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="btn-cta text-base">
              Request a Demo
              <ChevronRight className="w-5 h-5" />
            </Link>
            <Link to="/erp-solutions" className="inline-flex items-center justify-center gap-2 px-6 py-3 font-heading font-semibold text-background border-2 border-background/30 rounded-xl hover:bg-background/10 transition-all duration-300">
              Explore Solutions
            </Link>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default HeroSection;
