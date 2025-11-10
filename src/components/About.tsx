import { Card } from "@/components/ui/card";
import { Code2, Palette, Rocket } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <Code2 className="w-8 h-8 text-primary" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable code with best practices",
    },
    {
      icon: <Palette className="w-8 h-8 text-primary" />,
      title: "Creative Design",
      description: "Crafting beautiful and intuitive user interfaces",
    },
    {
      icon: <Rocket className="w-8 h-8 text-primary" />,
      title: "Fast Performance",
      description: "Optimizing for speed and seamless user experience",
    },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-primary bg-clip-text text-transparent">
          About Me
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              I am Siddesh DS, a CSE student with a developing focus in web development. I am building strong 
              fundamentals in HTML, CSS, and JavaScript, with growing interest in scalable application structure 
              and clean UI design.
            </p>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              I work to write organized and maintainable code, learn through practical projects, and improve both 
              technical and problem-solving skills. My approach combines hands-on learning with theoretical 
              understanding to build robust web applications.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              I am motivated to continue developing toward full stack proficiency through consistent practice and 
              real project experience. Each project is an opportunity to strengthen my skills and explore new 
              technologies.
            </p>
          </div>

          <div className="grid gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="p-6 bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-glow-primary"
              >
                <div className="flex items-start gap-4">
                  {feature.icon}
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
