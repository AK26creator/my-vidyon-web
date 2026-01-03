import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollAnimation from "@/components/ScrollAnimation";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  MessageSquare,
  Building2,
  CheckCircle2
} from "lucide-react";
import { toast } from "sonner";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    value: "contact@myvidyon.com",
    link: "mailto:contact@myvidyon.com",
  },
  {
    icon: Phone,
    title: "Call Us",
    value: "+1 (234) 567-890",
    link: "tel:+1234567890",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    value: "123 Education Drive, Tech City, TC 12345",
    link: "#",
  },
  {
    icon: Clock,
    title: "Business Hours",
    value: "Mon - Fri: 9:00 AM - 6:00 PM",
    link: "#",
  },
];

const faqs = [
  {
    question: "How long does implementation take?",
    answer: "Typical implementation takes 2-4 weeks depending on the size of your institution and the modules selected.",
  },
  {
    question: "Do you offer training?",
    answer: "Yes! We provide comprehensive on-site and online training for administrators, teachers, and staff at no extra cost.",
  },
  {
    question: "Can I try before I buy?",
    answer: "Absolutely. We offer a 30-day free trial with full access to all features. No credit card required.",
  },
  {
    question: "What about data migration?",
    answer: "Our team handles complete data migration from your existing systems. We support imports from Excel, CSV, and most major ERP platforms.",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    institution: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    toast.success("Thank you for reaching out! We'll get back to you within 24 hours.");
    setFormData({ name: "", email: "", phone: "", institution: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-28 pb-10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
        
        <div className="container-custom relative text-center">
          <ScrollAnimation animation="fade-up">
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              Get in Touch
            </span>
          </ScrollAnimation>
          
          <ScrollAnimation animation="fade-up" delay={100}>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Let's <span className="text-gradient">Connect</span>
            </h1>
          </ScrollAnimation>
          
          <ScrollAnimation animation="fade-up" delay={200}>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Ready to transform your institution? Have questions? Our team is here 
              to help you find the perfect solution.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-10 md:py-14">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ScrollAnimation animation="fade-right">
                <div className="card-elevated p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-5">
                    <MessageSquare className="w-5 h-5 text-primary" />
                    <h2 className="font-heading font-bold text-xl">Send us a Message</h2>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          maxLength={100}
                          className="w-full px-4 py-2.5 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors text-sm"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-1.5">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          maxLength={255}
                          className="w-full px-4 py-2.5 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors text-sm"
                          placeholder="john@school.edu"
                        />
                      </div>
                    </div>
                    
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-1.5">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          maxLength={20}
                          className="w-full px-4 py-2.5 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors text-sm"
                          placeholder="+1 (234) 567-890"
                        />
                      </div>
                      <div>
                        <label htmlFor="institution" className="block text-sm font-medium mb-1.5">
                          Institution Name
                        </label>
                        <input
                          type="text"
                          id="institution"
                          name="institution"
                          value={formData.institution}
                          onChange={handleChange}
                          maxLength={200}
                          className="w-full px-4 py-2.5 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors text-sm"
                          placeholder="ABC Public School"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-1.5">
                        How can we help? *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        maxLength={1000}
                        className="w-full px-4 py-2.5 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none text-sm"
                        placeholder="Tell us about your requirements, number of students, current systems, etc."
                      />
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-cta w-full sm:w-auto disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-accent-foreground border-t-transparent rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </ScrollAnimation>
            </div>

            {/* Contact Info Sidebar */}
            <div className="space-y-5">
              <ScrollAnimation animation="fade-left">
                <div className="card-elevated p-5">
                  <div className="flex items-center gap-3 mb-4">
                    <Building2 className="w-5 h-5 text-primary" />
                    <h3 className="font-heading font-bold text-base">Contact Information</h3>
                  </div>
                  <div className="space-y-4">
                    {contactInfo.map((info, index) => (
                      <a
                        key={index}
                        href={info.link}
                        className="flex items-start gap-3 group"
                      >
                        <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                          <info.icon className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                          <div className="text-xs text-muted-foreground">{info.title}</div>
                          <div className="font-medium text-sm">{info.value}</div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </ScrollAnimation>

              <ScrollAnimation animation="fade-left" delay={100}>
                <div className="card-elevated p-5 bg-gradient-primary text-primary-foreground">
                  <h3 className="font-heading font-bold text-base mb-2">Request a Demo</h3>
                  <p className="text-primary-foreground/80 text-sm mb-3">
                    See My Vidyon in action with a personalized demo tailored to your institution's needs.
                  </p>
                  <ul className="space-y-1.5">
                    {["30-minute live walkthrough", "Q&A with product experts", "Custom pricing discussion"].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-10 md:py-14 bg-muted/30">
        <div className="container-custom">
          <ScrollAnimation animation="fade-up">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-center mb-3">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
          </ScrollAnimation>
          
          <ScrollAnimation animation="fade-up" delay={100}>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-8">
              Quick answers to common questions. Can't find what you're looking for? Reach out to us directly.
            </p>
          </ScrollAnimation>

          <div className="max-w-3xl mx-auto grid gap-4">
            {faqs.map((faq, index) => (
              <ScrollAnimation key={index} animation="fade-up" delay={150 + index * 50}>
                <div className="card-elevated p-5">
                  <h3 className="font-heading font-semibold text-base mb-1.5">{faq.question}</h3>
                  <p className="text-muted-foreground text-sm">{faq.answer}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Contact;
