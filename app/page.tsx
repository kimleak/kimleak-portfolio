import Image from "next/image";
import { motion } from "framer-motion";
import ProjectCard from "./components/ProjectCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white font-sans">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-32 px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
          👋 Hey, I'm <span className="text-blue-400">Kim Leak</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-300 max-w-2xl">
          A creative developer building modern and performant web experiences with passion.
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
            githubUrl="https://github.com/yourusername/kimleak-portfolio"
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
      <section id="about" className="py-24 px-6 bg-slate-800">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">🙋‍♂️ About Me</h2>
          <p className="text-slate-300 text-lg">
            I'm a frontend developer who enjoys creating sleek, scalable, and accessible websites.
            I work mainly with React, Next.js, and Tailwind CSS.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6">
        <div className="text-center max-w-xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">📫 Let's Connect</h2>
          <p className="text-slate-300 mb-6">Reach out for collaborations or just say hello 👇</p>
          <a
            href="mailto:youremail@example.com"
            className="text-lg bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full inline-block"
          >
            Send an Email
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-slate-400 text-sm">
        © {new Date().getFullYear()} Kim Leak. All rights reserved.
      </footer>
    </main>
  );
}
