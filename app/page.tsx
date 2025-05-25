'use client';

import ProjectCard from "./components/ProjectCard";
import { motion } from "framer-motion";
import { SiReact, SiNextdotjs, SiTailwindcss, SiFramer, SiTypescript, SiGit } from "react-icons/si";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const skills = [
  { name: "React", icon: <SiReact className="text-cyan-400" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
  { name: "Framer Motion", icon: <SiFramer className="text-pink-500" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
  { name: "Git", icon: <SiGit className="text-orange-500" /> },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white font-sans">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-32 px-6">
        <div className="flex flex-col items-center mt-16">
          <div className="rounded-full w-32 h-32 bg-blue-500 flex items-center justify-center text-white text-4xl font-bold shadow-xl ring-4 ring-blue-400/50">
            KL
          </div>
          <h1 className="mt-4 text-3xl font-bold text-center">Hi, I&apos;m Kim Leak 👋</h1>
        </div>
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
          👋 Hey, I&apos;m <span className="text-blue-400">Kim Leak</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-300 max-w-2xl">
          I&apos;m a frontend developer who enjoys creating sleek, scalable, and accessible websites.
        </p>
        <div className="mt-6 space-x-4">
          <a href="#projects" className="px-5 py-2 bg-blue-500 hover:bg-blue-600 rounded-full font-medium">
            View Projects
          </a>
          <a href="#contact" className="px-5 py-2 border border-white rounded-full font-medium hover:bg-white hover:text-slate-900">
            Contact Me
          </a>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6">
        <h2 className="text-4xl font-bold text-center mb-12">💼 Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <ProjectCard
            title="Portfolio Website"
            description="A sleek personal portfolio site built with Next.js, Tailwind CSS, and Framer Motion."
            techStack={['Next.js', 'Tailwind CSS', 'Framer Motion']}
            imageUrl="/images/portfolio-preview.png" // put image in public/images/
            projectUrl="https://kimleak.vercel.app"
            githubUrl="https://github.com/kimleak/kimleak-portfolio"
            index={0}
          />

          <ProjectCard
            title="Project One"
            description="A brief description of the project. What it does and how you built it."
            techStack={["React", "Next.js", "Tailwind CSS"]}
            projectUrl="https://github.com/yourusername/project-one"
            githubUrl="https://github.com/yourusername/project-one"
            index={1}
          />
          <ProjectCard
            title="Project Two"
            description="Another cool project description with technologies used."
            techStack={["TypeScript", "Node.js", "MongoDB"]}
            projectUrl="https://github.com/yourusername/project-two"
            githubUrl="https://github.com/yourusername/project-two"
            index={2}
          />
        </div>
      </section>

      {/* About Section */}
      <motion.section
        id="about"
        className="py-24 px-6 bg-slate-900 text-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">🙋‍♂️ About Me</h2>
          <p className="text-slate-300 text-lg">
          I&apos;m Kim Leak — a frontend developer who thrives on building sleek, scalable, and accessible web applications.
            I work mainly with React, Next.js, and Tailwind CSS.
            With a strong focus on performance and user experience, I enjoy turning ideas into real, polished products.
          </p>
          <p className="text-lg text-slate-400">
            My toolkit includes <span className="text-white font-semibold">React</span>, <span className="text-white font-semibold">Next.js</span>, <span className="text-white font-semibold">Tailwind CSS</span>, and <span className="text-white font-semibold">Framer Motion</span>.
            I am currently exploring the world of UI animations, accessibility-first design, and AI-powered tooling.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-4 text-center">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center bg-slate-800 rounded-lg py-3 text-slate-200 hover:bg-slate-700 transition"
            >
              <span className="text-3xl mb-2">{skill.icon}</span>
              <span className="text-base">{skill.name}</span>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6">
        <div className="text-center max-w-xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">📫 Let&apos;s Connect</h2>
          <p className="text-slate-300 mb-6">Reach out for collaborations or just say hello 👇</p>
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <a
              href="mailto:thornkimleak@gmail.com"
              className="px-6 py-3 bg-blue-500 text-white font-medium rounded-full shadow hover:bg-blue-600 transition"
            >
              Send an Email
            </a>

            <a
              href="/kimleak-cv.pdf"
              download
              className="px-6 py-3 border border-white text-white font-medium rounded-full hover:bg-white hover:text-slate-900 transition"
            >
              Download CV
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="flex justify-center gap-6 py-6 text-xl text-slate-400">
        <a
          href="https://github.com/kimleak"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 hover:scale-110 transition-transform transition-colors duration-200 cursor-pointer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/yourhandle"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 hover:scale-110 transition-transform transition-colors duration-200 cursor-pointer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
      </footer>
    </main>
  );
}
