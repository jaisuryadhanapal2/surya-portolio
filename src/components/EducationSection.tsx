import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "B.E. Computer Science Engineering",
    institution: "Indra Ganesan College of Engineering, Trichy",
    period: "2022 – 2026",
  },
  {
    degree: "Higher Secondary (HSC)",
    institution: "Sevai Shanthi School",
    period: "Completed",
  },
];

const EducationSection = () => (
  <section id="education" className="py-20 px-4">
    <div className="container mx-auto max-w-4xl">
      <div className="section-animate">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          <span className="gradient-text">Education</span>
        </h2>
        <div className="w-20 h-1 gradient-bg mx-auto rounded-full mb-12" />
        <div className="space-y-6">
          {education.map((edu, i) => (
            <div key={i} className="glass-card rounded-xl p-6 hover-card-lift flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center flex-shrink-0">
                <GraduationCap className="text-primary-foreground" size={22} />
              </div>
              <div>
                <h3 className="font-semibold text-lg">{edu.degree}</h3>
                <p className="text-sm text-muted-foreground">{edu.institution}</p>
                <p className="text-xs text-primary font-medium mt-1">{edu.period}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default EducationSection;
