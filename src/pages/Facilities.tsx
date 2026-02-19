import SectionReveal from "@/components/SectionReveal";
import SectionHeader from "@/components/SectionHeader";
import { Microscope, Cpu, MapPin } from "lucide-react";

const instruments = [
  { name: "Atomic Absorption Spectroscopy (AAS)", purpose: "Heavy metals analysis: Pb, Cd, Cr, Ni, Cu, Zn", applications: "Groundwater quality assessment, heavy metal contamination studies, industrial effluent monitoring" },
  { name: "UV Spectrophotometer (UV-Vis)", purpose: "Nitrate, Ammonia, Phosphate, COD, Sulfate, Iron analysis", applications: "Nutrient pollution studies, agricultural leaching, wastewater treatment monitoring" },
  { name: "Gas Chromatography-Mass Spectrometry (GC-MS)", purpose: "VOCs, PAHs, Pesticides, BTEX compounds analysis", applications: "Organic contaminant detection, landfill gas analysis, emerging contaminants research" },
  { name: "Ion Chromatography (IC)", purpose: "Major cations and anions (NO₃⁻, SO₄²⁻, Cl⁻, F⁻, Na⁺, K⁺, Ca²⁺, Mg²⁺)", applications: "Hydrochemical facies analysis, salinity assessment, irrigation water quality" },
  { name: "Electrical Resistivity Tomography (ERT)", purpose: "Subsurface resistivity, depth to water table, aquifer thickness", applications: "Hydrogeophysics, salinity intrusion studies" },
  { name: "Ground Penetrating Radar (GPR)", purpose: "Subsurface layering, fracture mapping, structural mapping", applications: "Aquifer boundary detection, depth to water table, landfill studies" },
  { name: "3-D Tank Set-up", purpose: "Contaminant transport, groundwater flow modeling", applications: "Breakthrough curves, solute transport studies, remediation modeling" },
  { name: "Constant Head Permeameter", purpose: "Hydraulic conductivity (K) measurement", applications: "Aquifer characterization, soil permeability studies, groundwater recharge estimation" },
  { name: "Multi-Parameter Water Quality Meter", purpose: "pH, EC, TDS, DO, ORP, Temperature, Salinity", applications: "Field groundwater and surface water monitoring, aquifer characterization" },
  { name: "Vibratory Sieve", purpose: "Grain size distribution analysis", applications: "Soil classification, aquifer characterization, uniformity coefficient" },
  { name: "Pore Water Sampler", purpose: "Vadose zone water sampling", applications: "Agricultural leaching, nutrient migration, landfill leachate monitoring" },
  { name: "Incubator", purpose: "Microbial growth and controlled temperature studies", applications: "Microbial ecology, wastewater treatment, bioremediation studies" },
  { name: "Water Bath & Shaker", purpose: "Temperature-controlled incubation and mixing", applications: "Adsorption experiments, reaction kinetics research" },
  { name: "Pressure Chamber & Autoclave", purpose: "Sterilization and soil-water retention studies", applications: "Microbiological studies, soil water retention curve determination" },
  { name: "Dip Meter", purpose: "Groundwater level measurement", applications: "Water table monitoring, pumping test studies" },
];

const categories = [
  { icon: Microscope, label: "Experimental Lab", count: 10 },
  { icon: MapPin, label: "Field Equipment", count: 3 },
  { icon: Cpu, label: "Computational Tools", count: 2 },
];

const Facilities = () => {
  return (
    <div>
      <section className="gradient-navy py-24">
        <div className="section-container text-center text-primary-foreground">
          <SectionReveal>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Facilities</h1>
            <p className="text-lg opacity-80 max-w-2xl mx-auto">
              State-of-the-art instrumentation for comprehensive groundwater research.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Category overview */}
      <section className="py-16">
        <div className="section-container">
          <div className="grid sm:grid-cols-3 gap-6 mb-16">
            {categories.map((cat, i) => (
              <SectionReveal key={i} delay={i * 100}>
                <div className="stat-card">
                  <cat.icon size={32} className="mx-auto text-aqua-dark mb-3" />
                  <h3 className="font-display font-semibold text-lg">{cat.label}</h3>
                  <p className="text-muted-foreground text-sm">{cat.count} instruments</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Instruments grid */}
      <section className="py-16 gradient-sky">
        <div className="section-container">
          <SectionReveal>
            <SectionHeader title="Major Instruments" subtitle="15 advanced instruments for groundwater quality and quantity research." />
          </SectionReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {instruments.map((inst, i) => (
              <SectionReveal key={i} delay={i * 60}>
                <div className="glass-card p-6 h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="w-10 h-10 rounded-lg gradient-aqua flex items-center justify-center mb-4">
                    <Microscope size={20} className="text-accent-foreground" />
                  </div>
                  <h4 className="font-display font-semibold mb-2">{inst.name}</h4>
                  <p className="text-sm text-muted-foreground mb-3">{inst.purpose}</p>
                  <p className="text-xs text-aqua-dark">{inst.applications}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Facilities;
