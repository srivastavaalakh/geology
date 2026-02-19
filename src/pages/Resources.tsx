import SectionReveal from "@/components/SectionReveal";
import SectionHeader from "@/components/SectionHeader";
import { Download, Database, Code, FileText } from "lucide-react";

const resources = [
  { icon: Database, title: "Groundwater Quality Datasets", desc: "Hydrochemical analysis data from field studies across multiple river basins in India.", type: "Dataset" },
  { icon: Code, title: "MODFLOW Model Files", desc: "Calibrated groundwater flow models for research basins.", type: "Model" },
  { icon: Database, title: "ERT Survey Data", desc: "Electrical Resistivity Tomography datasets from field investigations.", type: "Dataset" },
  { icon: FileText, title: "Workshop Materials", desc: "Training materials from geophysical tools and techniques workshops.", type: "Document" },
  { icon: Code, title: "HYDRUS Simulation Files", desc: "Vadose zone modeling files for contaminant transport studies.", type: "Model" },
  { icon: FileText, title: "Lab SOPs", desc: "Standard operating procedures for laboratory instruments.", type: "Document" },
];

const softwareTools = [
  "MODFLOW", "HYDRUS", "ArcGIS", "QGIS", "HEC-RAS", "HEC-HMS",
  "SWAT", "MATLAB", "Python", "R-Studio", "WetSpass-M", "Design-Expert",
];

const Resources = () => {
  return (
    <div>
      <section className="gradient-navy py-24">
        <div className="section-container text-center text-primary-foreground">
          <SectionReveal>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Resources</h1>
            <p className="text-lg opacity-80 max-w-2xl mx-auto">
              Datasets, models, and tools for groundwater research.
            </p>
          </SectionReveal>
        </div>
      </section>

      <section className="py-20">
        <div className="section-container">
          <SectionReveal>
            <SectionHeader title="Datasets & Models" />
          </SectionReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((r, i) => (
              <SectionReveal key={i} delay={i * 80}>
                <div className="glass-card p-6 h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg gradient-aqua flex items-center justify-center">
                      <r.icon size={20} className="text-accent-foreground" />
                    </div>
                    <span className="text-xs font-bold text-aqua-dark uppercase">{r.type}</span>
                  </div>
                  <h4 className="font-display font-semibold mb-2">{r.title}</h4>
                  <p className="text-sm text-muted-foreground">{r.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 gradient-sky">
        <div className="section-container">
          <SectionReveal>
            <SectionHeader title="Software & Tools" subtitle="Tools used across our research projects." />
          </SectionReveal>
          <div className="flex flex-wrap gap-3 justify-center max-w-3xl mx-auto">
            {softwareTools.map((tool, i) => (
              <SectionReveal key={tool} delay={i * 40}>
                <span className="px-5 py-2.5 rounded-full bg-card border border-border text-foreground font-medium text-sm hover:bg-secondary transition-colors">
                  {tool}
                </span>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;
