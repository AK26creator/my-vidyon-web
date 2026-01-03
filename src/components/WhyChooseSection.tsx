import { Check } from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";

const reasons = [
  "A truly comprehensive ERP solution tailored for schools and colleges",
  "Built using the latest and most reliable technologies",
  "Fully configurable to adapt to evolving institutional needs",
  "Transparent SaaS pricing with no hidden charges",
  "Cost-effective without compromising on quality",
  "Proven performance with leading educational institutions",
];

export const WhyChooseSection = () => {
  return (
    <section className="section-padding bg-foreground text-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-72 h-72 rounded-full bg-primary blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-secondary blur-3xl" />
      </div>

      <div className="container-custom relative">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <ScrollAnimation animation="fade-up">
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Why Choose{" "}
                <span className="text-primary">My Vidyon?</span>
              </h2>
            </ScrollAnimation>
          </div>

          {/* Reasons Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {reasons.map((reason, index) => (
              <ScrollAnimation key={index} animation="fade-up" delay={index * 80}>
                <div className="flex items-start gap-3 p-4 rounded-xl bg-background/5 border border-background/10">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-background/80 leading-relaxed">{reason}</span>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;