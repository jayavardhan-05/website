import { useState } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Terminal,
  Cpu,
  Globe,
  Database,
  BookOpen,
  Award,
  ExternalLink,
  Code2,
  Download,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import heroBg from "@assets/generated_images/abstract_ai_neural_network_background.png";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Home() {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${contactForm.name}`);
    const body = encodeURIComponent(
      `Name: ${contactForm.name}\nEmail: ${contactForm.email}\n\nMessage:\n${contactForm.message}`
    );
    window.location.href = `mailto:jayavardhan4140@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-display font-bold text-xl tracking-wider text-primary">
            JV.
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium">
            <button
              onClick={() => scrollToSection("about")}
              className="hover:text-primary transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="hover:text-primary transition-colors"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="hover:text-primary transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="hover:text-primary transition-colors"
            >
              Contact
            </button>
          </div>
          <Button
            variant="outline"
            size="sm"
            className="border-primary/50 hover:bg-primary/10 hover:text-primary"
            asChild
          >
            <a href="mailto:jayavardhan4140@gmail.com">Hire Me</a>
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-background/80 z-10" />
          <img
            src={heroBg}
            alt="Background"
            className="w-full h-full object-cover opacity-60"
          />
        </div>

        <div className="container mx-auto px-6 relative z-20 pt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <Badge
              variant="outline"
              className="mb-4 border-primary/50 text-primary bg-primary/5 backdrop-blur-sm px-4 py-1"
            >
              Available for Opportunities
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold font-display mb-6 leading-tight">
              Jaya Vardhan <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
                Muthyala
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-xl leading-relaxed">
              Computer Science Engineer specializing in AI & ML. Building
              intelligent systems that bridge the gap between data and
              decision-making.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-background font-semibold"
                onClick={() => scrollToSection("projects")}
              >
                View Projects
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 hover:bg-white/5"
                asChild
              >
                <a href="/resume.pdf" download="Jaya_Vardhan_Resume.pdf">
                  <Download className="mr-2 h-4 w-4" /> Resume
                </a>
              </Button>
              <div className="flex gap-2">
                <Button
                  size="icon"
                  variant="ghost"
                  className="hover:bg-white/10"
                  asChild
                >
                  <a
                    href="https://www.linkedin.com/in/jaya-vardhan-375945305"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
                <Button
                  size="icon"
                  variant="ghost"
                  className="hover:bg-white/10"
                  asChild
                >
                  <a
                    href="https://github.com/jayavardhan-05"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-3xl font-bold font-display mb-6">About Me</h2>
              <div className="prose prose-invert text-muted-foreground">
                <p className="mb-4">
                  I am a motivated Computer Science graduate from Dhanekula
                  Institute of Engineering and Technology, specializing in
                  Artificial Intelligence and Machine Learning.
                </p>
                <p className="mb-4">
                  My academic journey has been fueled by a passion for solving
                  complex problems through technology. I have maintained a
                  strong GPA of 8.52/10.0 while actively building projects that
                  leverage cutting-edge technologies like LLMs and RAG
                  architectures.
                </p>
                <p>
                  I am eager to contribute to dynamic teams and gain hands-on
                  experience in the IT industry, translating my theoretical
                  knowledge into impactful solutions.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <Card className="bg-background/50 border-white/5">
                  <CardContent className="p-4 flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                      <BookOpen className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Education</p>
                      <p className="font-semibold">B.Tech CS (AI & ML)</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-background/50 border-white/5">
                  <CardContent className="p-4 flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                      <Award className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">GPA</p>
                      <p className="font-semibold">8.52 / 10.0</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-blue-600 rounded-2xl opacity-20 blur-2xl" />
              <Card className="relative bg-background border-white/10 overflow-hidden">
                <CardHeader>
                  <CardTitle>Education Timeline</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="relative pl-6 border-l border-primary/20 pb-6 last:pb-0">
                    <div className="absolute left-[-5px] top-0 h-2.5 w-2.5 rounded-full bg-primary" />
                    <span className="text-xs text-primary font-mono mb-1 block">
                      June 2027 (Expected)
                    </span>
                    <h4 className="font-semibold">
                      B.Tech in Computer Science (AI & ML)
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Dhanekula Institute of Engineering and Technology
                    </p>
                  </div>
                  <div className="relative pl-6 border-l border-primary/20">
                    <div className="absolute left-[-5px] top-0 h-2.5 w-2.5 rounded-full bg-primary/50" />
                    <h4 className="font-semibold">Coursework</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Artificial Intelligence, Machine Learning, Deep Learning,
                      Web Development
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold font-display mb-4">
              Technical Arsenal
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              A comprehensive toolkit of languages, frameworks, and technologies
              I use to build intelligent applications.
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            <SkillCard
              icon={<Code2 className="h-6 w-6" />}
              title="Languages"
              skills={["Python", "Java", "C"]}
              delay={0}
            />
            <SkillCard
              icon={<Cpu className="h-6 w-6" />}
              title="AI & ML"
              skills={["NLP", "LLMs", "Deep Learning", "Generative AI"]}
              delay={0.1}
            />
            <SkillCard
              icon={<Globe className="h-6 w-6" />}
              title="Web Dev"
              skills={["HTML", "CSS", "JavaScript", "Streamlit"]}
              delay={0.2}
            />
            <SkillCard
              icon={<Database className="h-6 w-6" />}
              title="Cloud & DevOps"
              skills={["SQL", "AWS", "Docker", "Kubernetes"]}
              delay={0.3}
            />
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-12 flex items-end justify-between"
          >
            <div>
              <h2 className="text-3xl font-bold font-display mb-4">
                Featured Projects
              </h2>
              <p className="text-muted-foreground">
                Showcasing practical applications of AI and Web Technologies.
              </p>
            </div>
            <Button variant="ghost" className="hidden md:flex" asChild>
              <a
                href="https://github.com/jayavardhan-05"
                target="_blank"
                rel="noopener noreferrer"
              >
                View All on GitHub <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="MedAI RAG"
              description="Retrieval-Augmented Generation chatbot for medical info retrieval. Combines document retrieval with generative models for high accuracy."
              tags={["RAG", "LLM", "Python", "Medical AI"]}
              link="https://github.com/jayavardhan-05/MedAI_Rag_Bot"
            />
            <ProjectCard
              title="Smart Fertilizer Recommender"
              description="ML-powered web app using Random Forest to recommend fertilizers based on soil data. Full pipeline from engineering to deployment."
              tags={["Machine Learning", "Scikit-learn", "Streamlit", "Pandas"]}
              link="https://github.com/jayavardhan-05/Fertilizer"
            />
            <ProjectCard
              title="Quizz Master App"
              description="Interactive quiz application with dynamic questions, scoring, and timer features. Built with Python."
              tags={["Python", "Interactive UI", "Logic"]}
              link="https://github.com/jayavardhan-05/Quizz_Interface"
            />
          </div>
        </div>
      </section>

      {/* Certifications & Achievements */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h3 className="text-2xl font-bold font-display mb-6 flex items-center gap-2">
                <Award className="text-primary" /> Certifications
              </h3>
              <div className="space-y-4">
                <CertificationItem
                  title="Deep Learning for Developers"
                  issuer="Infosys Spring Board"
                />
                <CertificationItem
                  title="Generative Models for Developers"
                  issuer="Professional Certification"
                />
                <CertificationItem
                  title="MongoDB Basics"
                  issuer="Professional Certification"
                />
                <CertificationItem
                  title="AI & Data Analytics Internship"
                  issuer="AICTE (4-week virtual)"
                />
              </div>
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h3 className="text-2xl font-bold font-display mb-6 flex items-center gap-2">
                <Terminal className="text-primary" /> Achievements
              </h3>
              <Card className="bg-primary/5 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-lg">
                    Amaravati Quantum Valley Hackathon 2025
                  </CardTitle>
                  <CardDescription>
                    Finalist (Top Teams) - Organized by APSCHE
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Selected as Runner-Up at Regional Round (AQUV918 problem
                    statement) and advanced to the Grand Finale. Demonstrated
                    strong problem-solving skills under pressure.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold font-display mb-4">
              Let's Connect
            </h2>
            <p className="text-muted-foreground">
              Interested in collaborating on AI projects or hiring? Reach out to
              me.
            </p>
          </motion.div>

          <Card className="bg-background border-white/10">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <h4 className="text-xl font-semibold mb-4">
                    Contact Information
                  </h4>
                  <div className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors">
                    <Mail className="h-5 w-5" />
                    <a href="mailto:jayavardhan4140@gmail.com">
                      jayavardhan4140@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors">
                    <Linkedin className="h-5 w-5" />
                    <a
                      href="https://www.linkedin.com/in/jaya-vardhan-375945305"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      linkedin.com/in/jaya-vardhan
                    </a>
                  </div>
                  <div className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors">
                    <Github className="h-5 w-5" />
                    <a
                      href="https://github.com/jayavardhan-05"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      github.com/jayavardhan-05
                    </a>
                  </div>
                </div>

                <form
                  className="space-y-4"
                  onSubmit={handleContactSubmit}
                >
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Name</label>
                      <Input
                        placeholder="Your Name"
                        className="bg-secondary/50 border-white/10"
                        value={contactForm.name}
                        onChange={(e) =>
                          setContactForm({ ...contactForm, name: e.target.value })
                        }
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Email</label>
                      <Input
                        type="email"
                        placeholder="Your Email"
                        className="bg-secondary/50 border-white/10"
                        value={contactForm.email}
                        onChange={(e) =>
                          setContactForm({ ...contactForm, email: e.target.value })
                        }
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Message</label>
                    <Textarea
                      placeholder="How can I help you?"
                      className="min-h-[120px] bg-secondary/50 border-white/10"
                      value={contactForm.message}
                      onChange={(e) =>
                        setContactForm({ ...contactForm, message: e.target.value })
                      }
                      required
                    />
                  </div>
                  <Button 
                    type="submit"
                    className="w-full bg-primary text-background hover:bg-primary/90 font-semibold"
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10 text-center text-sm text-muted-foreground">
        <p>© 2025 Jaya Vardhan Muthyala. All rights reserved.</p>
      </footer>
    </div>
  );
}

function SkillCard({
  icon,
  title,
  skills,
  delay,
}: {
  icon: React.ReactNode;
  title: string;
  skills: string[];
  delay: number;
}) {
  return (
    <motion.div variants={fadeInUp}>
      <Card className="h-full bg-background/50 border-white/5 hover:border-primary/50 transition-colors duration-300">
        <CardHeader>
          <div className="mb-4 p-3 bg-primary/10 w-fit rounded-xl text-primary">
            {icon}
          </div>
          <CardTitle className="text-lg">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Badge key={skill} variant="secondary" className="font-normal">
                {skill}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function ProjectCard({
  title,
  description,
  tags,
  link,
}: {
  title: string;
  description: string;
  tags: string[];
  link: string;
}) {
  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card className="h-full bg-background border-white/10 overflow-hidden flex flex-col group">
        <div className="h-2 bg-gradient-to-r from-primary to-blue-600 w-full" />
        <CardHeader>
          <div className="flex justify-between items-start">
            <CardTitle className="text-xl group-hover:text-primary transition-colors">
              {title}
            </CardTitle>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <ExternalLink className="h-5 w-5" />
            </a>
          </div>
          <CardDescription className="line-clamp-3">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent className="mt-auto">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="text-xs border-primary/20 text-primary/80"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function CertificationItem({
  title,
  issuer,
}: {
  title: string;
  issuer: string;
}) {
  return (
    <div className="flex items-start gap-4 p-4 rounded-lg bg-background/50 border border-white/5 hover:border-primary/20 transition-colors">
      <div className="mt-1 h-2 w-2 rounded-full bg-primary shadow-[0_0_10px_rgba(34,211,238,0.5)]" />
      <div>
        <h5 className="font-semibold">{title}</h5>
        <p className="text-sm text-muted-foreground">{issuer}</p>
      </div>
    </div>
  );
}
