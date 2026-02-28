import { Trophy } from "lucide-react";

const accomplishments = [
  {
    title: "24 Hour Hackathon",
    org: "SRM University",
    description: "Participated in an intensive 24-hour hackathon, building innovative solutions under pressure.",
  },
  {
    title: "Project Expo",
    org: "Indra Ganesan College of Engineering",
    description: "Showcased project work and technical skills at the college-level project exposition.",
  },
];

const AccomplishmentsSection = () => (
  <section id="accomplishments" className="py-20 px-4 bg-muted/30">
    <div className="container mx-auto max-w-4xl">
      <div className="section-animate">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          <span className="gradient-text">Accomplishments</span>
        </h2>
        <div className="w-20 h-1 gradient-bg mx-auto rounded-full mb-12" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {accomplishments.map((item, i) => (
            <div key={i} className="glass-card rounded-xl p-6 hover-card-lift text-center">
              <div className="w-14 h-14 rounded-full gradient-bg flex items-center justify-center mx-auto mb-4">
                <Trophy className="text-primary-foreground" size={24} />
              </div>
              <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
              <p className="text-sm text-primary font-medium mb-2">{item.org}</p>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default AccomplishmentsSection;
