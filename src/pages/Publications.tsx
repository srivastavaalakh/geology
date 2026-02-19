import { useState } from "react";
import SectionReveal from "@/components/SectionReveal";
import SectionHeader from "@/components/SectionHeader";
import { Search } from "lucide-react";

const tabs = ["Journal Articles", "Conference Papers", "Technical Reports"] as const;

const publications = [
  { type: "Journal Articles" as const, authors: "Singh, S., Singh, R., & Yadav, B. K.", year: 2025, title: "Comparative analysis of antibiotics removal for biofilter, macrophyte-assisted vermifiltration for antibiotics-laden cattle feedlot wastewater: Performance, comparison, and life cycle cost analysis.", journal: "Process Safety and Environmental Protection" },
  { type: "Journal Articles" as const, authors: "Verma, A., Singh, J., Chandra, A., Yadav, S., & Yadav, B. K.", year: 2025, title: "Comprehensive Groundwater Quality Assessment of a Municipal Solid Waste Site Using Vertical Electrical Soundings and Hydrochemical Analysis.", journal: "Journal of Environmental Engineering, 151(8)" },
  { type: "Journal Articles" as const, authors: "Kumar, S., Dey, P. & Yadav, B.K.", year: 2025, title: "Impact of climate change on flood properties in a catchment of Nepal Himalayas.", journal: "Journal of Hydrologic Engineering, 30(5)" },
  { type: "Journal Articles" as const, authors: "Yadav, S., Jain, S., & Yadav, B. K.", year: 2022, title: "Simulation Tools for Analyzing Seepage in Civil Engineering.", journal: "Advances in Civil Engineering, Springer Nature" },
  { type: "Conference Papers" as const, authors: "Dwivedi, P., & Yadav, B. K.", year: 2025, title: "Inference of hydrological modelling and field-based monitoring to assess Heavy Metal Pollution in Hindon Basin.", journal: "AGU Fall Meeting Abstracts" },
  { type: "Conference Papers" as const, authors: "Dwivedi, P., & Yadav, B. K.", year: 2025, title: "Evaluating irrigation suitability of surface waters in confluence zones of the Hindon basin.", journal: "3rd International Conference on Earth and Environmental Sciences (ICEES 2025), Durban, South Africa" },
  { type: "Conference Papers" as const, authors: "Baljinder Singh and B.K. Yadav", year: 2025, title: "Deciphering Groundwater Recharge Dynamics in a Mining-Impacted Region: Insights from Isotopic, Hydrochemical, and Geophysical Investigations.", journal: "52nd Congress of IAH 2025, Melbourne, Australia" },
  { type: "Conference Papers" as const, authors: "Kumar, S., Dey, P. and Yadav, B.K.", year: 2024, title: "Assessment of Spatial Changes in the Response of Slow-flows in the Himalayan Mountains.", journal: "WASCC 2024, Tamil Nadu Agricultural University — Best Oral Presentation Award" },
  { type: "Conference Papers" as const, authors: "Dwivedi, P., & Yadav, B. K.", year: 2024, title: "Assessment of Integrated Health and Ecological Risks linked with Heavy Metal Pollutants in the Agro-industrial basin of Kali River, India.", journal: "EGU General Assembly 2024" },
  { type: "Technical Reports" as const, authors: "GW Lab, IIT Roorkee", year: 2024, title: "Groundwater Resources Assessment using Geophysical Tools and Techniques — Workshop Report.", journal: "Department of Hydrology, IIT Roorkee" },
];

const Publications = () => {
  const [activeTab, setActiveTab] = useState<typeof tabs[number]>("Journal Articles");
  const [query, setQuery] = useState("");

  const filtered = publications
    .filter((p) => p.type === activeTab)
    .filter((p) =>
      query === "" ||
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.authors.toLowerCase().includes(query.toLowerCase())
    );

  return (
    <div>
      <section className="gradient-navy py-24">
        <div className="section-container text-center text-primary-foreground">
          <SectionReveal>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Publications</h1>
            <p className="text-lg opacity-80 max-w-2xl mx-auto">
              Our contributions to advancing groundwater science and hydrology.
            </p>
          </SectionReveal>
        </div>
      </section>

      <section className="py-20">
        <div className="section-container">
          {/* Search */}
          <div className="max-w-md mx-auto mb-8 relative">
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search publications..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-aqua/50"
            />
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeTab === tab
                    ? "gradient-aqua text-accent-foreground shadow-md"
                    : "bg-card text-muted-foreground hover:bg-secondary border border-border"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* List */}
          <div className="space-y-4 max-w-4xl mx-auto">
            {filtered.map((pub, i) => (
              <SectionReveal key={i} delay={i * 50}>
                <div className="glass-card p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <span className="shrink-0 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-bold">
                      {pub.year}
                    </span>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{pub.authors}</p>
                      <h4 className="font-display font-semibold text-foreground mb-1">{pub.title}</h4>
                      <p className="text-sm text-aqua-dark italic">{pub.journal}</p>
                    </div>
                  </div>
                </div>
              </SectionReveal>
            ))}
            {filtered.length === 0 && (
              <p className="text-center text-muted-foreground py-10">No publications found.</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Publications;
