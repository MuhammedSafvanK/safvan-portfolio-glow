import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, X } from "lucide-react";

const certificates = [
  { title: "Advanced Data Structure", issuer: "LPU", file: "/certificates/advanced-data-structure.pdf" },
  { title: "Computational Theory", issuer: "Infosys Springboard", file: "/certificates/computational-theory.pdf" },
  { title: "Computer Communications", issuer: "Coursera", file: "/certificates/computer-communications.pdf" },
  { title: "Networking", issuer: "Coursera", file: "/certificates/networking.pdf" },
  { title: "Hardware and OS", issuer: "Coursera", file: "/certificates/hardware-and-os.pdf" },
  { title: "Lean Management", issuer: "Simplilearn", file: "/certificates/lean-management.pdf" },
  { title: "Hackathon Certificate", issuer: "LPU", file: "/certificates/hackathon.pdf" },
  { title: "Java Programming", issuer: "Iamneo", file: "/certificates/java-iamneo.pdf" },
  { title: "Object Oriented Programming", issuer: "Iamneo", file: "/certificates/oop-iamneo.pdf" },
  { title: "Data Structures and Algorithm", issuer: "Iamneo", file: "/certificates/dsa-iamneo.pdf" },
];

const CertificatesSection = () => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section id="certificates" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          My <span className="text-gradient">Certificates</span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, i) => (
            <motion.button
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              onClick={() => setSelected(cert.file)}
              className="bg-card rounded-xl p-6 glow-border glow-border-hover transition-all duration-300 hover:-translate-y-1 text-left group"
            >
              <Award size={32} className="text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-foreground mb-1">{cert.title}</h3>
              <p className="text-sm text-muted-foreground">{cert.issuer}</p>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-4xl h-[80vh] bg-card rounded-2xl glow-border overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-secondary hover:bg-secondary/80 text-foreground transition-colors"
              >
                <X size={20} />
              </button>
              <iframe
                src={selected}
                className="w-full h-full"
                title="Certificate Preview"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CertificatesSection;
