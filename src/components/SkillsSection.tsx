import { motion } from "framer-motion";
import { Code2, Database, GitBranch, Cpu, Brain, Users, Clock, Lightbulb } from "lucide-react";

const technicalSkills = [
  { name: "C", icon: Code2 },
  { name: "C++", icon: Code2 },
  { name: "Python", icon: Code2 },
  { name: "Java", icon: Code2 },
  { name: "Django", icon: Cpu },
  { name: "Flask", icon: Cpu },
  { name: "MySQL", icon: Database },
  { name: "Git & GitHub", icon: GitBranch },
  { name: "DSA", icon: Brain },
];

const softSkills = [
  { name: "Adaptability", icon: Lightbulb },
  { name: "Analytical Thinking", icon: Brain },
  { name: "Problem-Solving", icon: Lightbulb },
  { name: "Team Collaboration", icon: Users },
];

const SkillCard = ({ name, icon: Icon, index }: { name: string; icon: any; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: index * 0.05 }}
    className="bg-card rounded-xl p-5 flex flex-col items-center gap-3 glow-border glow-border-hover transition-all duration-300 hover:-translate-y-1"
  >
    <Icon size={28} className="text-primary" />
    <span className="text-sm font-medium text-foreground">{name}</span>
  </motion.div>
);

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          My <span className="text-gradient">Skills</span>
        </motion.h2>

        <div className="mb-12">
          <h3 className="text-lg font-semibold text-muted-foreground mb-6 text-center">
            Technical Skills
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {technicalSkills.map((skill, i) => (
              <SkillCard key={skill.name} {...skill} index={i} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-muted-foreground mb-6 text-center">
            Soft Skills
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {softSkills.map((skill, i) => (
              <SkillCard key={skill.name} {...skill} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
