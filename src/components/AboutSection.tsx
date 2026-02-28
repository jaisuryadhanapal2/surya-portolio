import { Code, Brain, Zap, BookOpen } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="section-animate">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 gradient-bg mx-auto rounded-full mb-8" />
          <p className="text-muted-foreground text-center text-lg mb-12 max-w-2xl mx-auto">
            I'm a B.E. Computer Science Engineering student at Indra Ganesan College of Engineering, Trichy (2022–2026).
            I'm passionate about software development and eager to contribute technical skills while growing in a dynamic organization.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { icon: Code, title: "Strong in Java & OOPS", desc: "Deep understanding of object-oriented programming principles" },
              { icon: Brain, title: "Good Problem Solver", desc: "Analytical thinker with a knack for debugging and optimization" },
              { icon: Zap, title: "ML Knowledge", desc: "Basic understanding of Machine Learning concepts and applications" },
              { icon: BookOpen, title: "Quick Learner", desc: "Adaptable and eager to learn new technologies rapidly" },
            ].map((item, i) => (
              <div key={i} className="glass-card rounded-xl p-6 hover-card-lift">
                <div className="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center mb-4">
                  <item.icon className="text-primary-foreground" size={22} />
                </div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
