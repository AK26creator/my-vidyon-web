import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollAnimation from "@/components/ScrollAnimation";
import CTASection from "@/components/CTASection";
import { 
  Zap, 
  Lock, 
  Cloud, 
  Headphones, 
  RefreshCw, 
  Settings,
  Palette,
  Globe,
  Smartphone,
  Database,
  Code,
  LineChart,
  Users,
  Clock,
  CheckCircle2
} from "lucide-react";

const coreFeatures = [
  {
    icon: Zap,
    title: "Lightning Fast Performance",
    description: "Optimized infrastructure ensures sub-second response times across all modules, even during peak usage.",
    stats: "< 200ms response time",
  },
  {
    icon: Lock,
    title: "Enterprise-Grade Security",
    description: "End-to-end encryption, role-based access control, and compliance with global data protection regulations.",
    stats: "256-bit encryption",
  },
  {
    icon: Cloud,
    title: "Cloud-Native Architecture",
    description: "Access your data anywhere, anytime. Our cloud infrastructure ensures 99.99% uptime with automatic failover.",
    stats: "99.99% uptime SLA",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description: "Round-the-clock support via phone, email, and chat. Dedicated account managers for enterprise clients.",
    stats: "24/7 availability",
  },
  {
    icon: RefreshCw,
    title: "Automatic Updates",
    description: "Continuous improvements and new features delivered seamlessly without any downtime or manual intervention.",
    stats: "Monthly releases",
  },
  {
    icon: Settings,
    title: "Complete Customization",
    description: "Tailor every aspect of the system to match your institution's unique workflow and branding requirements.",
    stats: "100+ config options",
  },
];

const technicalFeatures = [
  {
    icon: Database,
    title: "Robust Data Management",
    description: "Secure, scalable database with automated backups and disaster recovery.",
  },
  {
    icon: Code,
    title: "Open API",
    description: "RESTful APIs for seamless integration with existing systems and third-party tools.",
  },
  {
    icon: Globe,
    title: "Multi-Language Support",
    description: "Full localization support with 15+ languages and regional date/time formats.",
  },
  {
    icon: Smartphone,
    title: "Native Mobile Apps",
    description: "Dedicated iOS and Android apps for teachers, students, and parents.",
  },
  {
    icon: Palette,
    title: "White-Label Options",
    description: "Complete branding customization including logo, colors, and domain.",
  },
  {
    icon: LineChart,
    title: "Advanced Analytics",
    description: "AI-powered insights with predictive analytics and trend forecasting.",
  },
];

const comparisonPoints = [
  { feature: "Real-time Sync", us: true, others: false },
  { feature: "AI-Powered Analytics", us: true, others: false },
  { feature: "Native Mobile Apps", us: true, others: true },
  { feature: "Offline Mode", us: true, others: false },
  { feature: "Custom Branding", us: true, others: false },
  { feature: "24/7 Support", us: true, others: false },
  { feature: "API Access", us: true, others: true },
  { feature: "No Setup Fee", us: true, others: false },
];

const Features = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-28 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
        
        <div className="container-custom relative text-center">
          <ScrollAnimation animation="fade-up">
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              Platform Features
            </span>
          </ScrollAnimation>
          
          <ScrollAnimation animation="fade-up" delay={100}>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-5 max-w-4xl mx-auto">
              Built for <span className="text-gradient">Modern Education</span>
            </h1>
          </ScrollAnimation>
          
          <ScrollAnimation animation="fade-up" delay={200}>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Every feature purposefully designed by educators, for educators. 
              Experience the perfect blend of power and simplicity.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-12 md:py-16">
        <div className="container-custom">
          <ScrollAnimation animation="fade-up">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-center mb-3">
              Core <span className="text-gradient">Capabilities</span>
            </h2>
          </ScrollAnimation>
          
          <ScrollAnimation animation="fade-up" delay={100}>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10">
              The foundation of everything we offer. These features power every module in our platform.
            </p>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {coreFeatures.map((feature, index) => (
              <ScrollAnimation key={index} animation="fade-up" delay={index * 80}>
                <div className="group card-elevated p-6 h-full hover:border-primary/30">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <span className="text-xs font-semibold text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                      {feature.stats}
                    </span>
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Features */}
      <section className="py-12 md:py-16 bg-foreground text-background">
        <div className="container-custom">
          <ScrollAnimation animation="fade-up">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-center mb-3">
              Technical <span className="text-primary">Excellence</span>
            </h2>
          </ScrollAnimation>
          
          <ScrollAnimation animation="fade-up" delay={100}>
            <p className="text-background/70 text-center max-w-2xl mx-auto mb-10">
              Under the hood, our platform is built on cutting-edge technology for reliability and scale.
            </p>
          </ScrollAnimation>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {technicalFeatures.map((feature, index) => (
              <ScrollAnimation key={index} animation="scale" delay={index * 80}>
                <div className="p-5 rounded-2xl bg-background/5 border border-background/10 hover:bg-background/10 transition-colors">
                  <feature.icon className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-heading font-semibold text-base text-background mb-2">{feature.title}</h3>
                  <p className="text-background/60 text-sm">{feature.description}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-12 md:py-16">
        <div className="container-custom">
          <ScrollAnimation animation="fade-up">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-center mb-3">
              Why <span className="text-gradient">My Vidyon</span>?
            </h2>
          </ScrollAnimation>
          
          <ScrollAnimation animation="fade-up" delay={100}>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10">
              See how we stack up against traditional ERP solutions.
            </p>
          </ScrollAnimation>

          <ScrollAnimation animation="fade-up" delay={200}>
            <div className="max-w-2xl mx-auto card-elevated overflow-hidden">
              <div className="grid grid-cols-3 gap-4 p-4 bg-muted/50 font-heading font-semibold text-sm">
                <div>Feature</div>
                <div className="text-center">My Vidyon</div>
                <div className="text-center">Others</div>
              </div>
              {comparisonPoints.map((point, index) => (
                <div key={index} className="grid grid-cols-3 gap-4 p-3 border-t border-border items-center">
                  <div className="text-sm">{point.feature}</div>
                  <div className="flex justify-center">
                    {point.us ? (
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                    ) : (
                      <div className="w-5 h-5 rounded-full border-2 border-muted-foreground/30" />
                    )}
                  </div>
                  <div className="flex justify-center">
                    {point.others ? (
                      <CheckCircle2 className="w-5 h-5 text-muted-foreground/50" />
                    ) : (
                      <div className="w-5 h-5 rounded-full border-2 border-muted-foreground/30" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Users, value: "50K+", label: "Daily Active Users" },
              { icon: Clock, value: "< 1s", label: "Average Load Time" },
              { icon: RefreshCw, value: "99.99%", label: "Uptime Guarantee" },
              { icon: Headphones, value: "< 2hr", label: "Avg. Response Time" },
            ].map((stat, index) => (
              <ScrollAnimation key={index} animation="fade-up" delay={index * 100}>
                <div className="text-center card-elevated p-6">
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="font-heading text-3xl font-bold text-gradient mb-1">{stat.value}</div>
                  <div className="text-muted-foreground text-sm">{stat.label}</div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
};

export default Features;
