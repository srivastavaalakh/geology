import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="gradient-navy text-primary-foreground">
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About */}
          <div>
            <h3 className="font-display text-lg font-bold mb-4">GW Quality & Quantity Lab</h3>
            <p className="text-sm opacity-80 leading-relaxed">
              Department of Hydrology, Indian Institute of Technology Roorkee. 
              Advancing groundwater science through cutting-edge research and innovation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm opacity-80">
              {["About", "Research", "People", "Publications", "Projects", "Contact"].map((l) => (
                <li key={l}>
                  <Link to={`/${l.toLowerCase()}`} className="hover:opacity-100 transition-opacity">
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Research Areas */}
          <div>
            <h4 className="font-display font-semibold mb-4">Research Areas</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>Groundwater Flow Modeling</li>
              <li>Contaminant Transport</li>
              <li>Dam Safety & Seepage</li>
              <li>Hydrogeophysics</li>
              <li>Climate Change Impact</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm opacity-80">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                Department of Hydrology, IIT Roorkee, Uttarakhand 247667, India
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="shrink-0" />
                brijesh.yadav@hy.iitr.ac.in
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center text-sm opacity-60">
          © {new Date().getFullYear()} Groundwater Quality & Quantity Laboratory, IIT Roorkee. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
