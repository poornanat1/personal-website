interface SectionHeaderProps {
  number: string;
  title: string;
}

export function SectionHeader({ number, title }: SectionHeaderProps) {
  return (
    <header className="mb-6 flex items-end gap-3">
      <span className="mb-1 text-[11px] font-bold text-primary">{number}</span>
      <div>
        <h2 className="font-display text-[28px] font-black uppercase leading-none tracking-[-0.015em] text-ink">
          {title}
        </h2>
        <div className="mt-2 h-[3px] w-28 bg-primary" />
      </div>
    </header>
  );
}
