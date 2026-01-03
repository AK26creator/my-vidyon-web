import { Users, Clock, Monitor, Headphones } from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";

const benefits = [
  {
    icon: Users,
    value: "95%",
    title: "Parent Satisfaction",
    description: "Enhanced trust through real-time access to student activities and updates.",
  },
  {
    icon: Clock,
    value: "60%",
    title: "Operational Time Savings",
    description: "Automation reduces administrative workload significantly.",
  },
  {
    icon: Monitor,
    value: "100%",
    title: "Digital Integration",
    description: "Completely paperless workflows for modern institutions.",
  },
  {
    icon: Headphones,
    value: "24/7",
    title: "Platform Accessibility",
    description: "Anytime, anywhere access for all stakeholders.",
  },
];

export const FeaturesSection = () => {
  return (
    <section className="section-padding relative overflow-hidden bg-muted/30">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <ScrollAnimation animation="fade-up">
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              Key Benefits Across Stakeholders
            </span>
          </ScrollAnimation>

          <ScrollAnimation animation="fade-up" delay={100}>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Measurable{" "}
              <span className="text-gradient">Impact</span>
            </h2>
          </ScrollAnimation>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <ScrollAnimation key={index} animation="fade-up" delay={index * 80}>
              <div className="group relative p-6 rounded-3xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-card text-center">
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-soft">
                  <benefit.icon className="w-7 h-7 text-primary-foreground" />
                </div>

                {/* Value */}
                <div className="font-heading font-bold text-3xl text-primary mb-2">
                  {benefit.value}
                </div>

                {/* Content */}
                <h3 className="font-heading font-semibold text-lg mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {benefit.description}
                </p>

                {/* Gradient Border Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl" />
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;