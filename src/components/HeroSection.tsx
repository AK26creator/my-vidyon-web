import { Link } from "react-router-dom";
import { ChevronRight, Play, Sparkles } from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-20">
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground/80">
              Trusted by 500+ Educational Institutions
            </span>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animation="fade-up" delay={100}>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 max-w-5xl mx-auto">
            Transforming Education with{" "}
            <span className="text-gradient">Intelligent ERP</span>{" "}
            Solutions
          </h1>
        </ScrollAnimation>

        <ScrollAnimation animation="fade-up" delay={200}>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            Streamline your institution's operations with our comprehensive ERP platform. 
            From automated attendance tracking to seamless administration — 
            we've got your entire ecosystem covered.
          </p>
        </ScrollAnimation>

        <ScrollAnimation animation="fade-up" delay={300}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="btn-cta text-base">
              Request a Demo
              <ChevronRight className="w-5 h-5" />
            </Link>
            <Link to="/attendance-system" className="btn-outline text-base group">
              <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Explore Attendance System
            </Link>
          </div>
        </ScrollAnimation>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-muted-foreground">Scroll to explore</span>
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 rounded-full bg-primary animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
