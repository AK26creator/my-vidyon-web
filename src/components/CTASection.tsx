import { Link } from "react-router-dom";
import { ChevronRight, ArrowRight } from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";

export const CTASection = () => {
  return (
    <section className="py-12 md:py-16 relative overflow-hidden">
      <div className="container-custom">
        <div className="relative rounded-3xl overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent" />
          
          {/* Pattern Overlay */}
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />

          {/* Floating Shapes */}
          <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white/10 blur-2xl animate-float" />
          <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-white/10 blur-2xl animate-float-reverse" />

          {/* Content */}
          <div className="relative px-8 py-16 md:px-16 md:py-24 text-center">
            <ScrollAnimation animation="fade-up">
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 max-w-3xl mx-auto">
                Ready to Transform Your Institution?
              </h2>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-up" delay={100}>
              <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                Join 500+ educational institutions already using My Vidyon to streamline 
                their operations and enhance student success.
              </p>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-up" delay={200}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 font-heading font-semibold text-foreground bg-white rounded-xl hover:bg-white/90 transition-all duration-300 shadow-elevated hover:scale-[1.02]"
                >
                  Get Started Today
                  <ChevronRight className="w-5 h-5" />
                </Link>
                <Link 
                  to="/features" 
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 font-heading font-semibold text-white border-2 border-white/30 rounded-xl hover:bg-white/10 transition-all duration-300"
                >
                  View All Features
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </ScrollAnimation>

            {/* Trust Badges */}
            <ScrollAnimation animation="fade-up" delay={300}>
              <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-white/60">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-400" />
                  <span className="text-sm">No setup fee</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-400" />
                  <span className="text-sm">Free trial available</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-400" />
                  <span className="text-sm">Cancel anytime</span>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
