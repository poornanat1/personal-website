import deloitteLogo from "@/assets/deloitte.png";
import lathamLogo from "@/assets/latham-watkins.png";
import palantirLogo from "@/assets/palantir.png";
import smxLogo from "@/assets/smx.png";
import type { Experience } from "@/data/portfolio";

const logos: Record<
  Experience["company"],
  { src: string; wide?: boolean; alt: string }
> = {
  "Latham & Watkins": { src: lathamLogo, alt: "Latham & Watkins" },
  "Palantir Technologies": { src: palantirLogo, alt: "Palantir Technologies" },
  SMX: { src: smxLogo, wide: true, alt: "SMX" },
  Deloitte: { src: deloitteLogo, alt: "Deloitte" },
};

export function CompanyLogo({ company }: Pick<Experience, "company">) {
  const logo = logos[company];

  return (
    <div className="flex min-h-9 items-center gap-2">
      <div
        className={`flex h-9 shrink-0 items-center justify-center overflow-hidden ${logo.wide ? "w-11" : "w-9"}`}
      >
        <img src={logo.src} alt={`${logo.alt} logo`} className="size-full object-contain" />
      </div>
      <span className="font-label min-w-0 break-words text-[0.62rem] font-semibold uppercase tracking-[0.09em] text-muted">
        {logo.alt}
      </span>
    </div>
  );
}
