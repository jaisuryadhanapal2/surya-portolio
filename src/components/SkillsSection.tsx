import { useEffect, useRef, useState } from "react";

const skills = [
  { name: "Java", level: 85 },
  { name: "Python", level: 70 },
  { name: "HTML", level: 90 },
  { name: "CSS", level: 85 },
  { name: "JavaScript", level: 75 },
  { name: "SQL", level: 80 },
  { name: "Machine Learning", level: 50 },
  { name: "Git & GitHub", level: 75 },
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
          <div className="w-20 h-1 gradient-bg mx-auto rounded-full mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, i) => (
              <div key={skill.name} className="glass-card rounded-xl p-5 hover-card-lift">
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full gradient-bg rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: visible ? `${skill.level}%` : "0%",
                      transitionDelay: `${i * 100}ms`,
                    }}
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
