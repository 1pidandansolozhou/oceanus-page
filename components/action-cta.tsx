import type { CallToAction, ContactAction } from '@/lib/types'
import { cn } from '@/lib/utils'

interface ActionCtaProps {
  cta: CallToAction
  actions: Record<string, ContactAction>
  copiedActionId: string | null
  onCopyAction: (action: ContactAction) => void
  className?: string
}

export function ActionCta({
  cta,
  actions,
  copiedActionId,
  onCopyAction,
  className,
}: ActionCtaProps) {
  const linkedAction = cta.actionId ? actions[cta.actionId] : undefined
  const label =
    linkedAction && copiedActionId === linkedAction.id
      ? `${cta.label} · 已复制`
      : cta.label

  const sharedClassName = cn('signal-link', className)

  if (linkedAction?.type === 'link' && linkedAction.href) {
    const isExternal = linkedAction.href.startsWith('http')

    return (
      <a
        className={sharedClassName}
        href={linkedAction.href}
        rel={isExternal ? 'noreferrer' : undefined}
        target={isExternal ? '_blank' : undefined}
      >
        {label}
      </a>
    )
  }

  if (linkedAction) {
    return (
      <button
        className={sharedClassName}
        onClick={() => onCopyAction(linkedAction)}
        type="button"
      >
        {label}
      </button>
    )
  }

  if (cta.href) {
    const isExternal = cta.href.startsWith('http')

    return (
      <a
        className={sharedClassName}
        href={cta.href}
        rel={isExternal ? 'noreferrer' : undefined}
        target={isExternal ? '_blank' : undefined}
      >
        {label}
      </a>
    )
  }

  return null
}

