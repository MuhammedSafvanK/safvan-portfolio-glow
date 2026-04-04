import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

const education = [
  {
    institution: "Lovely Professional University",
    location: "Phagwara, Punjab",
    degree: "Bachelor of Technology - Computer Science and Engineering",
    score: "CGPA: 6.89",
    period: "Aug' 23 – Present",
  },
  {
    institution: "GOVT. H S S Parambil",
    location: "Kozhikode, Kerala",
    degree: "Intermediate",
    score: "Percentage: 89%",
    period: "Jun' 19 – May' 21",
  },
  {
    institution: "GOVT. H S Payambra",
    location: "Kozhikode, Kerala",
    degree: "Matriculation",
    score: "Percentage: 91%",
    period: "Jun' 17 – May' 18",
  },
];

const EducationSection = () => (
  <section id="education" className="py-20 px-4 md:px-8">
    <div className="max-w-5xl mx-auto">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center mb-12 text-gradient"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Education
      </motion.h2>

      <div className="relative border-l-2 border-primary/40 ml-4 md:ml-8 space-y-10">
        {education.map((edu, i) => (
          <motion.div
            key={i}
            className="relative pl-8 md:pl-12"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
          >
            {/* Timeline dot */}
            <span className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-primary shadow-[0_0_10px_hsl(var(--primary)/0.6)]" />

            <div className="glow-border rounded-xl p-5 md:p-6 bg-card">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 mb-2">
                <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                  <GraduationCap size={20} className="text-primary" />
                  {edu.institution}
                </h3>
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  <Calendar size={14} /> {edu.period}
                </span>
              </div>

              <p className="text-sm text-muted-foreground flex items-center gap-1 mb-1">
                <MapPin size={14} className="text-primary/70" /> {edu.location}
              </p>
              <p className="text-sm text-foreground/90">{edu.degree}</p>
              <p className="text-sm font-medium text-primary mt-1">{edu.score}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default EducationSection;
