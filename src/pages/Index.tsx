import { Link } from "react-router-dom";
import { Droplets, FlaskConical, Mountain, Waves, BookOpen, Users, Microscope, Award } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import AnimatedCounter from "@/components/AnimatedCounter";
import SectionReveal from "@/components/SectionReveal";
import SectionHeader from "@/components/SectionHeader";

const researchAreas = [
  {
    icon: Droplets,
    title: "Groundwater Flow Modeling",
    desc: "Numerical and analytical modeling of groundwater flow systems, aquifer characterization, and recharge estimation.",
  },
  {
    icon: Mountain,
    title: "Dam Safety & Seepage",
    desc: "Assessment of seepage through earth dams, foundation analysis, and structural safety evaluation.",
  },
  {
    icon: FlaskConical,
    title: "Contaminant Transport",
    desc: "Study of pollutant migration in subsurface, heavy metal contamination, and remediation strategies.",
  },
  {
    icon: Waves,
    title: "Hydrogeophysics",
    desc: "ERT, GPR, and VES techniques for subsurface investigation and aquifer boundary detection.",
  },
];

const stats = [
  { value: 15, suffix: "+", label: "Lab Instruments" },
  { value: 50, suffix: "+", label: "Publications" },
  { value: 10, suffix: "+", label: "Funded Projects" },
  { value: 20, suffix: "+", label: "Researchers" },
];

const news = [
  {
    date: "Mar 2025",
    title: "10th International Groundwater Conference (IGWC-2025)",
    desc: "Lab members presented cutting-edge research at IGWC-2025, NIH & IIT Roorkee.",
  },
  {
    date: "Jan 2026",
    title: "JST LOTUS Fellowship Awarded",
    desc: "Prabhat Dwivedi awarded the JST LOTUS Fellowship for doctoral research at University of Tokyo, Japan.",
  },
  {
    date: "Dec 2025",
    title: "AGU Fall Meeting Presentations",
    desc: "Multiple lab scholars presented research at the American Geophysical Union Fall Meeting.",
  },
];

const Index = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 gradient-navy opacity-75" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/90 to-transparent" />

        <div className="relative z-10 section-container text-center text-primary-foreground py-20">
          <SectionReveal>
            <p className="text-aqua font-medium tracking-widest uppercase text-sm mb-4">
              Department of Hydrology, IIT Roorkee
            </p>
          </SectionReveal>
          <SectionReveal delay={200}>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Groundwater Quality
              <br />
              <span className="text-gradient-aqua">&amp; Quantity Laboratory</span>
            </h1>
          </SectionReveal>
          <SectionReveal delay={400}>
            <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 opacity-90">
              Advancing understanding of subsurface water resources through innovative research,
              cutting-edge instrumentation, and interdisciplinary collaboration.
            </p>
          </SectionReveal>
          <SectionReveal delay={600}>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/research"
                className="px-8 py-3.5 rounded-lg gradient-aqua text-accent-foreground font-semibold hover:opacity-90 transition-opacity shadow-lg"
              >
                Explore Research
              </Link>
              <Link
                to="/contact"
                className="px-8 py-3.5 rounded-lg border-2 border-primary-foreground/30 text-primary-foreground font-semibold hover:bg-primary-foreground/10 transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Stats */}
      <section className="relative -mt-20 z-20">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {stats.map((s, i) => (
              <div key={i} className="stat-card water-shimmer">
                <div className="text-3xl md:text-4xl text-aqua-dark relative z-10">
                  <AnimatedCounter end={s.value} suffix={s.suffix} />
                </div>
                <div className="text-sm text-muted-foreground mt-2 relative z-10">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-24 gradient-sky">
        <div className="section-container">
          <SectionReveal>
            <SectionHeader
              title="Research Focus Areas"
              subtitle="Our laboratory investigates critical challenges in groundwater science through multidisciplinary approaches."
            />
          </SectionReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {researchAreas.map((area, i) => (
              <SectionReveal key={i} delay={i * 100}>
                <div className="glass-card p-6 h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                  <div className="w-12 h-12 rounded-xl gradient-aqua flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <area.icon size={24} className="text-accent-foreground" />
                  </div>
                  <h3 className="font-display font-semibold text-lg mb-2">{area.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{area.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* News */}
      <section className="py-24">
        <div className="section-container">
          <SectionReveal>
            <SectionHeader
              title="Latest News & Announcements"
              subtitle="Stay updated with our recent achievements, events, and research breakthroughs."
            />
          </SectionReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {news.map((item, i) => (
              <SectionReveal key={i} delay={i * 150}>
                <div className="glass-card p-6 h-full hover:shadow-xl transition-all duration-300 group">
                  <span className="text-xs font-semibold text-aqua-dark uppercase tracking-wider">
                    {item.date}
                  </span>
                  <h3 className="font-display font-semibold text-lg mt-2 mb-3 group-hover:text-aqua-dark transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-navy py-20">
        <div className="section-container text-center text-primary-foreground">
          <SectionReveal>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Interested in Joining Our Lab?
            </h2>
            <p className="text-lg opacity-80 mb-8 max-w-xl mx-auto">
              We are always looking for motivated researchers and students passionate about groundwater science.
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-3.5 rounded-lg gradient-aqua text-accent-foreground font-semibold hover:opacity-90 transition-opacity shadow-lg"
            >
              Contact Us
            </Link>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
};

export default Index;
