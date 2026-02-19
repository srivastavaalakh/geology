import { useState } from "react";
import SectionReveal from "@/components/SectionReveal";
import SectionHeader from "@/components/SectionHeader";
import { Calendar, IndianRupee } from "lucide-react";

const projectTabs = ["Ongoing", "Completed"] as const;

const projects = [
  { status: "Ongoing" as const, title: "Heavy Metal Pollution Assessment in Hindon Basin", pi: "Prof. B.K. Yadav", duration: "2023–2026", funding: "PMRF, Ministry of Education", desc: "Comprehensive assessment of heavy metal contamination in soil-water systems of the Hindon River Basin using hydrological modeling and field-based monitoring." },
  { status: "Ongoing" as const, title: "Climate Change Impact on Fast- and Slow-Flow Regimes in Himalayan Basin", pi: "Prof. B.K. Yadav", duration: "2022–2026", funding: "IIT Roorkee", desc: "Assessment of climate change effects on flood properties and slow-flow dynamics in mountainous catchments of Nepal Himalayas." },
  { status: "Ongoing" as const, title: "Hydrochemical and Isotopic Dynamics of Subsurface Water Resources", pi: "Prof. B.K. Yadav", duration: "2023–2026", funding: "IIT Roorkee", desc: "Investigation of groundwater recharge dynamics in mining-impacted regions using isotopic, hydrochemical, and geophysical methods." },
  { status: "Ongoing" as const, title: "Macrophyte-Assisted Vermifiltration for Wastewater Treatment", pi: "Prof. B.K. Yadav", duration: "2024–2027", funding: "IIT Roorkee", desc: "Development of bio-based treatment systems for antibiotics-laden cattle feedlot wastewater." },
  { status: "Completed" as const, title: "9th International Groundwater Conference (IGWC-2022)", pi: "Prof. B.K. Yadav", duration: "Nov 2022", funding: "IIT Roorkee & NIH", desc: "Organized and hosted the 9th IGWC on 'Effective Management of (Sub)-Surface Water Resources in Arid and Semi-Arid Regions'." },
  { status: "Completed" as const, title: "Groundwater Quality Assessment at Municipal Solid Waste Sites", pi: "Prof. B.K. Yadav", duration: "2021–2024", funding: "IIT Roorkee", desc: "Comprehensive assessment using vertical electrical soundings and hydrochemical analysis." },
];

const Projects = () => {
  const [tab, setTab] = useState<typeof projectTabs[number]>("Ongoing");
  const filtered = projects.filter((p) => p.status === tab);

  return (
    <div>
      <section className="gradient-navy py-24">
        <div className="section-container text-center text-primary-foreground">
          <SectionReveal>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Projects</h1>
            <p className="text-lg opacity-80 max-w-2xl mx-auto">
              Research projects driving impactful solutions for water resource challenges.
            </p>
          </SectionReveal>
        </div>
      </section>

      <section className="py-20">
        <div className="section-container">
          <div className="flex gap-2 justify-center mb-10">
            {projectTabs.map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                  tab === t
                    ? "gradient-aqua text-accent-foreground shadow-md"
                    : "bg-card text-muted-foreground hover:bg-secondary border border-border"
                }`}
              >
                {t} Projects
              </button>
            ))}
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {filtered.map((project, i) => (
              <SectionReveal key={i} delay={i * 100}>
                <div className="glass-card p-8 hover:shadow-xl transition-shadow">
                  <h3 className="font-display text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.desc}</p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <span className="flex items-center gap-1 text-aqua-dark">
                      <Calendar size={14} /> {project.duration}
                    </span>
                    <span className="flex items-center gap-1 text-muted-foreground">
                      <IndianRupee size={14} /> {project.funding}
                    </span>
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

export default Projects;
