import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Inventory Management System",
    description: [
      "Secure web app with authentication and session handling",
      "Full CRUD operations (add, update, delete, view)",
      "Product tracking with category, price, quantity, expiry",
      "Uses PostgreSQL and SQLAlchemy for data persistence",
    ],
    tech: ["Python", "Flask", "SQLAlchemy", "PostgreSQL", "HTML", "Bootstrap"],
    github: "#",
  },
  {
    title: "Food Ordering System",
    description: [
      "Built using C++ with OOP and DSA concepts",
      "O(1) menu lookup using hash tables",
      "Features: order management, receipt generation, stock updates",
      "Modular layered architecture for scalability",
    ],
    tech: ["C++", "DSA"],
    github: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          My <span className="text-gradient">Projects</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card rounded-2xl p-6 md:p-8 glow-border glow-border-hover transition-all duration-300 hover:-translate-y-2 group"
            >
              <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              <ul className="space-y-2 mb-6">
                {project.description.map((item, idx) => (
                  <li key={idx} className="text-muted-foreground text-sm flex items-start gap-2">
                    <span className="text-primary mt-1">▹</span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-mono px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
              >
                <Github size={16} /> View on GitHub <ExternalLink size={14} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
