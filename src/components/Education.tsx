import { Card } from "@/components/ui/card";
import { GraduationCap, Award, BookOpen } from "lucide-react";

const Education = () => {
  const education = [
    {
      icon: <GraduationCap className="w-6 h-6 text-primary" />,
      degree: "Bachelor of Engineering in Computer Science",
      institution: "Visvesvaraya Technological University (VTU)",
      period: "Expected 2023-2027",
      description: "Focusing on software development, data structures, algorithms, and web technologies",
      highlights: [
        "Building strong fundamentals in programming",
        "Learning scalable application architecture",
        "Hands-on project development experience",
      ],
    },
  ];

  const achievements = [
    {
      icon: <Award className="w-5 h-5 text-primary" />,
      title: "Web Development Projects",
      description: "Successfully completed multiple web development projects showcasing HTML, CSS, and JavaScript proficiency",
    },
    {
      icon: <BookOpen className="w-5 h-5 text-primary" />,
      title: "Continuous Learning",
      description: "Actively learning and improving through practical projects and real-world problem solving",
    },
  ];

  return (
    <section id="education" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-primary bg-clip-text text-transparent">
          Education & Learning
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-12"></div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Education */}
          {education.map((edu, index) => (
            <Card
              key={index}
              className="p-6 bg-card border-border hover:border-primary transition-all duration-300"
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    {edu.icon}
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-xl font-bold text-foreground">{edu.degree}</h3>
                    <span className="text-sm text-primary font-medium">{edu.period}</span>
                  </div>

                  <p className="text-muted-foreground font-medium mb-3">{edu.institution}</p>
                  <p className="text-muted-foreground mb-4">{edu.description}</p>

                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-foreground">Focus Areas:</p>
                    <ul className="list-disc list-inside space-y-1">
                      {edu.highlights.map((highlight, hIndex) => (
                        <li key={hIndex} className="text-sm text-muted-foreground">
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          ))}

          {/* Achievements */}
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className="p-6 bg-card border-border hover:border-primary transition-all duration-300"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    {achievement.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">{achievement.title}</h4>
                    <p className="text-sm text-muted-foreground">{achievement.description}</p>
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

export default Education;
