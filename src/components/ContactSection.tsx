import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, Send } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:muhammedsafvan.k23@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(form.name)}&body=${encodeURIComponent(form.message)}%0A%0AFrom: ${encodeURIComponent(form.email)}`;
    window.open(mailto);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-4"
        >
          Contact <span className="text-gradient">Me</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-muted-foreground text-center mb-16"
        >
          Feel free to reach out for collaboration or opportunities
        </motion.p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <a href="mailto:muhammedsafvan.k23@gmail.com" className="flex items-center gap-4 p-4 rounded-xl bg-card glow-border glow-border-hover transition-all group">
              <Mail className="text-primary" size={24} />
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="text-foreground group-hover:text-primary transition-colors">muhammedsafvan.k23@gmail.com</p>
              </div>
            </a>

            <a href="tel:+919656805068" className="flex items-center gap-4 p-4 rounded-xl bg-card glow-border glow-border-hover transition-all group">
              <Phone className="text-primary" size={24} />
              <div>
                <p className="text-sm text-muted-foreground">Phone</p>
                <p className="text-foreground group-hover:text-primary transition-colors">+91 9656805068</p>
              </div>
            </a>

            <a href="https://linkedin.com/in/safvan23/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl bg-card glow-border glow-border-hover transition-all group">
              <Linkedin className="text-primary" size={24} />
              <div>
                <p className="text-sm text-muted-foreground">LinkedIn</p>
                <p className="text-foreground group-hover:text-primary transition-colors">linkedin.com/in/safvan23/</p>
              </div>
            </a>

            <a href="https://github.com/MuhammedSafvanK" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl bg-card glow-border glow-border-hover transition-all group">
              <Github className="text-primary" size={24} />
              <div>
                <p className="text-sm text-muted-foreground">GitHub</p>
                <p className="text-foreground group-hover:text-primary transition-colors">github.com/MuhammedSafvanK</p>
              </div>
            </a>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <div>
              <input
                type="text"
                placeholder="Your Name"
                required
                maxLength={100}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-card border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none text-foreground placeholder:text-muted-foreground transition-all"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                required
                maxLength={255}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-card border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none text-foreground placeholder:text-muted-foreground transition-all"
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                required
                maxLength={1000}
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-card border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none text-foreground placeholder:text-muted-foreground transition-all resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all duration-200 flex items-center justify-center gap-2"
            >
              Send Message <Send size={16} />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
