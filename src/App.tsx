import carenavScreenshot from "@/assets/carenav.png";
import auditionWithMeScreenshot from "@/assets/audition-with-me.png";
import auditionRehearsalScreenshot from "@/assets/audition-rehearsal.png";
import auditionVoiceSetupScreenshot from "@/assets/audition-voice-setup.png";
import portrait from "@/assets/portrait.png";
import { CompanyLogo } from "@/components/CompanyLogo";
import { experiences } from "@/data/portfolio";
import { ArrowDown, ArrowUpRight, Github, Linkedin } from "lucide-react";
import type { ReactNode } from "react";

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
  return (
    <main className="min-h-dvh bg-shell p-3 text-ink selection:bg-accent selection:text-white sm:p-6 lg:p-10">
      <div className="mx-auto max-w-[1240px] overflow-hidden border border-ink/10 bg-canvas shadow-[0_30px_80px_rgba(93,51,65,0.16)]">
        <nav className="flex flex-wrap items-center justify-between gap-x-5 gap-y-4 px-5 py-5 sm:flex-nowrap sm:px-9 lg:px-14">
          <a href="#top" className="text-[13px] font-medium tracking-[-0.01em] text-muted transition-colors hover:text-ink">Portfolio · 2026</a>
          <div className="order-3 flex w-full items-center justify-between border-t border-border pt-4 text-[13px] font-semibold sm:order-none sm:w-auto sm:justify-start sm:gap-7 sm:border-0 sm:pt-0 sm:text-[15px]">
            <a href="#about" className="hover:text-accent">About</a>
            <a href="#work" className="hover:text-accent">Work</a>
            <a href="#experience" className="hover:text-accent">Experience</a>
          </div>
          <a href="mailto:pnat614@gmail.com" className="rounded-full bg-ink px-4 py-2 text-[12px] font-bold text-canvas transition-colors hover:bg-accent">Email me</a>
        </nav>

        <section id="top" className="px-5 pb-20 pt-14 sm:px-9 sm:pt-20 lg:px-14 lg:pb-28 lg:pt-24">
          <div>
            <p className="mb-6 text-[12px] font-bold uppercase tracking-[0.18em] text-muted">New York · ML systems · Responsible AI</p>
            <h1 className="max-w-[1100px] text-[clamp(3.7rem,10.5vw,8.5rem)] font-medium leading-[0.86] tracking-[-0.075em]">Poorna Natarajan</h1>
            <p className="mt-7 max-w-[980px] text-[clamp(2rem,5vw,4.25rem)] font-medium leading-[0.96] tracking-[-0.055em] text-accent">
              Machine Learning Engineer
            </p>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-[minmax(0,760px)_1fr] lg:gap-20">
            <div className="max-w-[680px]">
              <p className="text-[18px] font-medium leading-8 sm:text-[20px] sm:leading-9">For seven years, I’ve built data and AI systems for public health, government workflows, and legal search. I create reliable products for high-stakes environments—where technical decisions have real human consequences.</p>
              <a href="#work" className="mt-6 inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2.5 text-[12px] font-bold text-canvas transition-colors hover:bg-accent">See selected work <ArrowDown size={13} /></a>
            </div>
            <div className="flex items-end gap-5 lg:justify-end"><ExternalLink href="https://github.com/poornanat1">GitHub</ExternalLink><ExternalLink href="https://www.linkedin.com/in/poorna-natarajan/">LinkedIn</ExternalLink></div>
          </div>
        </section>

        <section id="about" className="bg-wash px-5 py-16 sm:px-9 lg:px-14 lg:py-24">
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
          <div className="flex items-end justify-between gap-6 border-b border-border pb-8">
            <h2 className="text-[clamp(2rem,4vw,3.3rem)] font-medium tracking-[-0.055em]">Selected Work</h2>
            <p className="hidden max-w-[34ch] text-right text-[13px] font-medium leading-5 text-muted sm:block">End-to-end products spanning research, engineering, safety, and interaction design.</p>
          </div>
          <div>
            {projects.map((project, index) => (
              <article key={project.id} className="grid gap-10 border-b border-border py-12 lg:grid-cols-[minmax(280px,0.68fr)_minmax(0,1.32fr)] lg:gap-14 lg:py-20">
                <div className="flex flex-col justify-between lg:sticky lg:top-8 lg:self-start">
                  <div>
                    <div className="flex items-start justify-between gap-4"><span className="text-[12px] font-bold text-accent">0{index + 1}</span><span className="text-[12px] font-semibold text-muted">{project.year}</span></div>
                    <h3 className="mt-6 text-[clamp(2.7rem,4.8vw,4.8rem)] font-medium leading-[0.92] tracking-[-0.065em]">{project.name}</h3>
                    <p className="mt-4 max-w-[54ch] text-[13px] font-medium leading-5 text-muted">{project.eyebrow}</p>
                    <p className="mt-9 max-w-[28ch] text-[22px] font-medium leading-8 tracking-[-0.035em]">{project.summary}</p>
                    <p className="mt-6 max-w-[48ch] text-[15px] font-medium leading-7 text-copy">{project.contribution}</p>
                  </div>
                  <div>
                    <div className="mt-7 flex flex-wrap gap-5"><ExternalLink href={project.href}>{project.liveLabel}</ExternalLink><ExternalLink href={project.github}>GitHub</ExternalLink></div>
                    <div className="mt-8 flex flex-wrap gap-2 text-[12px] font-medium text-muted">{project.tags.map((tag) => <span key={tag} className="rounded-full border border-border px-3 py-2">{tag}</span>)}</div>
                  </div>
                </div>
                <div className="grid content-start gap-5">
                  <figure>
                    <a href={project.href} target="_blank" rel="noreferrer" className="group block overflow-hidden rounded-xl border border-ink/10 bg-project shadow-[0_18px_45px_rgba(42,30,35,0.10)]">
                      <img src={project.image} alt={project.imageAlt} className="aspect-[3024/1898] w-full object-cover transition-transform duration-500 group-hover:scale-[1.015]" />
                    </a>
                    <figcaption className="mt-3 flex items-start justify-between gap-4 text-[12px] font-semibold leading-5 text-muted">
                      <span>{project.id === "audition-with-me" ? "From uploaded sides to a ready-to-rehearse scene" : "Grounded answers with visible sources and member context"}</span><span className="shrink-0 text-accent">View live ↗</span>
                    </figcaption>
                  </figure>
                  {project.id === "audition-with-me" && (
                  <div className="grid gap-5 md:grid-cols-2">
                    {[
                      [auditionVoiceSetupScreenshot, "Character-aware voice casting and preview", "Voice setup screen with character tabs, voice filters, preview controls, and rehearsal launch"],
                      [auditionRehearsalScreenshot, "Responsive rehearsal with cue detection and line controls", "Rehearsal screen with active dialogue, line help, playback controls, and voice-speed settings"],
                    ].map(([image, caption, alt]) => (
                      <figure key={caption}>
                        <a href={image} target="_blank" rel="noreferrer" className="group block overflow-hidden rounded-xl border border-ink/10 bg-[#0d1a2a] shadow-[0_16px_36px_rgba(42,30,35,0.09)]">
                          <img src={image} alt={alt} className="aspect-[1.72/1] w-full object-cover transition-transform duration-500 group-hover:scale-[1.012]" />
                        </a>
                        <figcaption className="mt-3 flex items-start justify-between gap-4 text-[12px] font-semibold leading-5 text-muted">
                          <span>{caption}</span><span className="shrink-0 text-accent">Open ↗</span>
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="bg-wash px-5 py-16 sm:px-9 lg:px-14 lg:py-24">
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
