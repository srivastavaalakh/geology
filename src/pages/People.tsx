import { useState, useEffect, useRef } from "react";
import SectionReveal from "@/components/SectionReveal";
import SectionHeader from "@/components/SectionHeader";
import { ExternalLink, Linkedin, BookOpen } from "lucide-react";

/* ================= CATEGORIES ================= */
const categories = [
  "All",
  "Alumni",
  "Postdoc",
  "Research Associate",
  "PhD Scholars",
  "Research Scholars",
  "M.Tech Students",
  "Technical Staff",
] as const;

/* ================= TYPES ================= */
interface Person {
  name: string;
  category: typeof categories[number];
  topic: string;
  software?: string;
  linkedin?: string;
  initials: string;
  description?: string;
  designation?: string;
  image?: string;
}

/* ================= DATA ================= */
const people: Person[] = [
  {
    name: "Dr. Jahangeer",
    category: "Alumni",
    designation:
      "Research Assistant Professor, University of Nebraska–Lincoln, USA",
    topic:
      "Groundwater hydrology, wetland monitoring, environmental planning, and Geo-AI applications",
    description:
      "Expert in groundwater hydrology and wetland management with emphasis on Geo-AI driven spatial and environmental planning research.",
    software: "Geo-AI, GIS, Spatial Analysis",
    linkedin: "https://architecture.unl.edu/person/jahangeer-jahangeer/",
    initials: "DJ",
    image: "/people/jahangeer.png",
  },
  {
    name: "Prachi Rusiya",
    category: "Research Scholars",
    designation: "M.Tech Research Scholar",
    topic: "Groundwater analysis",
    description:
      "Early-stage research scholar working on groundwater assessment using geospatial techniques.",
    software: "ArcGIS",
    linkedin: "https://www.linkedin.com/in/prachi-rusiya-a8447b205",
    initials: "PR",
    image: "/people/prachi.png",
  },
  {
    name: "Khushi Srivastava",
    category: "Research Scholars",
    designation: "M.Tech Research Scholar",
    topic: "Underground hydrogen storage in saline aquifers",
    description:
      "Research focused on hydrogen storage feasibility using saline aquifer systems and reservoir simulation workflows.",
    software: "CMG, ArcGIS",
    linkedin: "https://www.linkedin.com/in/khushi-srivastava",
    initials: "KS",
    image: "/people/khushi.png",
  },
  {
    name: "Prabhat Dwivedi",
    category: "PhD Scholars",
    designation: "PhD Research Scholar",
    topic:
      "Heavy metal pollution, hydrogeochemistry, and surface–groundwater interaction",
    description:
      "Works on heavy metal contamination, hydrological modelling, geophysical investigations, and contaminant transport using integrated field monitoring.",
    software:
      "ArcGIS, SWAT, MODFLOW, HYDRUS, ERT, IC, UV-Spectrophotometer, AAS",
    linkedin: "https://linkedin.com/in/prabhat-dwivedi-703798191",
    initials: "PD",
    image: "/people/prabhat.png",
  },
  {
    name: "Baljinder Singh",
    category: "PhD Scholars",
    designation: "PhD Research Scholar",
    topic: "Hydrogeological and hydrochemical framework for semi-arid regions",
    description:
      "Research includes isotopic and hydrochemical investigation of groundwater recharge dynamics in mining-impacted regions.",
    software: "ArcGIS, Origin Pro, IC, GC-MS",
    linkedin: "https://www.linkedin.com/in/baljinder-singh-07bs1995",
    initials: "BS",
    image: "/people/balijinder.png",
  },
  {
    name: "Shruti Singh",
    category: "PhD Scholars",
    designation: "PhD Research Scholar",
    topic:
      "Macrophyte-Assisted Vermifiltration (MAVF) for antibiotics removal",
    description:
      "Developing sustainable wastewater treatment systems using vermifiltration and macrophyte-based technologies.",
    software:
      "Design-Expert, Origin, AAS, UV-Vis Spectrophotometer",
    linkedin: "https://www.linkedin.com/in/shruti-singh-b5536a169",
    initials: "SS",
    image: "/people/shruti.png",
  },
  {
    name: "Sanjay Kumar",
    category: "PhD Scholars",
    designation: "PhD Research Scholar",
    topic:
      "Climate change impact assessment on fast- and slow-flow regimes in Himalayan basins",
    description:
      "Focused on climate-driven hydrological transformations, flood characteristics, and slow-flow variability using modelling approaches.",
    software: "ArcGIS, QGIS, SWAT, Python, R, MATLAB",
    linkedin: "https://www.linkedin.com/in/sanjay-kumar-326276a1/",
    initials: "SK",
    image: "/people/sanjay.png",
  },
  {
    name: "Ankit Kumar",
    category: "PhD Scholars",
    designation: "PhD Research Scholar",
    topic: "Advanced geophysical investigation techniques",
    description:
      "Specialist in subsurface profiling using integrated geophysical surveys and modern field instrumentation.",
    software:
      "GPR, ERT/VES, Seismic, GNSS, Drone, LIDAR, ArcGIS, QGIS, MODFLOW",
    linkedin: "https://www.linkedin.com/in/ankit-kumar-35678521b",
    initials: "AK",
    image: "/people/ankit1.png",
  },
  {
    name: "Negasi Haile Bihon",
    category: "PhD Scholars",
    designation: "PhD Research Scholar",
    topic:
      "Integrated assessment of groundwater resources in Upper Awash River Basin, Ethiopia",
    description:
      "Evaluating groundwater availability and climate impacts using GRACE data, hydrological models, and GIS-based analysis.",
    software:
      "ArcGIS, MODFLOW, WetSpass-M, GRACE, BFI+3",
    linkedin: "https://www.linkedin.com/in/negasi-haile-bihon",
    initials: "NH",
    image: "/people/negasi.png",
  },
  {
    name: "Shravani Yadav",
    category: "PhD Scholars",
    designation: "PhD Research Scholar",
    topic:
      "Transport of microplastics through surface-groundwater interactions",
    description:
      "Research on microplastic transport, co-contamination with heavy metals, and modelling of groundwater–surface water systems.",
    software:
      "HEC-RAS, HEC-HMS, SWAT, MIKE-11, ArcGIS, QGIS, MATLAB, Python, R",
    linkedin: "https://www.linkedin.com/in/shravani-yadav/",
    initials: "SY",
    image: "/people/shravani.png",
  },
    {
    name: "Dr Tanushree",
    category: "Postdoc",
    designation: "Postdoctoral Researcher",
    topic:
      "Groundwater resource management, hydrological modelling, seawater intrusion, contaminant transport, RS & GIS",
    description:
      "Research on groundwater vulnerability, salinisation, landuse impacts, and climate change implications using hydrochemistry, isotopic and geospatial techniques.",
    software:
      "ArcGIS, QGIS, Visual MODFLOW, GMS, ERDAS, FTIR, ICP-OES, Google Earth Engine",
    linkedin: "https://www.linkedin.com/in/dr-tanushree-gupta-979974140/",
    initials: "DT",
    image: "/people/tanushree.png",
  },

  /* ================= RESEARCH ASSOCIATE ================= */
  {
    name: "Dr Manoj Kumar",
    category: "Research Associate",
    designation: "Research Associate",
    topic:
      "Environmental engineering, wastewater treatment, constructed wetlands, bioelectrochemical systems",
    description:
      "Specializes in nature-based wastewater treatment, aquifer characterization, subsurface profiling and bioenergy recovery systems.",
    software:
      "Origin Pro, PAST, ERT, DGPS, Water Quality Multiparameter",
    linkedin: "https://www.linkedin.com/in/manoj-kumar-ph-d-446821100/",
    initials: "MK",
    image: "/people/manoj.png",
  },

  /* ================= PHD SCHOLARS ================= */
  {
    name: "Dr. Manish Kumar Mall",
    category: "PhD Scholars",
    designation: "Senior Researcher",
    topic:
      "River hydraulics, sediment transport, scour, flood hydrology and climate resilience",
    description:
      "Works on experimental and numerical modelling of hydraulic structures, flow–structure interaction and flood risk assessment.",
    software:
      "HEC-RAS (1D/2D), ArcGIS, MATLAB, Python, ANSYS Fluent",
    linkedin:
      "https://www.linkedin.com/in/manish-kumar-mall-88745834a",
    initials: "MM",
    image: "/people/manish.png",
  },

  /* ================= TECHNICAL STAFF ================= */
  {
    name: "Rupesh Kumar",
    category: "Technical Staff",
    designation: "Junior Lab Assistant",
    topic: "Groundwater experiments and laboratory assistance",
    description:
      "Supports groundwater laboratory experiments and field measurements.",
    software: "Laboratory Instruments",
    linkedin: "",
    initials: "RK",
    image: "/people/rupesh.png",
  },

  /* ================= M.TECH STUDENTS ================= */
  {
    name: "Famna P C",
    category: "M.Tech Students",
    designation: "M.Tech Student",
    topic: "Urban groundwater hydrology",
    description:
      "Worked on restoration of Ashtamudi Lake using Google Earth Engine and groundwater analysis.",
    software:
      "ArcGIS, MODFLOW 6 (ModelMuse), AutoCAD, Google Earth Engine",
    linkedin: "https://www.linkedin.com/in/famna-p-c-9041a3322",
    initials: "FP",
    image: "/people/famna.png",
  },
  {
    name: "Simmonds Cedric C",
    category: "M.Tech Students",
    designation: "M.Tech Student",
    topic: "Urban groundwater hydrology",
    description:
      "Focused on groundwater modelling and dewatering analysis.",
    software:
      "ArcGIS, ERDAS Imagine, HEC-HMS, BricsCAD, SolidWorks",
    linkedin:
      "https://www.linkedin.com/in/simmonds-cedric-c-55b23921a",
    initials: "SC",
    image: "/people/simmonds.png",
  },
  {
    name: "Arpit Upadhyay",
    category: "M.Tech Students",
    designation: "M.Tech Student",
    topic:
      "Groundwater modelling of Managed Aquifer Recharge (MAR) structures",
    description:
      "Experience in groundwater exploration, MAR modelling, and GIS applications.",
    software:
      "ArcGIS, ERDAS, MODFLOW, FEFLOW, HEC-HMS",
    linkedin: "https://www.linkedin.com/in/arpitupadhyaydev",
    initials: "AU",
    image: "/people/arpit.png",
  },
  {
    name: "Paridhi Gupta",
    category: "M.Tech Students",
    designation: "M.Tech Student",
    topic:
      "Effect of microplastics on water and nutrient uptake by plants",
    description:
      "Research on microplastic contamination and plant–water interactions.",
    software:
      "ArcGIS, ERDAS, QGIS, MATLAB, SWAT, AutoCAD",
    linkedin:
      "https://www.linkedin.com/in/paridhi-gupta-a567871b3",
    initials: "PG",
    image: "/people/pardhi.png",
  },
  {
    name: "Raju Kumar Mahato",
    category: "M.Tech Students",
    designation: "M.Tech Student",
    topic:
      "Groundwater hydrology and water distribution networks in high-altitude areas",
    description:
      "Worked on groundwater assessment and hydraulic modelling in cold regions.",
    software:
      "ArcGIS, ERDAS, COMSOL, WaterGEMS, HEC-RAS, AutoCAD",
    linkedin:
      "https://www.linkedin.com/in/raju-kumar-mahato-482a40347",
    initials: "RM",
    image: "/people/raju.png",
  },
  {
    name: "Sinjini De",
    category: "M.Tech Students",
    designation: "M.Tech Student",
    topic: "Microplastic contamination in groundwater",
    description:
      "Focused on groundwater quality assessment and microplastic pollution.",
    software:
      "ArcGIS Pro, AutoCAD, HEC-HMS, ERDAS Imagine",
    linkedin:
      "https://www.linkedin.com/in/sinjini-de-545189275/",
    initials: "SD",
    image: "/people/sinjini.png",
  },

];

/* ================= SCROLL ANIMATION ================= */
function useScrollReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, visible };
}

/* ================= AVATAR ================= */
const ProfileAvatar = ({
  initials,
  image,
  visible,
  delay,
}: {
  initials: string;
  image?: string;
  visible: boolean;
  delay: number;
}) => (
  <div
    className={`relative w-40 h-40 md:w-56 md:h-56 rounded-2xl overflow-hidden gradient-navy shadow-2xl transition-all ease-out ${
      visible
        ? "opacity-100 scale-100 translate-y-0"
        : "opacity-0 scale-90 translate-y-8"
    }`}
    style={{ transitionDuration: "800ms", transitionDelay: `${delay}ms` }}
  >
    {image ? (
      <img
        src={image}
        alt={initials}
        className="w-full h-full object-contain bg-muted"
      />
    ) : (
      <div className="w-full h-full flex items-center justify-center">
        <span className="text-primary-foreground font-display text-4xl md:text-5xl font-bold">
          {initials}
        </span>
      </div>
    )}
    <div className="absolute inset-0 rounded-2xl ring-2 ring-aqua/30 pointer-events-none" />
    <div className="absolute -inset-3 rounded-3xl ring-1 ring-aqua/10 pointer-events-none" />
  </div>
);

/* ================= PROFILE ROW ================= */
const ProfileRow = ({ person, index }: { person: Person; index: number }) => {
  const { ref, visible } = useScrollReveal(0.12);
  const isEven = index % 2 === 0;

  return (
    <div ref={ref} className="py-12">
      <div
        className={`section-container flex flex-col ${
          isEven ? "md:flex-row" : "md:flex-row-reverse"
        } items-center gap-10`}
      >
        <ProfileAvatar
          initials={person.initials}
          image={person.image}
          visible={visible}
          delay={0}
        />

        <div
          className={`flex-1 space-y-4 text-center md:text-left transition-all ease-out ${
            visible
              ? "opacity-100 translate-x-0"
              : isEven
              ? "opacity-0 translate-x-12"
              : "opacity-0 -translate-x-12"
          }`}
          style={{ transitionDuration: "800ms", transitionDelay: "200ms" }}
        >
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-secondary">
            {person.category}
          </span>

          <h3 className="font-display text-2xl md:text-3xl font-bold">
            {person.name}
          </h3>

          {person.designation && (
            <p className="text-aqua-dark font-medium">
              {person.designation}
            </p>
          )}

          <div className="flex items-start gap-2 justify-center md:justify-start">
            <BookOpen size={16} className="text-aqua mt-1" />
            <p className="text-muted-foreground">{person.topic}</p>
          </div>

          {person.description && (
            <p className="text-muted-foreground max-w-xl">
              {person.description}
            </p>
          )}

          {person.software && (
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {person.software.split(", ").map((s) => (
                <span
                  key={s}
                  className="px-3 py-1 bg-secondary rounded-full text-xs"
                >
                  {s}
                </span>
              ))}
            </div>
          )}

          {person.linkedin && (
            <a
              href={person.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-aqua-dark hover:text-aqua"
            >
              <Linkedin size={16} />
              Profile
              <ExternalLink size={12} />
            </a>
          )}
        </div>
      </div>

      <div className="section-container mt-12">
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>
    </div>
  );
};

/* ================= MAIN ================= */
const People = () => {
  const [active, setActive] =
    useState<typeof categories[number]>("All");

  const filtered =
    active === "All"
      ? people
      : people.filter((p) => p.category === active);

  return (
    <section className="gradient-sky">
      <div className="section-container pt-16">
        <SectionHeader title="Our People" />
        <div className="flex flex-wrap gap-2 justify-center my-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm ${
                active === cat
                  ? "gradient-aqua text-white"
                  : "bg-card hover:bg-secondary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {filtered.map((person, i) => (
        <ProfileRow key={person.name} person={person} index={i} />
      ))}
    </section>
  );
};

export default People;
