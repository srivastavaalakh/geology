import { useState, useEffect, useRef, ReactNode } from "react";
import SectionReveal from "@/components/SectionReveal";
import SectionHeader from "@/components/SectionHeader";
import { ExternalLink, Linkedin, Mail, BookOpen } from "lucide-react";

const categories = ["All", "PhD Scholars", "Research Scholars", "Alumni"] as const;

interface Person {
  name: string;
  category: typeof categories[number];
  topic: string;
  software?: string;
  linkedin?: string;
  initials: string;
  description?: string;
  designation?: string;
}

const people: Person[] = [
  { name: "Prabhat Dwivedi", category: "PhD Scholars", designation: "PhD Research Scholar", topic: "Heavy metal pollution assessment in Hindon Basin", description: "Investigating heavy metal contamination patterns and remediation strategies using advanced geospatial and hydrological modeling tools.", software: "ArcGIS, SWAT, MODFLOW, HYDRUS", linkedin: "https://linkedin.com/in/prabhat-dwivedi-703798191", initials: "PD" },
  { name: "Baljinder Singh", category: "PhD Scholars", designation: "PhD Research Scholar", topic: "Hydrochemical and isotopic dynamics of sub-surface water resources", description: "Studying the chemical and isotopic signatures of groundwater to understand recharge mechanisms and water quality evolution.", software: "ArcGIS, Origin Pro, IC, GC-MS", initials: "BS" },
  { name: "Sanjay Kumar", category: "PhD Scholars", designation: "PhD Research Scholar", topic: "Climate change impact assessment on fast- and slow-flow regimes in a Himalayan Basin", description: "Analyzing the effects of climate variability on streamflow and groundwater recharge in sensitive Himalayan watersheds.", software: "HEC-RAS, HEC-HMS, SWAT", linkedin: "https://www.linkedin.com/in/sanjay-kumar-326276a1/", initials: "SK" },
  { name: "Shruti Singh", category: "PhD Scholars", designation: "PhD Research Scholar", topic: "Macrophyte-Assisted Vermifiltration for wastewater treatment", description: "Developing sustainable, nature-based wastewater treatment systems combining macrophytes and vermifiltration technology.", software: "Design-Expert, UV-Vis", initials: "SS" },
  { name: "Ankit Kumar", category: "PhD Scholars", designation: "PhD Research Scholar", topic: "Geophysical investigation techniques", description: "Applying advanced geophysical methods including GPR and ERT for subsurface characterization and structural health monitoring.", software: "GPR, ERT/VES, Seismic, SHM", linkedin: "https://www.linkedin.com/in/ankit-kumar-35678521b", initials: "AK" },
  { name: "Negasi Haile Bihon", category: "PhD Scholars", designation: "PhD Research Scholar", topic: "Groundwater resources assessment in Upper Awash River Basin, Ethiopia", description: "Evaluating groundwater potential and recharge dynamics in Ethiopian river basins using integrated hydrological modeling.", software: "WetSpass-M, MODFLOW, ArcGIS", initials: "NH" },
  { name: "Prachi Rusiya", category: "Research Scholars", designation: "M.Tech Research Scholar", topic: "TBD", description: "Beginning research in groundwater science with a focus on geospatial analysis and hydrological assessment.", software: "ArcGIS", linkedin: "https://www.linkedin.com/in/prachi-rusiya-a8447b205", initials: "PR" },
  { name: "Khushi Srivastava", category: "Research Scholars", designation: "M.Tech Research Scholar", topic: "Hydrogen storage in saline aquifer", description: "Exploring the feasibility and mechanisms of underground hydrogen storage in saline aquifer formations.", software: "ArcGIS", initials: "KS" },
  { name: "Dr. Jahangeer", category: "Alumni", designation: "Postdoctoral Researcher (Alumni)", topic: "Groundwater hydrology, wetland monitoring, Geo-AI in spatial analysis", description: "Applied machine learning and geospatial AI techniques to groundwater hydrology and wetland ecosystem monitoring.", initials: "DJ" },
];

/* Scroll-triggered animation hook */
function useScrollReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

/* Profile avatar */
const ProfileAvatar = ({ initials, visible, delay }: { initials: string; visible: boolean; delay: number }) => (
  <div
    className={`relative w-40 h-40 md:w-56 md:h-56 rounded-2xl gradient-navy flex items-center justify-center shadow-2xl transition-all ease-out ${
      visible ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-90 translate-y-8"
    }`}
    style={{ transitionDuration: "800ms", transitionDelay: `${delay}ms` }}
  >
    <span className="text-primary-foreground font-display text-4xl md:text-5xl font-bold select-none">
      {initials}
    </span>
    {/* decorative ring */}
    <div className="absolute -inset-2 rounded-2xl border-2 border-aqua/30 pointer-events-none" />
    <div className="absolute -inset-4 rounded-3xl border border-aqua/10 pointer-events-none" />
  </div>
);

/* Single profile row */
const ProfileRow = ({ person, index }: { person: Person; index: number }) => {
  const { ref, visible } = useScrollReveal(0.12);
  const isEven = index % 2 === 0;

  return (
    <div ref={ref} className="py-10 md:py-16">
      <div
        className={`section-container flex flex-col ${
          isEven ? "md:flex-row" : "md:flex-row-reverse"
        } items-center gap-8 md:gap-16`}
      >
        {/* Image / Avatar side */}
        <div className="flex-shrink-0 flex justify-center">
          <ProfileAvatar initials={person.initials} visible={visible} delay={0} />
        </div>

        {/* Content side */}
        <div
          className={`flex-1 space-y-4 text-center md:text-left transition-all ease-out ${
            visible
              ? "opacity-100 translate-x-0 translate-y-0"
              : isEven
              ? "opacity-0 translate-x-12"
              : "opacity-0 -translate-x-12"
          }`}
          style={{ transitionDuration: "800ms", transitionDelay: "200ms" }}
        >
          {/* Category badge */}
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-secondary text-secondary-foreground">
            {person.category}
          </span>

          <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground">{person.name}</h3>

          {person.designation && (
            <p className="text-aqua-dark font-medium text-sm md:text-base">{person.designation}</p>
          )}

          <div className="flex items-start gap-2 justify-center md:justify-start">
            <BookOpen size={16} className="text-aqua mt-1 shrink-0" />
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed font-medium">{person.topic}</p>
          </div>

          {person.description && (
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xl">{person.description}</p>
          )}

          {/* Software tags */}
          {person.software && (
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {person.software.split(", ").map((s) => (
                <span
                  key={s}
                  className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-medium"
                >
                  {s}
                </span>
              ))}
            </div>
          )}

          {/* Links */}
          {person.linkedin && (
            <a
              href={person.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-aqua-dark hover:text-aqua transition-colors font-medium group"
            >
              <Linkedin size={16} className="group-hover:scale-110 transition-transform" />
              LinkedIn Profile
              <ExternalLink size={12} />
            </a>
          )}
        </div>
      </div>

      {/* Divider */}
      <div className="section-container mt-10 md:mt-16">
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>
    </div>
  );
};

const People = () => {
  const [active, setActive] = useState<typeof categories[number]>("All");
  const filtered = active === "All" ? people : people.filter((p) => p.category === active);

  return (
    <div>
      {/* Hero */}
      <section className="gradient-navy py-24">
        <div className="section-container text-center text-primary-foreground">
          <SectionReveal>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Our People</h1>
            <p className="text-lg opacity-80 max-w-2xl mx-auto">
              Meet the researchers driving innovation in groundwater science.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* PI Section */}
      <section className="py-16">
        <div className="section-container">
          <SectionReveal>
            <SectionHeader title="Principal Investigator" />
          </SectionReveal>
          <SectionReveal delay={100}>
            <div className="flex flex-col md:flex-row items-center gap-10 max-w-4xl mx-auto">
              <div className="relative w-44 h-44 md:w-56 md:h-56 rounded-2xl gradient-navy flex items-center justify-center shadow-2xl shrink-0">
                <span className="text-primary-foreground font-display text-4xl md:text-5xl font-bold">BKY</span>
                <div className="absolute -inset-2 rounded-2xl border-2 border-aqua/30 pointer-events-none" />
                <div className="absolute -inset-4 rounded-3xl border border-aqua/10 pointer-events-none" />
              </div>
              <div className="text-center md:text-left space-y-3">
                <h3 className="font-display text-2xl md:text-3xl font-bold">Prof. Brijesh Kumar Yadav</h3>
               <p className="text-aqua-dark font-medium">
"Professor in the Department of Hydrology"
</p>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-xl">
                  Expert in groundwater contamination, subsurface hydrology, hydrogeophysics, and environmental remediation technologies. Leading the lab's mission to advance water resource science through cutting-edge research and innovation.
                </p>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Filters */}
      <section className="gradient-sky">
        <div className="section-container pt-16">
          <SectionReveal>
            <SectionHeader title="Lab Members" subtitle="Explore our team of dedicated researchers and scholars" />
          </SectionReveal>

          <div className="flex flex-wrap gap-2 justify-center mb-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  active === cat
                    ? "gradient-aqua text-accent-foreground shadow-md scale-105"
                    : "bg-card text-muted-foreground hover:bg-secondary border border-border hover:scale-105"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Alternating profiles */}
        <div>
          {filtered.map((person, i) => (
            <ProfileRow key={person.name} person={person} index={i} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="section-container pb-16 text-center text-muted-foreground">
            No members found in this category.
          </div>
        )}
      </section>
    </div>
  );
};

export default People;
