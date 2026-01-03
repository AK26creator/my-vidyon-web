import { Link } from "react-router-dom";
import { 
  ChevronRight, 
  Users, 
  UserCog,
  GraduationCap,
  BookOpen,
  ClipboardCheck,
  FileText,
  CreditCard,
  Bus,
  Calendar,
  Bell,
  FileBarChart
} from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";

const modules = [
  { icon: Users, title: "Student Management" },
  { icon: UserCog, title: "Staff Management" },
  { icon: GraduationCap, title: "Parent Portal" },
  { icon: BookOpen, title: "Course Management" },
  { icon: ClipboardCheck, title: "Attendance Tracking" },
  { icon: FileText, title: "Assignment Management" },
  { icon: FileBarChart, title: "Performance Reports" },
  { icon: CreditCard, title: "Fee Management" },
  { icon: Bus, title: "Transportation Tracking (Beta)" },
  { icon: Calendar, title: "Event Management" },
  { icon: Bell, title: "Communication & Notifications" },
];

export const AttendanceSection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/3 h-2/3 bg-gradient-to-r from-primary/5 to-transparent rounded-r-full" />

      <div className="container-custom relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <ScrollAnimation animation="fade-up">
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              Comprehensive Solution Overview
            </span>
          </ScrollAnimation>

          <ScrollAnimation animation="fade-up" delay={100}>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              <span className="text-gradient">11</span> Fully Integrated Modules
            </h2>
          </ScrollAnimation>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-10">
          {modules.map((module, index) => (
            <ScrollAnimation key={index} animation="fade-up" delay={150 + index * 50}>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors duration-300">
                <module.icon className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm font-medium">{module.title}</span>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation animation="fade-up" delay={700}>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-8">
            Each module works seamlessly together to ensure smooth, uninterrupted operations across the institution.
          </p>
        </ScrollAnimation>

        <ScrollAnimation animation="fade-up" delay={800}>
          <div className="text-center">
            <Link to="/erp-solutions" className="btn-primary">
              Explore All Modules
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default AttendanceSection;