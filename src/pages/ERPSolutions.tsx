import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollAnimation from "@/components/ScrollAnimation";
import CTASection from "@/components/CTASection";
import { Link } from "react-router-dom";
import { 
  ChevronRight,
  GraduationCap, 
  ClipboardList, 
  Users2, 
  BarChart3, 
  CreditCard, 
  MessageSquare,
  Calendar,
  BookOpen,
  FileText,
  Shield,
  Bus,
  Library
} from "lucide-react";

const modules = [
  {
    icon: GraduationCap,
    title: "Academic Management",
    description: "Comprehensive curriculum planning, class scheduling, examination management, and grade tracking all in one unified system.",
    features: ["Curriculum mapping", "Timetable automation", "Exam scheduling", "Grade analytics"],
  },
  {
    icon: ClipboardList,
    title: "Attendance Monitoring",
    description: "AI-powered facial recognition and biometric integration for accurate, real-time attendance tracking with parent notifications.",
    features: ["Facial recognition", "Biometric support", "Real-time alerts", "Detailed reports"],
    highlight: true,
  },
  {
    icon: Users2,
    title: "Student Information System",
    description: "Centralized database for all student records including enrollment, academic history, health records, and documents.",
    features: ["Digital enrollment", "Document management", "Health records", "Alumni tracking"],
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description: "Powerful dashboards with actionable insights, custom reports, and predictive analytics for informed decision-making.",
    features: ["Custom dashboards", "Predictive analytics", "Export capabilities", "Trend analysis"],
  },
  {
    icon: CreditCard,
    title: "Fee Management",
    description: "Streamlined billing, online payment gateway integration, automated receipts, and fee defaulter tracking.",
    features: ["Online payments", "Auto-receipts", "Payment reminders", "Financial reports"],
  },
  {
    icon: MessageSquare,
    title: "Communication Hub",
    description: "Multi-channel messaging between teachers, students, and parents with push notifications and announcements.",
    features: ["Push notifications", "Group messaging", "Announcements", "SMS integration"],
  },
  {
    icon: Calendar,
    title: "Event Management",
    description: "Plan and manage school events, holidays, activities with integrated calendar and parent RSVPs.",
    features: ["Event calendar", "RSVP management", "Resource booking", "Reminders"],
  },
  {
    icon: BookOpen,
    title: "Library Management",
    description: "Complete library automation with book cataloging, issue/return tracking, and fine management.",
    features: ["Book cataloging", "Barcode scanning", "Due reminders", "Fine tracking"],
  },
  {
    icon: FileText,
    title: "Document Management",
    description: "Secure digital document storage, transfer certificates, and automated report card generation.",
    features: ["Cloud storage", "TC generation", "Report cards", "Digital signatures"],
  },
  {
    icon: Shield,
    title: "User & Access Control",
    description: "Role-based access with granular permissions ensuring data security and privacy compliance.",
    features: ["Role management", "Audit logs", "Data encryption", "GDPR compliant"],
  },
  {
    icon: Bus,
    title: "Transport Management",
    description: "Vehicle tracking, route optimization, and transport fee management with driver assignment.",
    features: ["GPS tracking", "Route planning", "Fee management", "Driver allocation"],
  },
  {
    icon: Library,
    title: "Hostel Management",
    description: "Room allocation, mess management, visitor tracking, and hostel fee collection.",
    features: ["Room allocation", "Mess management", "Visitor logs", "Fee collection"],
  },
];

const ERPSolutions = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-28 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
        
        <div className="container-custom relative">
          <ScrollAnimation animation="fade-up">
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              ERP Solutions
            </span>
          </ScrollAnimation>
          
          <ScrollAnimation animation="fade-up" delay={100}>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-5 max-w-4xl">
              Complete Educational{" "}
              <span className="text-gradient">ERP Platform</span>
            </h1>
          </ScrollAnimation>
          
          <ScrollAnimation animation="fade-up" delay={200}>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed mb-6">
              Our modular ERP system seamlessly integrates every aspect of educational 
              institution management. Pick the modules you need, or deploy the complete suite.
            </p>
          </ScrollAnimation>

          <ScrollAnimation animation="fade-up" delay={300}>
            <Link to="/contact" className="btn-cta">
              Schedule a Demo
              <ChevronRight className="w-5 h-5" />
            </Link>
          </ScrollAnimation>
        </div>
      </section>

      {/* Modules Grid */}
      <section className="py-12 md:py-16">
        <div className="container-custom">
          <ScrollAnimation animation="fade-up">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-center mb-3">
              12 Integrated <span className="text-gradient">Modules</span>
            </h2>
          </ScrollAnimation>
          
          <ScrollAnimation animation="fade-up" delay={100}>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10">
              Each module is designed to work independently or as part of the complete ecosystem. 
              Start small and scale as you grow.
            </p>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {modules.map((module, index) => (
              <ScrollAnimation key={index} animation="fade-up" delay={index * 50}>
                <div className={`card-elevated p-5 h-full ${module.highlight ? "ring-2 ring-primary/50" : ""}`}>
                  {module.highlight && (
                    <span className="inline-block text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full mb-3">
                      Most Popular
                    </span>
                  )}
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4">
                    <module.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2">{module.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">{module.description}</p>
                  <ul className="space-y-1.5">
                    {module.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-12 md:py-16 bg-foreground text-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <ScrollAnimation animation="fade-right">
                <h2 className="font-heading text-2xl md:text-3xl font-bold mb-5">
                  Seamless <span className="text-primary">Integration</span>
                </h2>
              </ScrollAnimation>
              
              <ScrollAnimation animation="fade-right" delay={100}>
                <p className="text-background/70 leading-relaxed mb-5">
                  Our ERP platform is designed with interoperability in mind. All modules share a 
                  unified database, ensuring data consistency and eliminating redundancy.
                </p>
              </ScrollAnimation>
              
              <ScrollAnimation animation="fade-right" delay={200}>
                <ul className="space-y-3">
                  {[
                    "Single sign-on across all modules",
                    "Real-time data synchronization",
                    "Unified reporting dashboard",
                    "API access for custom integrations",
                    "Third-party app marketplace",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-background/80 text-sm">
                      <ChevronRight className="w-4 h-4 text-primary shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </ScrollAnimation>
            </div>
            
            <ScrollAnimation animation="fade-left">
              <div className="relative">
                {/* Central Hub */}
                <div className="w-28 h-28 rounded-full bg-primary flex items-center justify-center mx-auto z-10 relative">
                  <span className="font-heading font-bold text-primary-foreground text-sm">My Vidyon</span>
                </div>
                
                {/* Orbiting Modules */}
                <div className="absolute inset-0 animate-spin-slow" style={{ animationDuration: "30s" }}>
                  {[GraduationCap, ClipboardList, BarChart3, CreditCard].map((Icon, index) => (
                    <div
                      key={index}
                      className="absolute w-10 h-10 rounded-full bg-background/10 flex items-center justify-center"
                      style={{
                        top: `${50 + 40 * Math.sin((index * Math.PI) / 2)}%`,
                        left: `${50 + 40 * Math.cos((index * Math.PI) / 2)}%`,
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                  ))}
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

export default ERPSolutions;
