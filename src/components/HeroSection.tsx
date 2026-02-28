import { useEffect, useState } from "react";
import { Phone, Mail, Github, Linkedin } from "lucide-react";
import profileImg from "@/assets/profile.jpg";

const roles = ["Software Developer", "Java Developer", "Web Developer"];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const role = roles[roleIndex];
    let i = 0;
    setDisplayed("");
    setTyping(true);

    const typeInterval = setInterval(() => {
      if (i < role.length) {
        setDisplayed(role.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setTyping(false);
          setTimeout(() => setRoleIndex((prev) => (prev + 1) % roles.length), 500);
        }, 2000);
      }
    }, 80);

    return () => clearInterval(typeInterval);
  }, [roleIndex]);

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-16 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Profile Image */}
          <div className="flex-shrink-0 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden profile-glow border-4 border-primary/20">
                <img src={profileImg} alt="Jai Surya D" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-2 -right-2 w-12 h-12 rounded-full gradient-bg flex items-center justify-center text-2xl animate-float">
                👋
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="text-center lg:text-left flex-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in-up">
              Hi, I'm <span className="gradient-text">Jai Surya</span> 👋
            </h1>
            <div className="text-xl md:text-2xl font-medium text-primary mb-6 h-8 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <span>{displayed}</span>
              <span className={`border-r-2 border-primary ml-1 ${typing ? "animate-blink" : ""}`} />
            </div>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mb-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              Motivated Computer Science Engineering student with hands-on experience in programming and web development.
              Passionate about building user-friendly applications and solving real-world problems using technology.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <a href="#projects" className="px-6 py-3 rounded-lg gradient-bg text-primary-foreground font-medium glow-button">
                View Projects
              </a>
              <a href="/resume.pdf" download="Jai_Surya_D_Resume.pdf" className="px-6 py-3 rounded-lg border border-primary text-primary font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                Download Resume
              </a>
              <a href="#contact" className="px-6 py-3 rounded-lg bg-muted text-foreground font-medium hover:bg-muted/80 transition-all duration-300">
                Contact Me
              </a>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-sm text-muted-foreground animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <a href="tel:+919843779101" className="flex items-center gap-1.5 hover:text-primary transition-colors">
                <Phone size={14} /> +91 9843779101
              </a>
              <a href="mailto:jaisuryadhanapal20@gmail.com" className="flex items-center gap-1.5 hover:text-primary transition-colors">
                <Mail size={14} /> jaisuryadhanapal20@gmail.com
              </a>
              <a href="https://github.com/jaisuryadhanapal2" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-primary transition-colors">
                <Github size={14} /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/jai-surya-066b6b353" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-primary transition-colors">
                <Linkedin size={14} /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
