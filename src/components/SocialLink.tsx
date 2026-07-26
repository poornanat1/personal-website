import type { ReactNode } from "react";

interface SocialLinkProps {
  href: string;
  label: string;
  children: ReactNode;
}

export function SocialLink({ href, label, children }: SocialLinkProps) {
  return (
    <a
      href={href}
      aria-label={label}
      className="flex size-10 items-center justify-center rounded-full border border-muted/70 text-ink transition-colors duration-200 hover:border-primary hover:bg-primary hover:text-canvas focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
    >
      {children}
    </a>
  );
}
