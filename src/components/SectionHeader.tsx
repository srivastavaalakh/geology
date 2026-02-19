interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionHeader = ({ title, subtitle, centered = true }: SectionHeaderProps) => (
  <div className={`mb-12 ${centered ? "text-center" : ""}`}>
    <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
      {title}
    </h2>
    {subtitle && (
      <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{subtitle}</p>
    )}
    <div className={`mt-4 h-1 w-16 rounded-full gradient-aqua ${centered ? "mx-auto" : ""}`} />
  </div>
);

export default SectionHeader;
