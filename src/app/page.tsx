
const projects = [
  {
    number: "01",
    title: "Iris Flower Classification",
    type: "CLASSIFICATION",
    description:
      "Predicting iris flower species from flower measurements using machine learning algorithms.",
    slug: "iris-flower-classification",
    github: "https://github.com/zaufishanmehmood/iris-flower-classification",
  },
  {
    number: "02",
    title: "Student Pass/Fail Prediction",
    type: "CLASSIFICATION",
    description:
      "Exploring student academic data to build a model that predicts pass or fail outcomes.",
    slug: "student-pass-fail-prediction",
    github: "https://github.com/zaufishanmehmood/Student_Pass_Fail_Prediction",
  },
  {
    number: "03",
    title: "Pakistan House Price Prediction",
    type: "REGRESSION",
    description:
      "Estimating property prices in Pakistan using area, location, bedrooms, and other features.",
    slug: "pakistan-house-price-prediction",
    github: "https://github.com/zaufishanmehmood/Pakistan-House-Price-Prediction",
  },
  {
    number: "04",
    title: "Weather Prediction",
    type: "REGRESSION",
    description:
      "Using historical weather information and regression algorithms to predict maximum temperature.",
    slug: "weather-prediction",
    github: "https://github.com/zaufishanmehmood/weather-prediction-ml",
  },
  {
    number: "05",
    title: "Credit Card Fraud Detection",
    type: "CLASSIFICATION",
    description:
      "Identifying potentially fraudulent transactions and comparing machine learning models.",
    slug: "credit-card-fraud-detection",
    github: "https://github.com/zaufishanmehmood/credit_card_fraud_detection",
  },
];

const skills = [
  "Python",
  "Pandas",
  "NumPy",
  "Scikit-learn",
  "Machine Learning",
  "Data Preprocessing",
  "Model Evaluation",
  "Google Colab",
  "Jupyter Notebook",
  "Git & GitHub",
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#080808] text-[#D1D3D1]">
      {/* Navigation */}
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#home" className="flex items-center">
  <img
    src="/logo.png"
    alt="My Portfolio Logo"
    className="h-10 w-auto object-contain"
  />
</a>

          <nav className="hidden items-center gap-8 text-sm font-semibold text-[#B8BDB8] md:flex">
            <a href="#about" className="transition hover:text-[#B7FF00]">About</a>
            <a href="#projects" className="transition hover:text-[#B7FF00]">Projects</a>
            <a href="#skills" className="transition hover:text-[#B7FF00]">Skills</a>
            <a href="#contact" className="transition hover:text-[#B7FF00]">Contact</a>
          </nav>

          <a
            href="mailto:zaufishanmehmood@gmail.com"
            className="rounded-full bg-[#B7FF00] px-5 py-3 text-sm font-bold text-black transition hover:bg-[#a5e900]"
          >
            Let's connect ↗
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="grid items-center gap-14 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#B8BDB8]">
              <span className="h-2.5 w-2.5 rounded-full bg-[#B7FF00]" />
              AI & Machine Learning Portfolio
            </div>

            <h1 className="max-w-4xl text-5xl font-black leading-[1.04] tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl">
              LEARNING AI.
              <br />
              <span className="relative inline-block">
                <span className="relative z-10">BUILDING</span>
                <span className="absolute bottom-1 left-0 -z-0 h-4 w-full -rotate-1 bg-[#B7FF00]" />
              </span>
              <br />
              <span className="text-[#D1D3D1]">WHAT'S NEXT.</span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-[#B8BDB8]">
              I'm an aspiring AI and Machine Learning professional,
              learning by building practical projects and exploring how
              data can help solve real-world problems.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-full bg-[#B7FF00] px-7 py-4 text-sm font-extrabold text-black transition hover:-translate-y-1 hover:bg-[#a5e900]"
              >
                EXPLORE MY PROJECTS →
              </a>
              <a
                href="https://github.com/zaufishanmehmood"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/25 px-7 py-4 text-sm font-bold text-[#D1D3D1] transition hover:border-[#B7FF00] hover:text-[#B7FF00]"
              >
                GITHUB PROFILE ↗
              </a>
            </div>
          </div>

          {/* Hero information panel */}
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -right-5 -top-5 h-28 w-28 rounded-full bg-[#B7FF00]" />

            <div className="relative rounded-[2rem] border border-white/10 bg-[#171917] p-7 shadow-[0_20px_60px_rgba(0,0,0,0.4)] sm:p-10">
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#B7FF00]">
                My learning mindset
              </p>

              <div className="my-8 h-px bg-white/10" />

              <div className="space-y-5">
                {[
                  ["01", "Learn the fundamentals"],
                  ["02", "Work with real datasets"],
                  ["03", "Build practical projects"],
                  ["04", "Test and keep improving"],
                ].map(([number, label]) => (
                  <div key={number} className="flex items-center gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#B7FF00] text-sm font-black text-black">
                      {number}
                    </span>
                    <span className="text-base font-bold text-[#D1D3D1] sm:text-lg">
                      {label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-9 rounded-2xl bg-black p-5">
                <p className="text-xs font-bold uppercase tracking-widest text-[#B7FF00]">
                  Current focus
                </p>
                <p className="mt-2 text-2xl font-black text-white">AI / ML</p>
                <p className="mt-1 text-sm text-[#A5AAA5]">
                  Practice. Build. Improve.
                </p>
              </div>
            </div>

            <div className="absolute -bottom-5 -left-5 -z-10 h-24 w-24 rounded-full border-[14px] border-[#B7FF00]" />
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="bg-[#B7FF00] text-black">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 py-8 text-center sm:grid-cols-4">
          {[
            ["05", "Featured projects"],
            ["ML", "Learning focus"],
            ["PY", "Python practice"],
            ["∞", "Curiosity to learn"],
          ].map(([value, label]) => (
            <div key={label}>
              <p className="text-3xl font-black">{value}</p>
              <p className="mt-1 text-xs font-bold uppercase tracking-wider">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-8 md:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#B7FF00]">
              01 / ABOUT ME
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">
              A curious mind.
              <br />
              A practical approach.
            </h2>
          </div>

          <div className="max-w-2xl">
            <p className="text-lg leading-8 text-[#B8BDB8]">
              I'm developing my skills in Artificial Intelligence and
              Machine Learning through hands-on practice. Working on
              projects has helped me explore classification, regression,
              data preparation, and model evaluation.
            </p>
            <p className="mt-5 text-lg leading-8 text-[#B8BDB8]">
              I enjoy learning new tools, experimenting with datasets,
              and turning what I learn into working projects. I'm
              interested in opportunities where I can keep learning and
              contribute to meaningful work.
            </p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="bg-[#111311] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#B7FF00]">
                02 / SELECTED WORK
              </p>
              <h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">
                Projects I've worked on.
              </h2>
            </div>

            <a
              href="https://github.com/zaufishanmehmood"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold text-[#D1D3D1] underline decoration-[#B7FF00] decoration-4 underline-offset-4 transition hover:text-[#B7FF00]"
            >
              VIEW ALL ON GITHUB ↗
            </a>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.slug}
                className="flex flex-col rounded-3xl border border-white/10 bg-[#1A1D1A] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#B7FF00]/50 hover:shadow-[0_15px_40px_rgba(183,255,0,0.06)] sm:p-9"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-black text-[#858B85]">
                    {project.number}
                  </span>
                  <span className="rounded-full bg-[#B7FF00]/10 px-3 py-1.5 text-[10px] font-extrabold tracking-widest text-[#B7FF00]">
                    {project.type}
                  </span>
                </div>

                <h3 className="mt-8 text-2xl font-black tracking-tight text-white sm:text-3xl">
                  {project.title}
                </h3>

                <p className="mt-4 flex-1 leading-7 text-[#B8BDB8]">
                  {project.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-3 border-t border-white/10 pt-6">
                  <a
                    href={`/projects/${project.slug}`}
                    className="rounded-full bg-[#B7FF00] px-5 py-3 text-xs font-extrabold text-black transition hover:bg-[#a5e900]"
                  >
                    PROJECT DETAILS →
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-white/20 px-5 py-3 text-xs font-extrabold text-[#D1D3D1] transition hover:border-[#B7FF00] hover:text-[#B7FF00]"
                  >
                    GITHUB ↗
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-10 md:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#B7FF00]">
              03 / MY TOOLKIT
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">
              Tools I'm learning and using.
            </h2>
            <p className="mt-5 leading-7 text-[#B8BDB8]">
              A growing toolkit built through practice and project work.
            </p>
          </div>

          <div className="flex flex-wrap content-start gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-[#D1D3D1] transition hover:border-[#B7FF00] hover:bg-[#B7FF00]/10 hover:text-[#B7FF00]"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-6 pb-24">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#171917] px-7 py-16 sm:px-14 sm:py-20">
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#B7FF00]">
            04 / GET IN TOUCH
          </p>

          <div className="mt-6 grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <h2 className="max-w-3xl text-4xl font-black leading-tight tracking-tight text-white sm:text-6xl">
                Let's connect and
                <span className="text-[#B7FF00]"> build something.</span>
              </h2>
              <a
                href="mailto:zaufishanmehmood@gmail.com"
                className="mt-8 inline-block text-base text-[#B8BDB8] underline decoration-[#B7FF00] underline-offset-8 transition hover:text-white"
              >
                zaufishanmehmood@gmail.com
              </a>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://github.com/zaufishanmehmood"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#B7FF00] px-6 py-4 text-sm font-extrabold text-black hover:bg-[#a5e900]"
              >
                GITHUB ↗
              </a>
              <a
                href="https://www.linkedin.com/in/zaufishan-khan-8358b1216/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/25 px-6 py-4 text-sm font-extrabold text-[#D1D3D1] transition hover:border-[#B7FF00] hover:text-[#B7FF00]"
              >
                LINKEDIN ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-7 text-sm text-[#929892] sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Zaufishan Mehmood</p>
          <p>Learning by building. Always improving.</p>
        </div>
      </footer>
    </main>
  );
}
