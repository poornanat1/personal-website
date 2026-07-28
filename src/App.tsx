import georgiaTechLogo from "@/assets/georgia-tech.png";
import marylandLogo from "@/assets/maryland.png";
import portrait from "@/assets/portrait.png";
import { CompanyLogo } from "@/components/CompanyLogo";
import { SectionHeader } from "@/components/SectionHeader";
import { SocialLink } from "@/components/SocialLink";
import { experiences, skillGroups } from "@/data/portfolio";
import { Github, Linkedin, Mail } from "lucide-react";

export function App() {
  return (
    <main className="min-h-dvh overflow-x-clip bg-canvas text-ink selection:bg-primary selection:text-white">
      <div className="mx-auto grid min-h-dvh max-w-[1520px] grid-cols-1 lg:grid-cols-[300px_minmax(0,1fr)] xl:grid-cols-[340px_minmax(0,1fr)] 2xl:grid-cols-[360px_minmax(0,1fr)]">
        <aside
          id="profile"
          className="relative px-5 py-8 sm:px-8 sm:py-10 md:px-12 lg:px-8 lg:py-10 lg:after:absolute lg:after:inset-y-10 lg:after:right-0 lg:after:w-px lg:after:bg-border/75 xl:px-10 xl:py-12 xl:after:inset-y-12 2xl:px-12"
        >
          <div className="profile-panel md:grid md:grid-cols-[200px_minmax(0,1fr)] md:gap-x-10 lg:sticky lg:top-10 lg:flex lg:min-h-[calc(100dvh-5rem)] lg:flex-col xl:top-12 xl:min-h-[calc(100dvh-6rem)]">
            <div className="relative w-full max-w-[180px] self-start overflow-hidden rounded-lg bg-border sm:max-w-[200px]">
              <img
                src={portrait}
                alt="Portrait of Poorna Natarajan"
                className="aspect-square w-full object-cover saturate-[1.12] contrast-[1.03]"
              />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-canvas/[0.03]"
              />
            </div>

            <div className="mt-6 min-w-0 md:mt-0 lg:mt-6">
              <p className="font-label text-[10px] font-semibold uppercase tracking-[0.12em] text-primary">
                Profile / Selected Work
              </p>
              <h1 className="mt-3 break-words font-display text-[clamp(43px,12vw,59px)] font-bold leading-[0.86] tracking-[-0.055em] md:text-[clamp(48px,7vw,59px)] lg:text-[clamp(45px,4.2vw,59px)]">
                <span className="block text-ink">Poorna</span>
                <span className="block whitespace-nowrap text-highlight">
                  Natarajan
                </span>
              </h1>
              <p className="font-label mt-5 text-[11px] font-semibold uppercase tracking-[0.08em] text-primary">
                Machine Learning Engineer
              </p>
              <p className="mt-4 max-w-[60ch] text-[14px] font-medium leading-[1.6] text-copy lg:max-w-[29ch]">
                Over the past seven years, I’ve built data and AI systems for
                public-health operations, government workflows, and legal search. That
                work has shown me how much technical decisions can affect the people
                who rely on these systems. I care about helping institutions use
                technology responsibly, and I bring that perspective to every project I
                take on.
              </p>
            </div>

            <div className="mt-5 flex gap-3 md:self-end lg:self-auto">
              <SocialLink href="https://www.linkedin.com" label="Poorna Natarajan on LinkedIn">
                <Linkedin size={16} strokeWidth={1.9} className="fill-current" />
              </SocialLink>
              <SocialLink href="https://github.com" label="Poorna Natarajan on GitHub">
                <Github size={16} strokeWidth={1.9} className="fill-current" />
              </SocialLink>
              <SocialLink href="mailto:pnat614@gmail.com" label="Email Poorna Natarajan">
                <Mail size={16} strokeWidth={1.9} />
              </SocialLink>
            </div>

            <div className="profile-location mt-8 border-t border-border pt-4 md:self-end lg:mt-auto lg:self-auto">
              <p className="text-[12px] font-semibold text-muted">
                Currently based in New York, New York.
              </p>
            </div>
          </div>
        </aside>

        <div className="border-t border-border/75 px-5 py-8 sm:px-8 sm:py-10 md:px-12 lg:border-t-0 lg:px-10 lg:py-10 xl:px-12 xl:py-12 2xl:px-14">
          <div className="grid min-w-0 grid-cols-1 gap-x-8 gap-y-12 xl:grid-cols-[minmax(0,1.16fr)_minmax(320px,0.84fr)]">
            <section id="experience">
              <SectionHeader number="01" title="Experience" />
              <div className="relative space-y-8 before:absolute before:bottom-4 before:left-[3px] before:top-3 before:w-px before:bg-muted/65">
                {experiences.map((experience) => (
                  <article
                    key={experience.company}
                    className="relative grid grid-cols-[20px_minmax(0,1fr)] gap-x-4"
                  >
                    <span
                      aria-hidden="true"
                      className={`relative z-10 mt-[7px] size-2 rounded-full ring-4 ring-canvas ${
                        experience.current ? "bg-primary" : "bg-muted"
                      }`}
                    />
                    <div className="min-w-0">
                      <p
                        className={`font-label text-[11px] font-medium tracking-[0.01em] ${
                          experience.current ? "text-primary" : "text-muted"
                        }`}
                      >
                        {experience.date}
                      </p>
                      <div className="mt-3">
                        <CompanyLogo company={experience.company} />
                        <h3 className="mt-2 break-words text-[15px] font-bold leading-5 text-ink">
                          {experience.title}
                        </h3>
                      </div>
                      <p className="mt-3 max-w-[60ch] text-[14px] font-medium leading-[1.55] text-body">
                        {experience.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <div className="space-y-10">
              <section id="education">
                <SectionHeader number="02" title="Education" />
                <div className="space-y-6">
                  <article>
                    <div className="flex gap-4">
                      <div className="flex size-9 shrink-0 items-center justify-center">
                        <img
                          src={georgiaTechLogo}
                          alt="Georgia Institute of Technology logo"
                          className="size-9 object-contain"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="font-label text-[10px] font-semibold uppercase leading-4 tracking-[0.06em] text-muted">
                          GEORGIA INSTITUTE OF TECHNOLOGY
                        </p>
                        <h3 className="mt-2 text-[15px] font-bold leading-5 text-ink">
                          M.S. in Computer Science
                        </h3>
                        <div className="mt-4 border-t border-border pt-3">
                          <p className="font-label text-[10px] font-semibold uppercase tracking-[0.1em] text-primary">
                            Select coursework
                          </p>
                          <div className="mt-2 grid grid-cols-1 gap-y-1 text-[14px] font-medium leading-7 text-copy sm:grid-cols-2 sm:gap-x-7 sm:gap-y-0 lg:max-w-2xl xl:max-w-none">
                            <div>
                              Artificial Intelligence
                              <br />
                              Deep Learning
                              <br />
                              Information Security
                              <br />
                              Database Systems
                            </div>
                            <div>
                              Machine Learning
                              <br />
                              Knowledge-Based AI
                              <br />
                              Human–Computer Interaction
                              <br />
                              Financial Modeling
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>

                  <article className="flex gap-4">
                    <div className="flex size-9 shrink-0 items-center justify-center">
                      <img
                        src={marylandLogo}
                        alt="University of Maryland logo"
                        className="size-9 object-contain"
                      />
                    </div>
                    <div className="min-w-0">
                      <p className="font-label text-[10px] font-semibold uppercase leading-4 tracking-[0.06em] text-muted">
                        UNIVERSITY OF MARYLAND
                      </p>
                      <h3 className="mt-2 text-[15px] font-bold leading-5 text-ink">
                        B.S. Bioengineering &amp; B.A. Economics
                      </h3>
                    </div>
                  </article>
                </div>
              </section>

              <section id="skills" className="border-t border-border pt-8">
                <SectionHeader number="03" title="Skills" />
                <div className="divide-y divide-border border-y border-border">
                  {skillGroups.map((group, index) => (
                    <div
                      key={group.title}
                      className="grid min-w-0 gap-3 py-4 sm:grid-cols-[145px_minmax(0,1fr)] sm:gap-5"
                    >
                      <div className="flex items-baseline gap-2">
                        <span className="font-label text-[10px] font-semibold text-highlight">
                          0{index + 1}
                        </span>
                        <h3 className="font-label text-[10px] font-semibold uppercase leading-4 tracking-[0.08em] text-primary">
                          {group.title}
                        </h3>
                      </div>
                      <ul
                        className="flex flex-wrap gap-x-3 gap-y-1 text-[13px] font-semibold leading-6 text-ink"
                        aria-label={group.title}
                      >
                        {group.items.map((skill) => (
                          <li
                            key={skill}
                            className="before:mr-1.5 before:text-highlight before:content-['•']"
                          >
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
