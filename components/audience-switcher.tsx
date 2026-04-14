import type {
  AudienceKey,
  AudienceProfile,
  ContactAction,
  SignalNode,
} from '@/lib/types'
import { cn } from '@/lib/utils'

import { ActionCta } from './action-cta'
import { SectionHeader } from './section-header'

interface AudienceSwitcherProps {
  audienceProfiles: AudienceProfile[]
  selectedAudience: AudienceKey
  nodes: SignalNode[]
  actions: Record<string, ContactAction>
  copiedActionId: string | null
  onAudienceChange: (audience: AudienceKey) => void
  onCopyAction: (action: ContactAction) => void
}

export function AudienceSwitcher({
  audienceProfiles,
  selectedAudience,
  nodes,
  actions,
  copiedActionId,
  onAudienceChange,
  onCopyAction,
}: AudienceSwitcherProps) {
  const activeAudience =
    audienceProfiles.find((item) => item.key === selectedAudience) ??
    audienceProfiles[0]

  return (
    <section className="space-y-8" id="audiences">
      <SectionHeader
        description="我希望不同的人进来，都能在很短时间内找到“和我有关的那一层”。你也可以把这理解成一套针对不同来访者的快速 onboarding。"
        eyebrow="Audience Switcher"
        title="你是谁，我就先把哪一面打亮。"
      />

      <div className="panel space-y-6 p-6 sm:p-8">
        <div className="flex flex-wrap gap-3">
          {audienceProfiles.map((audience) => (
            <button
              className={cn(
                'audience-toggle',
                audience.key === selectedAudience && 'audience-toggle-active',
              )}
              key={audience.key}
              onClick={() => onAudienceChange(audience.key)}
              type="button"
            >
              <span className="text-sm font-medium">{audience.label}</span>
              <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-slate-400">
                {audience.prompt}
              </span>
            </button>
          ))}
        </div>

        <div className="grid gap-4 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="panel-subtle space-y-3">
            <p className="eyebrow">Current audience</p>
            <h3 className="text-2xl font-semibold tracking-[-0.04em] text-white">
              {activeAudience.label}
            </h3>
            <p className="text-sm leading-7 text-slate-300">
              {activeAudience.summary}
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {nodes.map((node) => (
              <article className="panel-subtle flex h-full flex-col gap-4" key={node.id}>
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-3">
                    <h4 className="text-lg font-medium tracking-[-0.03em] text-white">
                      {node.title}
                    </h4>
                    <span className="rounded-full border border-white/12 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.24em] text-slate-300">
                      node
                    </span>
                  </div>
                  <p className="text-sm leading-7 text-slate-300">{node.summary}</p>
                </div>

                <ul className="space-y-3 text-sm leading-7 text-slate-400">
                  {node.bullets.map((bullet) => (
                    <li className="flex gap-3" key={bullet}>
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-300/80" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-2">
                  <ActionCta
                    actions={actions}
                    copiedActionId={copiedActionId}
                    cta={node.cta}
                    onCopyAction={onCopyAction}
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

