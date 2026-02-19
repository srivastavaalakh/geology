import SectionReveal from "@/components/SectionReveal";
import SectionHeader from "@/components/SectionHeader";
import { Target, Eye, Lightbulb, Award } from "lucide-react";

const milestones = [
  { year: "2015", event: "Lab established under Prof. B.K. Yadav" },
  { year: "2018", event: "First international collaboration with University of Stuttgart" },
  { year: "2019", event: "GC-MS and ERT instruments acquired" },
  { year: "2022", event: "9th International Groundwater Conference (IGWC-2022) hosted at IIT Roorkee" },
  { year: "2024", event: "Multiple international conference presentations and awards" },
  { year: "2025", event: "10th International Groundwater Conference (IGWC-2025)" },
];

const About = () => {
  return (
    <div>
      {/* Hero banner */}
      <section className="gradient-navy py-24">
        <div className="section-container text-center text-primary-foreground">
          <SectionReveal>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">About the Laboratory</h1>
            <p className="text-lg opacity-80 max-w-2xl mx-auto">
              Understanding and protecting Earth's most vital hidden resource — groundwater.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-8">
            <SectionReveal>
              <div className="glass-card p-8 h-full">
                <div className="w-12 h-12 rounded-xl gradient-aqua flex items-center justify-center mb-4">
                  <Target className="text-accent-foreground" size={24} />
                </div>
                <h3 className="font-display text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To advance the fundamental understanding of groundwater quality and quantity through 
                  rigorous scientific research, develop innovative monitoring and remediation technologies, 
                  and train the next generation of hydrology professionals who will address global water challenges.
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={150}>
              <div className="glass-card p-8 h-full">
                <div className="w-12 h-12 rounded-xl gradient-aqua flex items-center justify-center mb-4">
                  <Eye className="text-accent-foreground" size={24} />
                </div>
                <h3 className="font-display text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To become a globally recognized center of excellence in groundwater research, 
                  contributing to sustainable water resource management and environmental protection 
                  through interdisciplinary collaboration and cutting-edge science.
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Research Philosophy */}
      <section className="py-20 gradient-sky">
        <div className="section-container">
          <SectionReveal>
            <SectionHeader title="Research Philosophy" />
          </SectionReveal>
          <SectionReveal delay={100}>
            <div className="glass-card p-8 max-w-3xl mx-auto">
              <div className="flex items-start gap-4 mb-6">
                <Lightbulb className="text-aqua-dark shrink-0 mt-1" size={28} />
                <p className="text-muted-foreground leading-relaxed">
                  Our research is driven by the intersection of field observations, laboratory experiments, 
                  and computational modeling. We believe that understanding groundwater systems requires 
                  an integrated approach combining hydrogeology, geophysics, geochemistry, and environmental 
                  engineering. Each study is designed to bridge the gap between fundamental science and 
                  practical applications for water resource management.
                </p>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Principal Investigator */}
      <section className="py-20">
        <div className="section-container">
          <SectionReveal>
            <SectionHeader title="Principal Investigator" />
          </SectionReveal>
          <SectionReveal delay={100}>
            <div className="glass-card p-8 max-w-3xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-6 items-start">
                <div className="w-28 h-28 rounded-full gradient-navy flex items-center justify-center text-primary-foreground font-display text-3xl font-bold shrink-0">
                  BKY
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold">Prof. Brijesh Kumar Yadav</h3>
                  <p className="text-aqua-dark font-medium mb-3">Associate Professor, Department of Hydrology</p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    Prof. Yadav leads the Groundwater Quality and Quantity Laboratory with expertise in 
                    groundwater contamination, subsurface hydrology, and environmental remediation. 
                    His research spans heavy metal pollution assessment, hydrogeophysical investigations, 
                    climate change impacts on water resources, and bioremediation technologies.
                  </p>
                  <div className="flex gap-3 text-sm">
                    <a href="mailto:brijesh.yadav@hy.iitr.ac.in" className="text-aqua-dark hover:underline">
                      Email
                    </a>
                    <span className="text-border">|</span>
                    <a href="https://scholar.google.com" className="text-aqua-dark hover:underline" target="_blank">
                      Google Scholar
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 gradient-sky">
        <div className="section-container">
          <SectionReveal>
            <SectionHeader title="Lab Timeline" subtitle="Key milestones in our journey." />
          </SectionReveal>
          <div className="max-w-2xl mx-auto">
            {milestones.map((m, i) => (
              <SectionReveal key={i} delay={i * 100}>
                <div className="flex gap-6 mb-8">
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 rounded-full gradient-aqua shrink-0" />
                    {i < milestones.length - 1 && <div className="w-0.5 flex-1 bg-border mt-1" />}
                  </div>
                  <div className="pb-6">
                    <span className="text-xs font-bold text-aqua-dark uppercase tracking-wider">{m.year}</span>
                    <p className="text-foreground font-medium mt-1">{m.event}</p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
