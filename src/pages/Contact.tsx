import { useState } from "react";
import SectionReveal from "@/components/SectionReveal";
import SectionHeader from "@/components/SectionHeader";
import { MapPin, Mail, Phone, Send } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:brijesh.yadav@hy.iitr.ac.in?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(`From: ${form.name} (${form.email})\n\n${form.message}`)}`;
    window.location.href = mailto;
  };

  return (
    <div>
      <section className="gradient-navy py-24">
        <div className="section-container text-center text-primary-foreground">
          <SectionReveal>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg opacity-80 max-w-2xl mx-auto">
              Get in touch with our laboratory for research collaborations, inquiries, or opportunities.
            </p>
          </SectionReveal>
        </div>
      </section>

      <section className="py-20">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Info */}
            <SectionReveal>
              <div>
                <SectionHeader title="Get in Touch" centered={false} />
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl gradient-aqua flex items-center justify-center shrink-0">
                      <MapPin className="text-accent-foreground" size={20} />
                    </div>
                    <div>
                      <h4 className="font-display font-semibold mb-1">Address</h4>
                      <p className="text-muted-foreground text-sm">
                        Groundwater Quality & Quantity Laboratory<br />
                        Department of Hydrology<br />
                        Indian Institute of Technology Roorkee<br />
                        Roorkee, Uttarakhand 247667, India
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl gradient-aqua flex items-center justify-center shrink-0">
                      <Mail className="text-accent-foreground" size={20} />
                    </div>
                    <div>
                      <h4 className="font-display font-semibold mb-1">Email</h4>
                      <a href="mailto:brijesh.yadav@hy.iitr.ac.in" className="text-aqua-dark hover:underline text-sm">
                        brijesh.yadav@hy.iitr.ac.in
                      </a>
                    </div>
                  </div>
                </div>

                {/* Map embed */}
                <div className="mt-8 rounded-xl overflow-hidden border border-border shadow-lg">
                  <iframe
                    title="IIT Roorkee Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.789!2d77.8963!3d29.8644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390eb36100000001%3A0x7f2f2f2f2f2f2f2f!2sIIT+Roorkee!5e0!3m2!1sen!2sin!4v1700000000000"
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </SectionReveal>

            {/* Form */}
            <SectionReveal delay={200}>
              <div className="glass-card p-8">
                <h3 className="font-display text-2xl font-bold mb-6">Send a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-aqua/50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-aqua/50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Subject</label>
                    <input
                      type="text"
                      required
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-aqua/50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Message</label>
                    <textarea
                      required
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-aqua/50 resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3.5 rounded-lg gradient-aqua text-accent-foreground font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                  >
                    <Send size={18} /> Send Message
                  </button>
                </form>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
