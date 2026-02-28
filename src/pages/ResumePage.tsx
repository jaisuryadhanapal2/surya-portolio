import { ArrowLeft, Download } from "lucide-react";
import { Link } from "react-router-dom";

const ResumePage = () => (
  <div className="min-h-screen bg-background flex flex-col">
    <div className="container mx-auto px-4 py-6 flex items-center justify-between">
      <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">
        <ArrowLeft size={16} /> Back to Portfolio
      </Link>
      <a
        href="/resume.pdf"
        download="Jai_Surya_D_Resume.pdf"
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg gradient-bg text-primary-foreground font-medium glow-button text-sm"
      >
        <Download size={16} /> Download Resume
      </a>
    </div>
    <div className="flex-1 container mx-auto px-4 pb-8">
      <div className="glass-card rounded-xl overflow-hidden h-[calc(100vh-120px)]">
        <iframe
          src="/resume.pdf"
          className="w-full h-full border-0"
          title="Jai Surya D - Resume"
        />
      </div>
    </div>
  </div>
);

export default ResumePage;
