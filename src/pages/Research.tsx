import SectionReveal from "@/components/SectionReveal";
import SectionHeader from "@/components/SectionHeader";
import { Droplets, Shield, Radio, Beaker, CloudRain } from "lucide-react";

const areas = [
  {
    icon: Droplets,
    title: "Groundwater Flow Modeling",
    desc: "Numerical simulation of groundwater flow systems using MODFLOW, HYDRUS, and other advanced tools. Our research focuses on aquifer characterization, recharge estimation, and sustainable extraction strategies.",
    topics: ["Aquifer characterization", "Recharge estimation", "MODFLOW simulations", "Pumping test analysis"],
  },
  {
    icon: Shield,
    title: "Dam Safety & Seepage Analysis",
    desc: "Comprehensive assessment of seepage behavior in earth dams, embankments, and hydraulic structures using geophysical and numerical methods.",
    topics: ["Seepage analysis", "Foundation studies", "Structural integrity", "Risk assessment"],
  },
  {
    icon: Radio,
    title: "Hydrogeophysics",
    desc: "Application of Electrical Resistivity Tomography (ERT), Ground Penetrating Radar (GPR), and Vertical Electrical Sounding (VES) for subsurface characterization.",
    topics: ["ERT surveys", "GPR imaging", "VES analysis", "Aquifer boundary detection"],
  },
  {
    icon: Beaker,
    title: "Contaminant Transport",
    desc: "Study of pollutant migration through subsurface environments including heavy metals, organic compounds, and emerging contaminants. Development of remediation strategies.",
    topics: ["Heavy metal transport", "Bioremediation", "Adsorption studies", "3D tank experiments"],
  },
  {
    icon: CloudRain,
    title: "Climate Change Impact",
    desc: "Assessment of climate change effects on groundwater resources, flood dynamics, and hydrological processes in Himalayan and other critical catchments.",
    topics: ["Slow-flow analysis", "Flood assessment", "Himalayan hydrology", "Isotopic studies"],
  },
];

const Research = () => {
  return (
    <div>
      <section className="gradient-navy py-24">
        <div className="section-container text-center text-primary-foreground">
          <SectionReveal>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Our Research</h1>
            <p className="text-lg opacity-80 max-w-2xl mx-auto">
              Interdisciplinary investigations into subsurface water resources and environmental challenges.
            </p>
          </SectionReveal>
        </div>
      </section>

      <section className="py-20">
        <div className="section-container space-y-12">
          {areas.map((area, i) => (
            <SectionReveal key={i} delay={i * 100}>
              <div className={`glass-card p-8 flex flex-col md:flex-row gap-8 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                <div className="md:w-1/3 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-2xl gradient-aqua flex items-center justify-center">
                    <area.icon size={48} className="text-accent-foreground" />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="font-display text-2xl font-bold mb-3">{area.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">{area.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {area.topics.map((t) => (
                      <span key={t} className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Research;
