
const projects = [
  {
    number: "01",
    title: "Spam Email Detection",
    category: "Machine Learning · Classification",
    description:
      "A machine learning project that identifies spam and legitimate emails using text classification.",
    tags: ["Python", "Naive Bayes", "Logistic Regression"],
  },
  {
    number: "02",
    title: "Iris Flower Classification",
    category: "Machine Learning · Classification",
    description:
      "A classification model that predicts iris flower species using flower measurements.",
    tags: ["Python", "Scikit-learn", "SVM"],
  },
  {
    number: "03",
    title: "Heart Disease Prediction",
    category: "Machine Learning · Healthcare",
    description:
      "A predictive model that analyzes health-related features to estimate heart disease risk.",
    tags: ["Python", "Random Forest", "Pandas"],
  },
  {
    number: "04",
    title: "House Price Prediction",
    category: "Machine Learning · Regression",
    description:
      "A regression project that estimates property prices in Pakistan using property features.",
    tags: ["Python", "Linear Regression", "Random Forest"],
  },
  {
    number: "05",
    title: "Student Pass/Fail Prediction",
    category: "Machine Learning · Classification",
    description:
      "A model that uses student performance data to predict pass or fail outcomes.",
    tags: ["Python", "Pandas", "Scikit-learn"],
  },
];

const skills = [
  "Python",
  "Machine Learning",
  "Data Science",
  "Pandas",
  "NumPy",
  "Scikit-learn",
  "Data Visualization",
  "SQL Fundamentals",
  "Generative AI",
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#070B16] text-white">

      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#070B16]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#home" className="text-xl font-bold tracking-wide">
            Z<span className="text-blue-400">.</span>
          </a>

          <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a href="#home" className="transition hover:text-blue-400">Home</a>
            <a href="#about" className="transition hover:text-blue-400">About</a>
            <a href="#skills" className="transition hover:text-blue-400">Skills</a>
            <a href="#projects" className="transition hover:text-blue-400">Projects</a>
            <a href="#contact" className="transition hover:text-blue-400">Contact</a>
          </div>

          <a
            href="#contact"
            className="rounded-full border border-blue-400/50 px-5 py-2 text-sm text-blue-300 transition hover:bg-blue-500 hover:text-white"
          >
            Let's Connect
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative mx-auto flex min-h-[680px] max-w-7xl items-center px-6 py-24"
      >
        <div className="pointer-events-none absolute -right-32 top-10 h-96 w-96 rounded-full bg-blue-600/20 blur-[120px]" />
        <div className="pointer-events-none absolute -left-40 bottom-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-[100px]" />

        <div className="relative max-w-4xl">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-2 text-sm text-blue-300">
            <span className="h-2 w-2 animate-pulse rounded-full bg-blue-400" />
            Welcome to my portfolio
          </div>

          <p className="mb-4 text-lg text-slate-400">
            Hello, I'm
          </p>

          <h1 className="text-5xl font-bold leading-tight tracking-tight sm:text-7xl">
            Zaufishan
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Mehmood.
            </span>
          </h1>

          <h2 className="mt-7 text-2xl font-semibold text-slate-200 sm:text-3xl">
            Aspiring AI & Machine Learning Professional
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            Exploring the world of Artificial Intelligence and Machine
            Learning through practical projects, continuous learning,
            and problem-solving.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-blue-600 px-7 py-3.5 font-medium shadow-lg shadow-blue-600/20 transition hover:-translate-y-1 hover:bg-blue-500"
            >
              Explore My Projects →
            </a>

            <a
              href="#contact"
              className="rounded-lg border border-white/20 px-7 py-3.5 font-medium text-slate-200 transition hover:-translate-y-1 hover:border-blue-400 hover:text-blue-300"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-16 flex flex-wrap gap-8 border-t border-white/10 pt-8 text-sm text-slate-400">
            <span>✦ Artificial Intelligence</span>
            <span>✦ Machine Learning</span>
            <span>✦ Practical Projects</span>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="border-t border-white/10 bg-[#0B1120]">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
              About Me
            </p>

            <h2 className="text-3xl font-bold sm:text-4xl">
              Learning today.
              <span className="block text-blue-400">
                Building tomorrow.
              </span>
            </h2>
          </div>

          <div className="space-y-5 leading-8 text-slate-400">
            <p>
              I am passionate about Artificial Intelligence and Machine
              Learning, with a growing interest in turning data into
              meaningful solutions.
            </p>

            <p>
              I enjoy learning by building practical projects, experimenting
              with machine learning algorithms, and improving my Python
              and data science skills.
            </p>

            <p>
              My goal is to keep growing, explore new technologies, and
              contribute to projects that solve real-world problems.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
            My Toolkit
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl">
            Technical Skills
          </h2>

          <p className="mt-4 text-slate-400">
            Technologies and concepts I am learning and working with.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
          {skills.map((skill) => (
            <div
              key={skill}
              className="rounded-xl border border-white/10 bg-[#0D1425] p-5 text-center text-sm font-medium text-slate-300 transition duration-300 hover:-translate-y-1 hover:border-blue-400/60 hover:bg-blue-500/10 hover:text-blue-300"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="border-y border-white/10 bg-[#0B1120]">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mb-12">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
              My Work
            </p>

            <h2 className="text-3xl font-bold sm:text-4xl">
              Featured Projects
            </h2>

            <p className="mt-4 text-slate-400">
              Practical projects from my AI and Machine Learning journey.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.number}
                className="group rounded-2xl border border-white/10 bg-[#10192B] p-7 transition duration-300 hover:-translate-y-2 hover:border-blue-400/50 hover:shadow-xl hover:shadow-blue-950/40"
              >
                <div className="mb-8 flex items-center justify-between">
                  <span className="text-3xl font-bold text-blue-400/70">
                    {project.number}
                  </span>
                  <span className="text-xl text-blue-400">↗</span>
                </div>

                <p className="mb-3 text-xs font-medium uppercase tracking-wider text-blue-300">
                  {project.category}
                </p>

                <h3 className="mb-4 text-xl font-semibold transition group-hover:text-blue-300">
                  {project.title}
                </h3>

                <p className="mb-7 text-sm leading-7 text-slate-400">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="mx-auto max-w-5xl px-6 py-24 text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
          Get In Touch
        </p>

        <h2 className="text-3xl font-bold sm:text-5xl">
          Let's connect and
          <span className="block text-blue-400">
            build something meaningful.
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-xl leading-8 text-slate-400">
          I'm interested in learning opportunities, collaborations,
          and connecting with people in the AI and Machine Learning community.
        </p>

        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <a
            href="https://www.linkedin.com/in/zaufishan-khan-8358b1216/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-blue-600 px-8 py-4 font-medium transition hover:-translate-y-1 hover:bg-blue-500"
          >
            Connect on LinkedIn ↗
          </a>

          <a
            href="mailto:zaufishanmehmood@gmail.com"
            className="rounded-lg border border-blue-400/50 px-8 py-4 font-medium text-blue-300 transition hover:-translate-y-1 hover:bg-blue-500/10"
          >
            Send Me an Email ✉
          </a>
        </div>

        <p className="mt-8 text-sm text-slate-500">
          zaufishanmehmood@gmail.com
        </p>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-7 text-center text-sm text-slate-500">
  © 2026 Zaufishan Mehmood. Built with Next.js.
</footer>

    </main>
  );
}
