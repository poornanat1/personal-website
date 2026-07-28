interface SectionHeaderProps {
  number: string;
  title: string;
}

export function SectionHeader({ number, title }: SectionHeaderProps) {
  return (
    <header className="mb-6 flex items-end gap-3">
      <span className="font-label mb-1 text-[10px] font-semibold text-primary">{number}</span>
      <div>
        <h2 className="font-display text-[34px] font-bold leading-none tracking-[-0.035em] text-ink">
          {title}
        </h2>
        <div className="mt-2 h-[3px] w-28 bg-primary" />
      </div>
    </header>
  );
}
