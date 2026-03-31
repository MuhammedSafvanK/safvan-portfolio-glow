import { motion } from "framer-motion";
import { Mail, FileText } from "lucide-react";
import profileImg from "@/assets/profile.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          About <span className="text-gradient">Me</span>
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-shrink-0"
          >
            <div className="w-56 h-56 md:w-72 md:h-72 rounded-2xl overflow-hidden glow-border">
              <img
                src={profileImg}
                alt="Muhammed Safvan K"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <h3 className="text-xl font-semibold mb-4 text-foreground">
              Computer Science Engineering Student
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I'm a dedicated Computer Science Engineering student at Lovely Professional University with a passion for building impactful software solutions. Proficient in C, C++, Python, and Java, I bring hands-on experience with frameworks like Django and Flask, along with solid database skills using MySQL and PostgreSQL.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              I'm deeply focused on writing clean, maintainable code and solving complex problems through data structures and algorithms. My goal is to create scalable, real-world applications that make a difference. I thrive in collaborative environments and continuously seek opportunities to learn and grow as a software developer.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all duration-200 flex items-center gap-2"
              >
                Get In Touch <Mail size={16} />
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-lg border border-primary/50 text-primary font-semibold hover:bg-primary/10 transition-all duration-200 flex items-center gap-2"
              >
                View CV <FileText size={16} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
