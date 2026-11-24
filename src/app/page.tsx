
import { notFound } from "next/navigation";

const projectDetails = [
  {
    slug: "iris-flower-classification",
    title: "Iris Flower Classification",
    category: "Machine Learning · Classification",
    description:
      "A beginner-friendly classification project that predicts the species of an iris flower using measurements such as sepal length, sepal width, petal length, and petal width.",
    objective:
      "To understand how classification algorithms learn patterns from numerical data and use those patterns to predict a flower species.",
    tools: ["Python", "Pandas", "Scikit-learn", "Jupyter Notebook"],
    github:
      "https://github.com/zaufishanmehmood/iris-flower-classification",
  },
  {
    slug: "student-pass-fail-prediction",
    title: "Student Pass/Fail Prediction",
    category: "Machine Learning · Classification",
    description:
      "A machine learning project that uses student information and academic features to predict pass or fail outcomes.",
    objective:
      "To explore how student-related data can be prepared and used to train a classification model.",
    tools: ["Python", "Pandas", "Scikit-learn", "Jupyter Notebook"],
    github:
      "https://github.com/zaufishanmehmood/Student_Pass_Fail_Prediction",
  },
  {
    slug: "pakistan-house-price-prediction",
    title: "Pakistan House Price Prediction",
    category: "Machine Learning · Regression",
    description:
      "A regression project that estimates house prices in Pakistan using property information such as area, bedrooms, bathrooms, and location.",
    objective:
      "To compare regression models and understand how property features influence predicted prices.",
    tools: ["Python", "Pandas", "NumPy", "Scikit-learn", "Jupyter Notebook"],
    github:
      "https://github.com/zaufishanmehmood/Pakistan-House-Price-Prediction",
  },
  {
    slug: "weather-prediction",
    title: "Weather Prediction",
    category: "Machine Learning · Regression",
    description:
      "A project that uses historical weather information and regression algorithms to predict maximum temperature.",
    objective:
      "To explore historical data, prepare useful features, and apply regression techniques to a weather prediction task.",
    tools: ["Python", "Pandas", "Scikit-learn", "Jupyter Notebook"],
    github:
      "https://github.com/zaufishanmehmood/weather-prediction-ml",
  },
  {
    slug: "credit-card-fraud-detection",
    title: "Credit Card Fraud Detection",
    category: "Machine Learning · Classification",
    description:
      "A classification project focused on identifying potentially fraudulent credit card transactions and comparing machine learning models.",
    objective:
      "To explore transaction data and understand how classification models can help distinguish between fraudulent and legitimate transactions.",
    tools: ["Python", "Pandas", "Scikit-learn", "Jupyter Notebook"],
    github:
      "https://github.com/zaufishanmehmood/credit_card_fraud_detection",
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
    <main className="min-h-screen bg-[#f7f6f2] text-[#252923]">
      <header className="border-b border-[#e6e4dc]">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
          <a href="/" className="text-lg font-semibold tracking-tight">
            Zaufishan<span className="text-[#8a9475]">.</span>
          </a>
          <a
            href="/#work"
            className="text-sm text-[#666a61] underline underline-offset-4 hover:text-[#252923]"
          >
            Back to projects
          </a>
        </div>
      </header>

      <article className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#858d70]">
          Project / {project.category}
        </p>

        <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-tight tracking-tight md:text-7xl">
          {project.title}
        </h1>

        <p className="mt-8 max-w-3xl text-xl leading-9 text-[#686b63]">
          {project.description}
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#333d31] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#4b5946]"
          >
            View GitHub Repository ↗
          </a>
          <a
            href="/#work"
            className="rounded-full border border-[#c9cbbf] px-6 py-3 text-sm font-medium transition hover:bg-[#eae9e1]"
          >
            All projects
          </a>
        </div>

        <div className="my-16 h-px bg-[#e4e2d9]" />

        <div className="grid gap-12 md:grid-cols-[1fr_1fr]">
          <section>
            <p className="text-sm uppercase tracking-[0.18em] text-[#858d70]">
              Project overview
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight">
              The objective
            </h2>
            <p className="mt-5 leading-8 text-[#686b63]">
              {project.objective}
            </p>
          </section>

          <section>
            <p className="text-sm uppercase tracking-[0.18em] text-[#858d70]">
              Technologies
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight">
              Tools used
            </h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-[#c9cbbf] px-4 py-2 text-sm text-[#454a41]"
                >
                  {tool}
                </span>
              ))}
            </div>
          </section>
        </div>

        <div className="my-16 h-px bg-[#e4e2d9]" />

        <div className="rounded-3xl bg-[#e9e9df] p-8 md:p-12">
          <p className="text-sm uppercase tracking-[0.18em] text-[#858d70]">
            Explore the code
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight">
            Interested in how it works?
          </h2>
          <p className="mt-4 max-w-2xl leading-7 text-[#686b63]">
            Visit the GitHub repository to explore the notebook, code, and
            project files.
          </p>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-block border-b border-[#69765e] pb-1 text-sm font-medium text-[#526348]"
          >
            Open repository on GitHub ↗
          </a>
        </div>
      </article>

      <footer className="border-t border-[#e6e4dc]">
        <div className="mx-auto max-w-5xl px-6 py-7 text-sm text-[#85877e]">
          © 2026 Zaufishan Mehmood.
        </div>
      </footer>
    </main>
  );
}
