import { useEffect, useRef, useState } from "react";

const languages = [
  { name: "Python", level: 75 },
  { name: "Java", level: 85 },
];

const web = [
  { name: "HTML", level: 90 },
  { name: "CSS", level: 85 },
  { name: "PHP", level: 70 },
  { name: "SQL", level: 80 },
];

const SkillsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl" ref={ref}>
        <div className="section-animate">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <h3 className="text-lg font-semibold mb-4 text-primary">Languages</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {languages.map((skill, i) => (
              <div key={skill.name} className="glass-card rounded-xl p-5 hover-card-lift">
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full gradient-bg rounded-full transition-all duration-1000 ease-out"
                    style={{ width: visible ? `${skill.level}%` : "0%", transitionDelay: `${i * 100}ms` }}
                  />
                </div>
              </div>
            ))}
          </div>
          <h3 className="text-lg font-semibold mb-4 text-primary">Web Technologies</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {web.map((skill, i) => (
              <div key={skill.name} className="glass-card rounded-xl p-5 hover-card-lift">
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full gradient-bg rounded-full transition-all duration-1000 ease-out"
                    style={{ width: visible ? `${skill.level}%` : "0%", transitionDelay: `${(i + languages.length) * 100}ms` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
