import { Github, ExternalLink } from "lucide-react";

const GitHubSection = () => (
  <section className="py-20 px-4">
    <div className="container mx-auto max-w-3xl">
      <div className="section-animate">
        <div className="glass-card rounded-2xl p-8 md:p-12 text-center">
          <div className="w-20 h-20 rounded-full gradient-bg flex items-center justify-center mx-auto mb-6">
            <Github className="text-primary-foreground" size={36} />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Find me on GitHub</h2>
          <p className="text-muted-foreground mb-2">@jaisuryadhanapal2</p>
          <p className="text-sm text-muted-foreground mb-6">
            Check out my repositories, contributions, and open source projects.
          </p>
          <a
            href="https://github.com/jaisuryadhanapal2"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg gradient-bg text-primary-foreground font-medium glow-button"
          >
            <Github size={18} /> View My GitHub Profile <ExternalLink size={14} />
          </a>
          <div className="mt-8">
            <img
              src="https://github-readme-stats.vercel.app/api?username=jaisuryadhanapal2&show_icons=true&theme=tokyonight&hide_border=true&bg_color=00000000"
              alt="GitHub Stats"
              className="mx-auto max-w-full rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default GitHubSection;
