import carenavScreenshot from "@/assets/carenav.png";
import auditionWithMeScreenshot from "@/assets/audition-with-me.png";
import portrait from "@/assets/portrait.png";
import { CompanyLogo } from "@/components/CompanyLogo";
import { experiences } from "@/data/portfolio";
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, Github, Linkedin } from "lucide-react";
import { useState, type ReactNode } from "react";

const projects = [
  {
    id: "carenav",
    name: "CareNav",
    eyebrow: "Agentic health-benefits navigator · Product / ML / Safety",
    year: "2026",
    href: "https://carenav-frontend-production.up.railway.app/",
    github: "https://github.com/poornanat1/carenav",
    image: carenavScreenshot,
    imageAlt: "CareNav interface showing a grounded health-benefits conversation and synthetic member profile",
    summary: "A conversational assistant for coverage, claims, providers, and medication questions—grounded in cited sources.",
    contribution: "I designed and built the member experience, typed orchestration, hybrid retrieval, model tiering, evaluation gates, deployment, and telemetry. Unsafe or unsupported questions escalate instead of producing a guess.",
    tags: ["Python", "FastAPI", "React", "Postgres", "pgvector", "Mistral"],
    liveLabel: "Live demo",
  },
  {
    id: "audition-with-me",
    name: "Audition With Me",
    eyebrow: "AI rehearsal partner for actors · Document AI / Voice / Product",
    year: "2026",
    href: "https://auditionwithme.vercel.app/",
    github: "https://github.com/cranberrymuffin/auditionwithme",
    image: auditionWithMeScreenshot,
    imageAlt: "Audition With Me landing page with a Hollywood hillside backdrop and rehearsal call to action",
    summary: "A browser-based rehearsal partner that turns typed or scanned audition sides into structured, expressive scene playback.",
    contribution: "I built the document-intelligence and voice pipeline: deterministic PDF segmentation backed by model classification, chunked vision parsing for scans, character canonicalization and model-assisted voice casting, plus an AI director that assigns bounded delivery tags before speech synthesis.",
    tags: ["Claude", "Vision", "ElevenLabs", "PDF.js", "TypeScript", "React"],
    liveLabel: "Live site",
  },
] as const;

function ExternalLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-1.5 text-[13px] font-semibold underline decoration-ink/25 underline-offset-4 transition-colors hover:text-accent">
      {children}<ArrowUpRight size={12} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </a>
  );
}

export function App() {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const activeProject = projects[activeProjectIndex];
  const nextProjectIndex = (activeProjectIndex + 1) % projects.length;

  const showProject = (index: number) => {
    setActiveProjectIndex((index + projects.length) % projects.length);
  };

  return (
    <main className="min-h-dvh bg-shell p-3 text-ink selection:bg-accent selection:text-white sm:p-6 lg:p-10">
      <div className="mx-auto max-w-[1240px] overflow-hidden border border-ink/10 bg-canvas shadow-[0_30px_80px_rgba(93,51,65,0.16)]">
        <nav className="flex items-center justify-between px-5 py-5 sm:px-9 lg:px-14">
          <a href="#top" className="text-[13px] font-medium tracking-[-0.01em] text-muted transition-colors hover:text-ink">Portfolio · 2026</a>
          <div className="hidden items-center gap-7 text-[15px] font-semibold sm:flex">
            <a href="#about" className="hover:text-accent">About</a>
            <a href="#work" className="hover:text-accent">Work</a>
            <a href="#experience" className="hover:text-accent">Experience</a>
          </div>
          <a href="mailto:pnat614@gmail.com" className="rounded-full bg-ink px-4 py-2 text-[12px] font-bold text-canvas transition-colors hover:bg-accent">Email me</a>
        </nav>

        <section id="top" className="px-5 pb-20 pt-16 sm:px-9 lg:px-14 lg:pb-28 lg:pt-24">
          <div>
            <h1 className="w-full text-[clamp(4.5rem,13vw,10.5rem)] font-medium leading-[0.78] tracking-[-0.09em]">Poorna Natarajan</h1>
            <p className="mt-8 max-w-[980px] text-[clamp(2rem,5.5vw,4.8rem)] font-medium leading-[0.9] tracking-[-0.065em] text-accent">
              Machine Learning Engineer
            </p>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-[minmax(0,760px)_1fr] lg:gap-20">
            <div>
              <p className="text-[18px] font-medium leading-8 sm:text-[20px] sm:leading-9">Over the past seven years, I’ve built data and AI systems for public-health operations, government workflows, and legal search. That work has shown me how much technical decisions can affect the people who rely on these systems. I care about helping institutions use technology responsibly, and I bring that perspective to every project I take on.</p>
              <a href="#work" className="mt-6 inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2.5 text-[12px] font-bold text-canvas transition-colors hover:bg-accent">See selected work <ArrowDown size={13} /></a>
            </div>
            <div className="flex items-end gap-5 lg:justify-end"><ExternalLink href="https://github.com/poornanat1">GitHub</ExternalLink><ExternalLink href="https://www.linkedin.com/in/poorna-natarajan/">LinkedIn</ExternalLink></div>
          </div>
        </section>

        <section id="about" className="px-5 py-16 sm:px-9 lg:px-14 lg:py-24">
          <h2 className="text-[clamp(2rem,4vw,3.3rem)] font-medium tracking-[-0.055em]">Skills &amp; capabilities</h2>
          <div className="mt-10 grid divide-y divide-border border-y border-border md:grid-cols-3 md:divide-x md:divide-y-0">
            {[
              ["01", "ML & AI systems", "RAG & hybrid retrieval|Agentic systems|DSPy / GEPA|SFT & QLoRA|LLM evaluation"],
              ["02", "Software & product", "Python, C# & Go|TypeScript & Java|React interfaces|FastAPI & typed APIs|Human-in-the-loop design"],
              ["03", "Data & infrastructure", "Kubernetes & Docker|Airflow & Kafka|PostgreSQL / pgvector|PySpark|Azure & AWS"],
            ].map(([number, title, skills]) => (
              <article key={number} className="min-h-[225px] py-8 md:px-7 md:first:pl-0 md:last:pr-0">
                <p className="text-[38px] font-light tracking-[-0.05em] text-border">{number}</p>
                <h3 className="mt-8 text-[14px] font-bold">{title}</h3>
                <ul className="mt-4 grid gap-2 text-[13px] font-medium leading-6 text-copy">
                  {skills.split("|").map((skill) => <li key={skill} className="flex gap-2 before:text-accent before:content-['•']">{skill}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="work" className="px-5 py-16 sm:px-9 lg:px-14 lg:py-24">
          <div className="flex items-end justify-between gap-6">
            <h2 className="text-[clamp(2rem,4vw,3.3rem)] font-medium tracking-[-0.055em]">Selected Work</h2>
            <p className="hidden text-[13px] font-medium text-muted sm:block" aria-live="polite">{activeProjectIndex + 1} of {projects.length}</p>
          </div>

          <div className="mt-8 scroll-mt-6 border-y border-border" aria-live="polite">
            <div className="grid items-end gap-4 py-7 sm:grid-cols-[1fr_auto]">
              <div><h3 className="text-[clamp(2.7rem,7vw,6rem)] font-medium leading-none tracking-[-0.07em]">{activeProject.name}</h3><p className="mt-3 text-[13px] font-medium leading-5 text-muted">{activeProject.eyebrow}</p></div>
              <div className="text-[13px] font-semibold">{activeProject.year}</div>
            </div>
          </div>

          <div key={activeProject.id} className="project-slide relative -mt-px grid gap-8 lg:grid-cols-[minmax(0,1.25fr)_minmax(320px,0.75fr)] lg:gap-10">
            <a href={activeProject.href} target="_blank" rel="noreferrer" className="group block self-start overflow-hidden rounded-lg border border-ink/15 bg-[#e9f0e8]">
              <img src={activeProject.image} alt={activeProject.imageAlt} className="aspect-[3024/1898] w-full object-cover transition-transform duration-500 group-hover:scale-[1.01]" />
            </a>
            <div>
              <p className="pt-8 text-[24px] font-medium leading-8 tracking-[-0.035em]">{activeProject.summary}</p>
              <p className="mt-5 text-[16px] font-medium leading-7 text-copy">{activeProject.contribution}</p>
              <div className="mt-7 flex flex-wrap gap-5"><ExternalLink href={activeProject.href}>{activeProject.liveLabel}</ExternalLink><ExternalLink href={activeProject.github}>GitHub</ExternalLink></div>
              <div className="mt-8 flex flex-wrap gap-2 text-[12px] font-medium text-muted">{activeProject.tags.map((tag) => <span key={tag} className="rounded-full border border-border px-3 py-2">{tag}</span>)}</div>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 border-t border-border pt-6">
            <button type="button" onClick={() => showProject(activeProjectIndex - 1)} aria-label="Show previous project" className="flex size-11 items-center justify-center rounded-full border border-ink/40 transition-colors hover:border-ink hover:bg-ink hover:text-canvas"><ArrowLeft size={17} /></button>
            <button type="button" onClick={() => showProject(nextProjectIndex)} className="group flex items-center justify-between gap-5 px-3 py-2 text-left text-accent transition-colors hover:text-ink">
              <span><span className="block text-[12px] font-medium opacity-70">Next project</span><span className="mt-0.5 block text-[14px] font-bold">{projects[nextProjectIndex].name}</span></span>
            </button>
            <button type="button" onClick={() => showProject(activeProjectIndex + 1)} aria-label="Show next project" className="flex size-11 items-center justify-center rounded-full border border-ink/40 transition-colors hover:border-ink hover:bg-ink hover:text-canvas"><ArrowRight size={17} /></button>
          </div>
        </section>

        <section id="experience" className="px-5 py-16 sm:px-9 lg:px-14 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
            <div><p className="text-[clamp(2.5rem,5vw,4.6rem)] font-medium leading-none tracking-[-0.06em] text-accent">Experience</p><h2 className="mt-5 max-w-[24ch] text-[clamp(1.25rem,2.2vw,1.75rem)] font-medium leading-[1.15] tracking-[-0.035em]">From ideas to systems people use.</h2></div>
            <div className="border-t border-border">
              {experiences.map((experience, index) => (
                <article key={experience.company} className="grid grid-cols-[26px_42px_1fr] items-start gap-3 border-b border-border py-5 sm:grid-cols-[34px_44px_1fr_auto] sm:gap-5">
                  <span className="text-[12px] font-medium text-accent">0{index + 1}.</span>
                  <CompanyLogo company={experience.company} showLabel={false} />
                  <div><h3 className="text-[15px] font-bold">{experience.company} · {experience.title}</h3><p className="mt-2 max-w-[62ch] text-[15px] font-medium leading-7 text-copy">{experience.description}</p></div>
                  <time className="col-start-3 text-[12px] font-medium text-muted sm:col-start-auto">{experience.date}</time>
                </article>
              ))}
            </div>
          </div>
        </section>

        <footer className="px-5 pb-7 pt-16 sm:px-9 lg:px-14 lg:pt-24">
          <div className="grid gap-8 border-t border-border py-10 md:grid-cols-[1fr_auto] md:items-end">
            <div className="flex items-start gap-6"><img src={portrait} alt="Portrait of Poorna Natarajan" className="size-24 shrink-0 rounded-full object-cover" /><div><p className="max-w-[570px] text-[clamp(1.9rem,4.2vw,3.6rem)] font-medium leading-[1.02] tracking-[-0.06em]">Senior machine learning engineer and product builder.</p><a href="mailto:pnat614@gmail.com" className="mt-5 inline-flex items-center gap-2 text-[13px] font-bold underline decoration-accent underline-offset-4">pnat614@gmail.com <ArrowUpRight size={13} /></a></div></div>
            <div className="flex gap-3">{[["Email", "mailto:pnat614@gmail.com", <span aria-hidden="true" className="text-[18px] leading-none">✉</span>], ["GitHub", "https://github.com/poornanat1", <Github size={14} className="fill-current" />], ["LinkedIn", "https://www.linkedin.com/in/poorna-natarajan/", <Linkedin size={14} className="fill-current" />]].map(([label, href, icon]) => <a key={String(label)} href={String(href)} target={String(href).startsWith("http") ? "_blank" : undefined} rel="noreferrer" aria-label={String(label)} className="flex size-9 items-center justify-center rounded-full border border-ink transition-colors hover:bg-ink hover:text-canvas">{icon}</a>)}</div>
          </div>
          <div className="flex flex-wrap justify-between gap-3 border-t border-border pt-5 text-[12px] font-medium text-muted"><span>© 2026 Poorna Natarajan</span><span>New York · Senior Machine Learning Engineer</span></div>
        </footer>
      </div>
    </main>
  );
}
