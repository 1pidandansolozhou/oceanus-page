interface SectionHeaderProps {
  eyebrow: string
  title: string
  description: string
}

export function SectionHeader({
  eyebrow,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <div className="max-w-2xl space-y-3">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
        {title}
      </h2>
      <p className="text-sm leading-7 text-slate-300 sm:text-base">
        {description}
      </p>
    </div>
  )
}

