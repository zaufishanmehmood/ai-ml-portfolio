
import { notFound } from "next/navigation";

export const instant = false;

const projectDetails = [
  {
    slug: "iris-flower-classification",
    title: "Iris Flower Classification",
    type: "CLASSIFICATION",
    description:
      "Predicting iris flower species from flower measurements using machine learning algorithms.",
    objective:
      "To understand how classification algorithms learn patterns from numerical data and predict flower species.",
    tools: ["Python", "Pandas", "Scikit-learn", "Jupyter Notebook"],
    github: "https://github.com/zaufishanmehmood/iris-flower-classification",
  },
  {
    slug: "student-pass-fail-prediction",
    title: "Student Pass/Fail Prediction",
    type: "CLASSIFICATION",
    description:
      "Exploring student academic data to build a model that predicts pass or fail outcomes.",
    objective:
      "To explore student data and understand how academic features can be used for classification.",
    tools: ["Python", "Pandas", "Scikit-learn", "Jupyter Notebook"],
    github: "https://github.com/zaufishanmehmood/Student_Pass_Fail_Prediction",
  },
  {
    slug: "pakistan-house-price-prediction",
    title: "Pakistan House Price Prediction",
    type: "REGRESSION",
    description:
      "Estimating property prices in Pakistan using area, location, bedrooms, and other features.",
    objective:
      "To compare regression models and explore how property features influence predicted prices.",
    tools: ["Python", "Pandas", "NumPy", "Scikit-learn"],
    github: "https://github.com/zaufishanmehmood/Pakistan-House-Price-Prediction",
  },
  {
    slug: "weather-prediction",
    title: "Weather Prediction",
    type: "REGRESSION",
    description:
      "Using historical weather information and regression algorithms to predict maximum temperature.",
    objective:
      "To prepare historical weather data and apply regression techniques to a prediction task.",
    tools: ["Python", "Pandas", "Scikit-learn", "Jupyter Notebook"],
    github: "https://github.com/zaufishanmehmood/weather-prediction-ml",
  },
  {
    slug: "credit-card-fraud-detection",
    title: "Credit Card Fraud Detection",
    type: "CLASSIFICATION",
    description:
      "Identifying potentially fraudulent transactions and comparing machine learning models.",
    objective:
      "To explore transaction data and understand how classification models distinguish between fraudulent and legitimate transactions.",
    tools: ["Python", "Pandas", "Scikit-learn", "Jupyter Notebook"],
    github: "https://github.com/zaufishanmehmood/credit_card_fraud_detection",
  },
];

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projectDetails.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#080808] text-[#D1D3D1]">
      {/* Header */}
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
          <a href="/" className="flex items-center">
  <img
    src="/logo.png"
    alt="My Portfolio Logo"
    className="h-10 w-auto object-contain"
  />
</a>

          <a
            href="/#projects"
            className="text-sm font-bold text-[#B8BDB8] transition hover:text-[#B7FF00]"
          >
            ← BACK TO PROJECTS
          </a>
        </div>
      </header>

      {/* Project information */}
      <article className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#B7FF00]">
          PROJECT / {project.type}
        </p>

        <h1 className="mt-6 max-w-4xl text-5xl font-black leading-tight tracking-tight text-white sm:text-7xl">
          {project.title}
          <span className="text-[#B7FF00]">.</span>
        </h1>

        <p className="mt-8 max-w-3xl text-xl leading-9 text-[#B8BDB8]">
          {project.description}
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#B7FF00] px-7 py-4 text-sm font-extrabold text-black transition hover:bg-[#a5e900]"
          >
            VIEW GITHUB REPOSITORY ↗
          </a>

          <a
            href="/#projects"
            className="rounded-full border border-white/20 px-7 py-4 text-sm font-bold text-[#D1D3D1] transition hover:border-[#B7FF00] hover:text-[#B7FF00]"
          >
            ALL PROJECTS
          </a>
        </div>

        <div className="my-16 h-px bg-white/10" />

        {/* Objective and tools */}
        <div className="grid gap-12 md:grid-cols-2">
          <section>
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#B7FF00]">
              01 / OBJECTIVE
            </p>

            <h2 className="mt-4 text-3xl font-black text-white">
              About the project
            </h2>

            <p className="mt-5 leading-8 text-[#B8BDB8]">
              {project.objective}
            </p>
          </section>

          <section>
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#B7FF00]">
              02 / TECHNOLOGIES
            </p>

            <h2 className="mt-4 text-3xl font-black text-white">
              Tools used
            </h2>

            <div className="mt-6 flex flex-wrap gap-3">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-white/15 bg-[#171917] px-5 py-3 text-sm font-semibold text-[#D1D3D1]"
                >
                  {tool}
                </span>
              ))}
            </div>
          </section>
        </div>

        <div className="my-16 h-px bg-white/10" />

        {/* GitHub section */}
        <section className="rounded-[2rem] border border-white/10 bg-[#171917] p-8 sm:p-12">
          <span className="inline-block rounded-full bg-[#B7FF00] px-4 py-2 text-xs font-extrabold text-black">
            EXPLORE THE CODE
          </span>

          <h2 className="mt-6 text-3xl font-black text-white">
            See how the project works.
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-[#B8BDB8]">
            Visit the GitHub repository to explore the source code,
            notebook, and available project files.
          </p>

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-block border-b-2 border-[#B7FF00] pb-2 text-sm font-extrabold text-[#D1D3D1] transition hover:text-[#B7FF00]"
          >
            OPEN GITHUB REPOSITORY ↗
          </a>
        </section>
      </article>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-5xl px-6 py-7 text-sm text-[#929892]">
          © 2026 Zaufishan Mehmood
        </div>
      </footer>
    </main>
  );
}
