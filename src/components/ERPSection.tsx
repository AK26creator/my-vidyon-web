import { 
  GraduationCap, 
  UserCircle, 
  Book, 
  BookOpen 
} from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";

const stakeholders = [
  {
    icon: GraduationCap,
    title: "Students",
    description: "Easy access to academic information, coursework, and results.",
  },
  {
    icon: Book,
    title: "Teachers",
    description: "Complete teaching and classroom management tools in one platform.",
  },
  {
    icon: UserCircle,
    title: "Parents",
    description: "Real-time visibility into attendance, academics, and institutional updates.",
  },
  {
    icon: BookOpen,
    title: "Administration",
    description: "Centralized system-wide control with complete operational oversight.",
  },
];

export const ERPSection = () => {
  return (
    <section className="section-padding bg-foreground text-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 rounded-full bg-primary blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-secondary blur-3xl" />
      </div>

      <div className="container-custom relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <ScrollAnimation animation="fade-up">
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              A Digital Transformation for Every Stakeholder
            </span>
          </ScrollAnimation>

          <ScrollAnimation animation="fade-up" delay={100}>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              A Unified Educational{" "}
              <span className="text-primary">Ecosystem</span>
            </h2>
          </ScrollAnimation>
        </div>

        {/* Stakeholders Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stakeholders.map((stakeholder, index) => (
            <ScrollAnimation key={index} animation="scale" delay={index * 80}>
              <div className="group p-6 rounded-2xl bg-background/5 border border-background/10 hover:bg-background/10 transition-all duration-500 hover:-translate-y-1 text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mb-5 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <stakeholder.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-xl text-background mb-3">
                  {stakeholder.title}
                </h3>
                <p className="text-background/60 leading-relaxed text-sm">
                  {stakeholder.description}
                </p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ERPSection;