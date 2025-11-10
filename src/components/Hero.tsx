import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import profileImage from "@/assets/profile.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-dark opacity-50"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(189_94%_55%/0.1),transparent_50%)]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          <div className="flex justify-center mb-6">
            <Avatar className="w-32 h-32 border-4 border-primary shadow-glow-primary">
              <AvatarImage src={profileImage} alt="Siddesh DS" />
              <AvatarFallback>SD</AvatarFallback>
            </Avatar>
          </div>
          <p className="text-primary text-lg mb-4 font-medium">Hi, I'm</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Siddesh DS
          </h1>
          <h2 className="text-2xl md:text-4xl text-foreground mb-6">
            CSE Student & Web Developer
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Building strong fundamentals in web development with a focus on scalable applications and clean UI design
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <Button
              onClick={() => scrollToSection("projects")}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow-primary"
            >
              View My Work
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Contact Me
            </Button>
            <Button
              size="lg"
              variant="secondary"
              className="bg-secondary hover:bg-secondary/80"
              asChild
            >
              <a href="/resume.pdf" download="Siddesh_DS_Resume.pdf">
                <Download className="mr-2" size={18} />
                Download Resume
              </a>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:siddeshds@example.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
