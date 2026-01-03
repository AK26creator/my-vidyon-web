import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollAnimation from "@/components/ScrollAnimation";
import CTASection from "@/components/CTASection";
import { Target, Eye, Heart, Award, Users, Building2, GraduationCap, Globe } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Mission",
    description: "To empower educational institutions with cutting-edge technology that simplifies administration, enhances learning outcomes, and connects communities.",
  },
  {
    icon: Eye,
    title: "Vision",
    description: "To be the global standard for educational ERP solutions, driving digital transformation across institutions of all sizes.",
  },
  {
    icon: Heart,
    title: "Values",
    description: "Integrity, innovation, and impact guide everything we do. We believe technology should serve people, not the other way around.",
  },
];

const stats = [
  { icon: Building2, value: "500+", label: "Institutions Served" },
  { icon: Users, value: "50,000+", label: "Active Daily Users" },
  { icon: GraduationCap, value: "1M+", label: "Students Managed" },
  { icon: Globe, value: "15+", label: "Countries" },
];

const milestones = [
  { year: "2018", title: "Founded", description: "My Vidyon was born from a vision to transform educational management." },
  { year: "2019", title: "First Product", description: "Launched our flagship Attendance Monitoring System." },
  { year: "2020", title: "Rapid Growth", description: "Expanded to 100+ institutions across 5 countries." },
  { year: "2022", title: "Full ERP Suite", description: "Released comprehensive ERP platform with 12 integrated modules." },
  { year: "2024", title: "AI Integration", description: "Introduced AI-powered analytics and facial recognition features." },
];

const About = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-28 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
        
        <div className="container-custom relative">
          <ScrollAnimation animation="fade-up">
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              About Us
            </span>
          </ScrollAnimation>
          
          <ScrollAnimation animation="fade-up" delay={100}>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-5 max-w-4xl">
              Transforming Education Through{" "}
              <span className="text-gradient">Intelligent Technology</span>
            </h1>
          </ScrollAnimation>
          
          <ScrollAnimation animation="fade-up" delay={200}>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              We're not just building software — we're shaping the future of educational 
              management. Our solutions connect administrators, teachers, students, and 
              parents in one seamless ecosystem.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-12 md:py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((item, index) => (
              <ScrollAnimation key={index} animation="fade-up" delay={index * 100}>
                <div className="card-elevated p-6 text-center h-full">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center mx-auto mb-5">
                    <item.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="font-heading font-bold text-xl mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{item.description}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 md:py-16 bg-foreground text-background">
        <div className="container-custom">
          <ScrollAnimation animation="fade-up">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-center mb-10">
              Our Impact in <span className="text-primary">Numbers</span>
            </h2>
          </ScrollAnimation>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <ScrollAnimation key={index} animation="scale" delay={index * 100}>
                <div className="text-center p-5 rounded-2xl bg-background/5 border border-background/10">
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="font-heading text-3xl md:text-4xl font-bold text-primary mb-1">
                    {stat.value}
                  </div>
                  <div className="text-background/70 text-sm">{stat.label}</div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-12 md:py-16">
        <div className="container-custom">
          <ScrollAnimation animation="fade-up">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-center mb-3">
              Our <span className="text-gradient">Journey</span>
            </h2>
          </ScrollAnimation>
          
          <ScrollAnimation animation="fade-up" delay={100}>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10">
              From a small startup to a leading EdTech company, here's how we've grown.
            </p>
          </ScrollAnimation>

          <div className="relative max-w-3xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border" />
            
            {milestones.map((milestone, index) => (
              <ScrollAnimation 
                key={index} 
                animation={index % 2 === 0 ? "fade-right" : "fade-left"} 
                delay={index * 100}
              >
                <div className={`relative flex items-center gap-8 mb-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}>
                  {/* Dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-primary -translate-x-1/2 z-10" />
                  
                  {/* Content */}
                  <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <span className="inline-block text-sm font-semibold text-primary mb-1">{milestone.year}</span>
                    <h3 className="font-heading font-bold text-lg mb-1">{milestone.title}</h3>
                    <p className="text-muted-foreground text-sm">{milestone.description}</p>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <ScrollAnimation animation="fade-right">
                <h2 className="font-heading text-2xl md:text-3xl font-bold mb-5">
                  Why Institutions <span className="text-gradient">Choose Us</span>
                </h2>
              </ScrollAnimation>
              
              <ScrollAnimation animation="fade-right" delay={100}>
                <p className="text-muted-foreground leading-relaxed mb-5">
                  We understand that every institution is unique. That's why our solutions 
                  are built to be flexible, scalable, and intuitive. Our team consists of 
                  education specialists who have walked in your shoes.
                </p>
              </ScrollAnimation>
              
              <ScrollAnimation animation="fade-right" delay={200}>
                <ul className="space-y-3">
                  {[
                    "Deep understanding of educational workflows",
                    "Dedicated implementation and training support",
                    "Continuous innovation based on user feedback",
                    "Transparent pricing with no hidden costs",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <Award className="w-5 h-5 text-primary shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </ScrollAnimation>
            </div>
            
            <ScrollAnimation animation="fade-left">
              <div className="card-elevated p-6">
                <blockquote className="text-base italic text-muted-foreground leading-relaxed mb-5">
                  "My Vidyon transformed how we manage our school. What used to take hours 
                  now takes minutes. The attendance system alone has saved us countless 
                  headaches and improved parent communication significantly."
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="font-heading font-bold text-primary text-sm">RS</span>
                  </div>
                  <div>
                    <div className="font-heading font-semibold text-sm">Dr. Rajesh Sharma</div>
                    <div className="text-xs text-muted-foreground">Principal, Delhi Public School</div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
};

export default About;
