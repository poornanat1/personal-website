import carenavScreenshot from "@/assets/carenav.png";
import auditionWithMeScreenshot from "@/assets/audition-with-me.png";
import auditionRehearsalScreenshot from "@/assets/audition-rehearsal.png";
import auditionVoiceSetupScreenshot from "@/assets/audition-voice-setup.png";
import portrait from "@/assets/portrait.png";
import { CompanyLogo } from "@/components/CompanyLogo";
import { experiences } from "@/data/portfolio";
import { ArrowDown, ArrowUpRight } from "lucide-react";
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
    <a href={href} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-1.5 text-[12px] font-bold uppercase tracking-[0.1em] underline decoration-ink/20 underline-offset-4 transition-colors hover:text-accent">
      {children}<ArrowUpRight size={12} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </a>
  );
}

export function App() {
  return (
    <main className="min-h-dvh bg-canvas text-ink selection:bg-accent selection:text-white">
      <div className="mx-auto max-w-[1320px] overflow-hidden bg-canvas">
        <nav className="relative flex flex-wrap items-center justify-between gap-x-5 gap-y-4 px-5 py-5 sm:flex-nowrap sm:px-9 lg:px-14 lg:py-5">
          <div className="order-3 flex w-full items-center justify-between rounded-full border border-ink/10 bg-[#f1f1f1] px-2 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] sm:absolute sm:left-1/2 sm:top-5 sm:order-none sm:w-auto sm:-translate-x-1/2 sm:gap-1 sm:py-1.5 lg:top-5">
            <a href="#about" className="rounded-full px-3 py-2 transition-colors hover:bg-canvas hover:text-accent">About</a>
            <a href="#work" className="rounded-full px-3 py-2 transition-colors hover:bg-canvas hover:text-accent">Work</a>
            <a href="#experience" className="rounded-full px-3 py-2 transition-colors hover:bg-canvas hover:text-accent">Experience</a>
          </div>
          <a href="mailto:pnat614@gmail.com" className="ml-auto inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.1em] text-canvas transition-colors hover:bg-accent">Say hello <ArrowUpRight size={12} /></a>
        </nav>

        <section id="top" className="relative px-5 pb-16 pt-14 sm:px-9 sm:pt-20 lg:flex lg:min-h-[calc(100svh-80px)] lg:flex-col lg:justify-between lg:px-14 lg:pb-10 lg:pt-8">
          <div className="max-w-[1160px]">
            <h1 className="hero-title font-medium leading-[0.82] tracking-[-0.085em]">Poorna<br />Natarajan<span className="text-accent">.</span></h1>
            <div className="mt-7 flex items-center gap-4 sm:mt-9"><span className="h-px w-10 bg-accent sm:w-20" /><p className="hero-role font-medium leading-none tracking-[-0.045em]">Senior Machine Learning Engineer</p></div>
          </div>

          <div className="mt-14 border-t border-ink/15 pt-7 lg:mt-8 lg:grid lg:grid-cols-[auto_minmax(0,1fr)] lg:gap-8 lg:pt-6">
            <div className="mb-8 lg:mb-0">
              <img src={portrait} alt="Portrait of Poorna Natarajan" className="size-28 rounded-full border border-ink/10 object-cover shadow-[0_14px_36px_rgba(0,0,0,0.12)] sm:size-36 lg:size-44" />
            </div>
            <div>
              <p className="max-w-[900px] text-[19px] font-medium leading-[1.55] tracking-[-0.025em] sm:text-[24px] sm:leading-[1.5]">I build AI systems for contract intelligence and search at Latham &amp; Watkins, and my background spans computer science, bioengineering, and economics through work at Palantir, SMX, and Deloitte.</p>
              <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4">
                <a href="#work" className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-[11px] font-bold uppercase tracking-[0.1em] text-canvas transition-colors hover:bg-accent">Selected work <ArrowDown size={13} /></a>
                <ExternalLink href="https://github.com/poornanat1">GitHub</ExternalLink>
                <ExternalLink href="https://www.linkedin.com/in/poorna-natarajan/">LinkedIn</ExternalLink>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="border-y border-ink/10 bg-wash px-5 py-16 sm:px-9 lg:px-14 lg:py-24">
          <div className="flex items-end justify-between gap-6"><div><p className="mb-4 text-[10px] font-bold uppercase tracking-[0.22em] text-accent">01 / Capabilities</p><h2 className="text-[clamp(2.4rem,5.2vw,4.8rem)] font-medium leading-none tracking-[-0.065em]">What I bring.</h2></div><p className="hidden max-w-[28ch] text-right text-[13px] font-medium leading-5 text-muted md:block">Technical depth, product judgment, and a bias toward systems that work in the real world.</p></div>
          <div className="mt-10 grid divide-y divide-border border-y border-border md:grid-cols-3 md:divide-x md:divide-y-0">
            {[
              ["01", "ML & AI systems", "RAG & hybrid retrieval|Agentic systems|DSPy / GEPA|SFT & QLoRA|LLM evaluation"],
              ["02", "Software & product", "Python, C# & Go|TypeScript & Java|React interfaces|FastAPI & typed APIs|Human-in-the-loop design"],
              ["03", "Data & infrastructure", "Kubernetes & Docker|Airflow & Kafka|PostgreSQL / pgvector|PySpark|Azure & AWS"],
            ].map(([number, title, skills]) => (
              <article key={number} className="py-8 md:px-7 md:first:pl-0 md:last:pr-0">
                <p className="text-[38px] font-light tracking-[-0.05em] text-muted/35">{number}</p>
                <h3 className="mt-7 text-[14px] font-bold uppercase tracking-[0.06em]">{title}</h3>
                <ul className="mt-4 divide-y divide-border/70 text-[13.5px] font-medium leading-6 text-copy">
                  {skills.split("|").map((skill) => <li key={skill} className="py-2">{skill}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="work" className="px-5 py-16 sm:px-9 lg:px-14 lg:py-24">
          <div className="flex items-end justify-between gap-6 border-b border-border pb-8">
            <div>
              <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.22em] text-accent">02 / Selected work</p>
              <h2 className="text-[clamp(2.4rem,5.2vw,4.8rem)] font-medium leading-none tracking-[-0.065em]">Personal Projects</h2>
            </div>
            <p className="hidden max-w-[34ch] text-right text-[13px] font-medium leading-5 text-muted sm:block">End-to-end products spanning research, engineering, safety, and interaction design.</p>
          </div>
          <div>
            {projects.map((project, index) => (
              <article key={project.id} className="grid gap-10 border-b border-border py-12 lg:grid-cols-[minmax(280px,0.68fr)_minmax(0,1.32fr)] lg:gap-14 lg:py-16">
                <div className="flex flex-col justify-between lg:sticky lg:top-8 lg:self-start">
                  <div>
                    <div className="flex items-start justify-between gap-4"><span className="text-[54px] font-light leading-none tracking-[-0.05em] text-muted/35">0{index + 1}</span><span className="rounded-full border border-ink/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.1em] text-muted">{project.year}</span></div>
                    <h3 className="mt-7 text-[clamp(2.7rem,4.8vw,4.8rem)] font-medium leading-[0.92] tracking-[-0.065em]">{project.name}</h3>
                    <p className="mt-4 max-w-[54ch] text-[13px] font-medium leading-5 text-muted">{project.eyebrow}</p>
                    <p className="mt-8 max-w-[28ch] text-[22px] font-medium leading-8 tracking-[-0.035em]">{project.summary}</p>
                    <p className="mt-5 max-w-[48ch] text-[15px] font-medium leading-7 text-copy">{project.contribution}</p>
                  </div>
                  <div>
                    <div className="mt-6 flex flex-wrap gap-5"><ExternalLink href={project.href}>{project.liveLabel}</ExternalLink><ExternalLink href={project.github}>GitHub</ExternalLink></div>
                    <div className="mt-7 flex flex-wrap gap-2 border-t border-border pt-4">{project.tags.map((tag) => <span key={tag} className="rounded-full border border-ink/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.06em] text-muted">{tag}</span>)}</div>
                  </div>
                </div>
                <div className="grid content-start gap-5">
                  <figure>
                    <a href={project.href} target="_blank" rel="noreferrer" className="group block overflow-hidden rounded-[18px] border border-ink/10 bg-project p-2 shadow-[0_18px_45px_rgba(0,0,0,0.08)] sm:rounded-[24px] sm:p-3">
                      <img src={project.image} alt={project.imageAlt} className="aspect-[3024/1898] w-full rounded-[12px] object-cover saturate-[0.7] transition duration-500 group-hover:scale-[1.01] group-hover:saturate-100 sm:rounded-[16px]" />
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
                        <a href={image} target="_blank" rel="noreferrer" className="group block overflow-hidden rounded-[18px] border border-ink/10 bg-project p-2 shadow-[0_16px_36px_rgba(0,0,0,0.07)]">
                          <img src={image} alt={alt} className="aspect-[1.72/1] w-full rounded-[11px] object-cover saturate-[0.7] transition duration-500 group-hover:scale-[1.01] group-hover:saturate-100" />
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

        <section id="experience" className="relative border-t border-ink/10 bg-wash px-5 py-16 sm:px-9 lg:px-14 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
            <div className="lg:sticky lg:top-10 lg:self-start"><p className="mb-4 text-[10px] font-bold uppercase tracking-[0.22em] text-accent">03 / Experience</p><h2 className="text-[clamp(2.5rem,5vw,4.6rem)] font-medium leading-[0.95] tracking-[-0.06em]">Work Experience</h2><p className="mt-6 text-[12px] font-bold uppercase tracking-[0.12em] text-muted">2019 — Now</p></div>
            <div className="border-t border-border">
              {experiences.map((experience, index) => (
                <article key={experience.company} className="grid grid-cols-[26px_42px_1fr] items-start gap-3 border-b border-border py-5 sm:grid-cols-[34px_44px_1fr_auto] sm:gap-5">
                  <span className="text-[12px] font-bold text-accent">0{index + 1}.</span>
                  <CompanyLogo company={experience.company} showLabel={false} />
                  <div><h3 className="text-[15px] font-bold">{experience.company} · {experience.title}</h3><p className="mt-2 max-w-[62ch] text-[15px] font-medium leading-7 text-copy">{experience.description}</p></div>
                  <time className="col-start-3 text-[12px] font-medium text-muted sm:col-start-auto">{experience.date}</time>
                </article>
              ))}
            </div>
          </div>
        </section>

        <footer className="px-5 py-7 sm:px-9 lg:px-14">
          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border pt-5 text-[11px] font-bold uppercase tracking-[0.1em] text-muted"><span>© 2026 Poorna Natarajan</span><a href="#top" className="transition-colors hover:text-accent">Back to top ↑</a></div>
        </footer>
      </div>
    </main>
  );
}
