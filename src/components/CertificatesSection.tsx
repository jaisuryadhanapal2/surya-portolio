import { Award, ExternalLink } from "lucide-react";

const certs = [
  { title: "Python", org: "Great Learning", date: "Oct 2024" },
  { title: "MongoDB Basics", org: "MongoDB", date: "Aug 2025" },
  { title: "Full Stack Internship", org: "E-Soft IT Solutions", date: "Jun 2024" },
];

const CertificatesSection = () => (
  <section id="certificates" className="py-20 px-4 bg-muted/30">
    <div className="container mx-auto max-w-4xl">
      <div className="section-animate">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          <span className="gradient-text">Certificates</span>
        </h2>
        <div className="w-20 h-1 gradient-bg mx-auto rounded-full mb-12" />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {certs.map((c, i) => (
            <div key={i} className="glass-card rounded-xl p-6 text-center hover-card-lift">
              <div className="w-14 h-14 rounded-full gradient-bg flex items-center justify-center mx-auto mb-4">
                <Award className="text-primary-foreground" size={24} />
              </div>
              <h3 className="font-semibold mb-1">{c.title}</h3>
              <p className="text-sm text-muted-foreground mb-1">{c.org}</p>
              <p className="text-xs text-muted-foreground mb-4">{c.date}</p>
              <button className="text-sm text-primary font-medium hover:underline inline-flex items-center gap-1">
                View Certificate <ExternalLink size={12} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default CertificatesSection;
