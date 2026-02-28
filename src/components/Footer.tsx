import { Github, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => (
  <footer className="py-8 px-4 border-t border-border">
    <div className="container mx-auto max-w-5xl flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground">© 2026 Jai Surya D. All rights reserved.</p>
      <div className="flex items-center gap-4">
        {[
          { icon: Github, href: "https://github.com/jaisuryadhanapal2" },
          { icon: Linkedin, href: "https://www.linkedin.com/in/jai-surya-066b6b353" },
          { icon: Mail, href: "mailto:jaisuryadhanapal20@gmail.com" },
          { icon: Phone, href: "tel:+919843779101" },
        ].map((item, i) => (
          <a
            key={i}
            href={item.href}
            target={item.href.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            className="w-9 h-9 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
          >
            <item.icon size={16} />
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
