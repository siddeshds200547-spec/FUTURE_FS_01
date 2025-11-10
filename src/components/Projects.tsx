import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Website Builder Platform",
      description: "A web-based platform in development that enables users to create websites without coding. Focuses on customizable layout sections for ease of use and scalability.",
      technologies: ["HTML", "CSS", "JavaScript"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      status: "In Progress",
      purpose: "To make website creation accessible for students, small businesses, and beginners",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Customer Behavior Analytics & AI",
      description: "Research project exploring how Google Analytics and Firebase track user activity, with AI system integration for automated engagement and personalized responses.",
      technologies: ["Google Analytics", "Firebase", "AI/ML", "JavaScript"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      status: "Concept & Prototype",
      purpose: "To enhance user engagement through behavior-based personalization",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Predictive Lead Manager",
      description: "Node.js-based lead tracking and analysis system. Work includes server configuration, dependency handling, and backend environment setup for customer interaction analysis.",
      technologies: ["Node.js", "Backend", "Server Config", "Analytics"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      status: "Initial Setup",
      purpose: "To analyze customer interactions and support decision-making",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Personal Portfolio Website",
      description: "A professional portfolio showcasing skills, learning journey, and projects. Features clean UI with Home, About, Skills, and Projects sections for professional representation.",
      technologies: ["React", "Tailwind CSS", "TypeScript", "Responsive Design"],
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop",
      status: "In Progress",
      purpose: "Professional representation for learning, networking, and opportunities",
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-primary bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-card border-border overflow-hidden group hover:border-primary transition-all duration-300 hover:shadow-glow-primary"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60"></div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-semibold rounded-full">
                    {project.status}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-3 text-sm">{project.description}</p>
                
                <div className="mb-4 p-3 bg-secondary/50 rounded-md border-l-2 border-primary">
                  <p className="text-xs text-muted-foreground mb-1 font-semibold">Purpose:</p>
                  <p className="text-sm text-foreground">{project.purpose}</p>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-secondary rounded-md text-xs text-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button
                    size="sm"
                    className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Details
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
