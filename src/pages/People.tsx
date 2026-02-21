import { useState, useEffect, useRef } from "react";
import SectionReveal from "@/components/SectionReveal";
import SectionHeader from "@/components/SectionHeader";
import { ExternalLink, Linkedin, BookOpen } from "lucide-react";

/* ================= CATEGORIES ================= */
const categories = ["All", "PhD Scholars", "Research Scholars", "Alumni"] as const;

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
    name: "Prabhat Dwivedi",
    category: "PhD Scholars",
    designation: "PhD Research Scholar",
    topic: "Heavy metal pollution assessment in Hindon Basin",
    description:
      "Investigating heavy metal contamination patterns and remediation strategies using advanced geospatial and hydrological modeling tools.",
    software: "ArcGIS, SWAT, MODFLOW, HYDRUS",
    linkedin: "https://linkedin.com/in/prabhat-dwivedi-703798191",
    initials: "PD",
    image: "/people/prabhat.png",
  },
  {
    name: "Baljinder Singh",
    category: "PhD Scholars",
    designation: "PhD Research Scholar",
    topic: "Hydrochemical and isotopic dynamics of sub-surface water resources",
    description:
      "Studying the chemical and isotopic signatures of groundwater to understand recharge mechanisms and water quality evolution.",
    software: "ArcGIS, Origin Pro, IC, GC-MS",
    initials: "BS",
    image: "/people/balijinder.png",
  },
  {
    name: "Sanjay Kumar",
    category: "PhD Scholars",
    designation: "PhD Research Scholar",
    topic:
      "Climate change impact assessment on fast- and slow-flow regimes in a Himalayan Basin",
    description:
      "Analyzing the effects of climate variability on streamflow and groundwater recharge.",
    software: "HEC-RAS, HEC-HMS, SWAT",
    linkedin: "https://www.linkedin.com/in/sanjay-kumar-326276a1/",
    initials: "SK",
    image: "/people/sanjay.png",
  },
  {
    name: "Shruti Singh",
    category: "PhD Scholars",
    designation: "PhD Research Scholar",
    topic: "Macrophyte-Assisted Vermifiltration for wastewater treatment",
    description:
      "Developing sustainable wastewater treatment systems using nature-based solutions.",
    software: "Design-Expert, UV-Vis",
    initials: "SS",
    image: "/people/shruti.png",
  },
  {
    name: "Ankit Kumar",
    category: "PhD Scholars",
    designation: "PhD Research Scholar",
    topic: "Geophysical investigation techniques",
    description:
      "Applying advanced geophysical methods including GPR and ERT.",
    software: "GPR, ERT/VES, Seismic, SHM",
    linkedin: "https://www.linkedin.com/in/ankit-kumar-35678521b",
    initials: "AK",
    image: "/people/ankit.png",
  },
  {
    name: "Negasi Haile Bihon",
    category: "PhD Scholars",
    designation: "PhD Research Scholar",
    topic:
      "Groundwater resources assessment in Upper Awash River Basin, Ethiopia",
    description:
      "Evaluating groundwater potential and recharge dynamics.",
    software: "WetSpass-M, MODFLOW, ArcGIS",
    initials: "NH",
    image: "/people/negasi.png",
  },
  {
    name: "Prachi Rusiya",
    category: "Research Scholars",
    designation: "M.Tech Research Scholar",
    topic: "Groundwater analysis",
    description:
      "Beginning research in groundwater science with geospatial analysis.",
    software: "ArcGIS",
    linkedin: "https://www.linkedin.com/in/prachi-rusiya-a8447b205",
    initials: "PR",
    image: "/people/prachi.png",
  },
  {
    name: "Khushi Srivastava",
    category: "Research Scholars",
    designation: "M.Tech Research Scholar",
    topic: "Hydrogen storage in saline aquifer",
    description:
      "Exploring underground hydrogen storage mechanisms.",
    software: "ArcGIS",
    initials: "KS",
    image: "/people/khushi.png",
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
        className="w-full h-full object-cover"
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
              LinkedIn Profile
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
  const [active, setActive] = useState<typeof categories[number]>("All");
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
