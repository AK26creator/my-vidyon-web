import { Link } from "react-router-dom";
import { ChevronRight, Camera, LayoutDashboard, CreditCard, BarChart3 } from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";

const features = [
  {
    icon: Camera,
    title: "Smart Attendance Monitoring",
    description: "Camera-based attendance detection with real-time tracking for accuracy and reliability.",
  },
  {
    icon: LayoutDashboard,
    title: "Comprehensive Dashboards",
    description: "Role-based dashboards offering tailored access for administrators, teachers, parents, and students.",
  },
  {
    icon: CreditCard,
    title: "Secure Fee Management",
    description: "Transparent, streamlined, and secure payment processing with complete financial visibility.",
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    description: "Actionable academic insights through data-driven performance reports.",
  },
];

export const AboutSection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      
      <div className="container-custom relative">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <ScrollAnimation animation="fade-up">
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              About My Vidyon
            </span>
          </ScrollAnimation>

          <ScrollAnimation animation="fade-up" delay={100}>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Redefining Educational Management,{" "}
              <span className="text-gradient">Digitally</span>
            </h2>
          </ScrollAnimation>

          <ScrollAnimation animation="fade-up" delay={200}>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              My Vidyon is a powerful and comprehensive ERP platform built exclusively for schools and colleges. 
              Designed to simplify daily operations and enhance collaboration, My Vidyon connects students, 
              teachers, parents, and administrators through a single, unified digital ecosystem.
            </p>
          </ScrollAnimation>

          <ScrollAnimation animation="fade-up" delay={300}>
            <p className="text-muted-foreground leading-relaxed">
              From smart attendance tracking to secure fee management and performance analytics, 
              My Vidyon delivers real-time insights that empower institutions to operate efficiently, 
              transparently, and confidently in today's digital-first education environment.
            </p>
          </ScrollAnimation>
        </div>

        {/* Key Features Label */}
        <ScrollAnimation animation="fade-up" delay={400}>
          <div className="text-center mb-8">
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider">
              Key Features
            </span>
          </div>
        </ScrollAnimation>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <ScrollAnimation key={index} animation="fade-up" delay={450 + index * 80}>
              <div className="card-elevated p-6 text-center h-full">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        {/* CTA */}
        <ScrollAnimation animation="fade-up" delay={800}>
          <div className="text-center mt-10">
            <Link to="/about" className="btn-primary">
              Learn More About Us
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default AboutSection;