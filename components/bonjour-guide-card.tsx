import type { ContactAction } from '@/lib/types'

interface BonjourGuideCardProps {
  action: ContactAction
  copiedActionId: string | null
  onCopyAction: (action: ContactAction) => void
}

export function BonjourGuideCard({
  action,
  copiedActionId,
  onCopyAction,
}: BonjourGuideCardProps) {
  return (
    <article className="panel-subtle space-y-5">
      <div className="space-y-3">
        <p className="eyebrow">Bonjour Guide Card</p>
        <h3 className="text-2xl font-semibold tracking-[-0.04em] text-white">
          用小程序见我，体验会更像一次真实的连接。
        </h3>
        <p className="text-sm leading-7 text-slate-300">{action.note}</p>
      </div>

      <div className="rounded-[1.4rem] border border-cyan-300/18 bg-slate-950/70 p-4">
        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-cyan-200/80">
          Bonjour token
        </p>
        <p className="mt-3 break-all font-mono text-sm leading-7 text-white">
          {action.value}
        </p>
      </div>

      <div className="space-y-3 text-sm leading-7 text-slate-300">
        {action.steps?.map((step) => (
          <div className="flex gap-3" key={step}>
            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-300/90" />
            <span>{step}</span>
          </div>
        ))}
      </div>

      {action.helper ? (
        <p className="text-sm leading-7 text-slate-400">{action.helper}</p>
      ) : null}

      <button className="signal-link" onClick={() => onCopyAction(action)} type="button">
        {copiedActionId === action.id ? 'Bonjour 口令已复制' : '复制 Bonjour 口令'}
      </button>
    </article>
  )
}

