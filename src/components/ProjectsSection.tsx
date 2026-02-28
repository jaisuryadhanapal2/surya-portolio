import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    emoji: "🌾",
    title: "Smart Agriculture System",
    subtitle: "Direct Farmer to Market Integration",
    description:
      "An app-based smart agriculture platform that connects farmers directly with customers, eliminating middlemen and increasing farmer profits. Follows an order-based model to reduce waste.",
    features: [
      "Real-time inventory updates",
      "Order-based supply chain",
      "Role-based secure access",
      "Demand insights and crop health support",
    ],
    tech: ["Flutter", "React", "Python Flask", "PostgreSQL"],
    github: "https://github.com/jaisuryadhanapal2",
  },
  {
    emoji: "🎓",
    title: "Student Details Management System",
    subtitle: "CRUD Application",
    description:
      "A responsive Student Management System to manage student records efficiently with features like adding, updating, deleting, and viewing student details with smooth frontend-backend integration.",
    features: [
      "Full CRUD operations",
      "Responsive design",
      "Frontend-backend integration",
      "Efficient data handling",
    ],
    tech: ["HTML", "CSS", "PHP", "MySQL"],
    github: "https://github.com/jaisuryadhanapal2",
  },
  {
    emoji: "💻",
    title: "Personal Portfolio Website",
    subtitle: "Web Development",
    description:
      "A modern, responsive personal portfolio website showcasing projects, skills, and experience with clean design and smooth animations.",
    features: [
      "Responsive design",
      "Smooth animations",
      "Modern UI/UX",
      "Contact form",
    ],
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/jaisuryadhanapal2",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="section-animate">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 gradient-bg mx-auto rounded-full mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <div key={i} className="glass-card rounded-xl overflow-hidden hover-card-lift flex flex-col">
                <div className="p-6 flex-1">
                  <div className="text-4xl mb-3">{project.emoji}</div>
                  <h3 className="font-bold text-lg mb-1">{project.title}</h3>
                  <p className="text-xs text-primary font-medium mb-3">{project.subtitle}</p>
                  <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                  <ul className="space-y-1 mb-4">
                    {project.features.map((f, j) => (
                      <li key={j} className="text-xs text-muted-foreground flex items-start gap-1.5">
                        <span className="text-primary mt-0.5">•</span> {f}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span key={t} className="text-[10px] px-2 py-1 rounded-full bg-primary/10 text-primary font-medium">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="px-6 pb-5">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                  >
                    <Github size={16} /> View on GitHub <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
