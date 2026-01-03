import { Link } from "react-router-dom";
import { ChevronRight, Calendar, MessageSquare, Rocket } from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";

const steps = [
  { icon: Calendar, text: "Schedule a personalized product demo" },
  { icon: MessageSquare, text: "Discuss your institution's specific requirements" },
  { icon: Rocket, text: "Experience seamless onboarding and implementation" },
];

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

          {/* Content */}
          <div className="relative px-8 py-12 md:px-16 md:py-16 text-center">
            <ScrollAnimation animation="fade-up">
              <span className="inline-block text-sm font-semibold text-white/80 uppercase tracking-wider mb-4">
                Transform Your Institution Today
              </span>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-up" delay={100}>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 max-w-3xl mx-auto">
                Ready to Modernize Education Management?
              </h2>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-up" delay={200}>
              <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
                My Vidyon ERP is trusted by institutions seeking scalable, secure, and future-ready solutions. 
                Join the growing network of schools and colleges embracing digital transformation.
              </p>
            </ScrollAnimation>

            {/* Next Steps */}
            <ScrollAnimation animation="fade-up" delay={300}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
                {steps.map((step, index) => (
                  <div key={index} className="flex items-center gap-2 text-white/70 text-sm">
                    <step.icon className="w-4 h-4" />
                    <span>{step.text}</span>
                  </div>
                ))}
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-up" delay={400}>
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center gap-2 px-8 py-4 font-heading font-semibold text-foreground bg-white rounded-xl hover:bg-white/90 transition-all duration-300 shadow-elevated hover:scale-[1.02]"
              >
                Request a Demo
                <ChevronRight className="w-5 h-5" />
              </Link>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;