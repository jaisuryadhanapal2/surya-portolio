import { useState } from "react";
import { Phone, Mail, Github, Linkedin, Send } from "lucide-react";
import { toast } from "sonner";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      toast.success("Message sent successfully! I'll get back to you soon.");
      setForm({ name: "", email: "", message: "" });
      setSending(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-5xl">
        <div className="section-animate">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-20 h-1 gradient-bg mx-auto rounded-full mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold mb-4">Let's Connect</h3>
              <p className="text-muted-foreground mb-6">
                Feel free to reach out for collaboration, opportunities, or just a friendly chat!
              </p>
              {[
                { icon: Phone, label: "+91 9843779101", href: "tel:+919843779101" },
                { icon: Mail, label: "jaisuryadhanapal20@gmail.com", href: "mailto:jaisuryadhanapal20@gmail.com" },
                { icon: Github, label: "jaisuryadhanapal2", href: "https://github.com/jaisuryadhanapal2" },
                { icon: Linkedin, label: "Jai Surya", href: "https://www.linkedin.com/in/jai-surya-066b6b353" },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center flex-shrink-0">
                    <item.icon className="text-primary-foreground" size={18} />
                  </div>
                  <span className="text-sm">{item.label}</span>
                </a>
              ))}
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="glass-card rounded-xl p-6 space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:outline-none transition-colors text-sm"
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:outline-none transition-colors text-sm"
              />
              <textarea
                placeholder="Your Message"
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:outline-none transition-colors text-sm resize-none"
              />
              <button
                type="submit"
                disabled={sending}
                className="w-full py-3 rounded-lg gradient-bg text-primary-foreground font-medium glow-button inline-flex items-center justify-center gap-2 disabled:opacity-50"
              >
                <Send size={16} /> {sending ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
