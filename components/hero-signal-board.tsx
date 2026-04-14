import Image from 'next/image'

import type { ContactAction, HeroTag, Profile } from '@/lib/types'
import { cn } from '@/lib/utils'

import { ActionCta } from './action-cta'

interface HeroSignalBoardProps {
  profile: Profile
  tags: HeroTag[]
  selectedTag: HeroTag
  contactActions: Record<string, ContactAction>
  copiedActionId: string | null
  dragOffset: { x: number; y: number }
  isDragging: boolean
  onCopyAction: (action: ContactAction) => void
  onSelectTag: (id: string) => void
  onPointerDown: (event: React.PointerEvent<HTMLDivElement>) => void
  onPointerMove: (event: React.PointerEvent<HTMLDivElement>) => void
  onPointerUp: (event: React.PointerEvent<HTMLDivElement>) => void
}

const toneStyles: Record<HeroTag['tone'], string> = {
  cyan: 'border-cyan-400/45 bg-cyan-400/10 text-cyan-100 shadow-[0_0_32px_rgba(34,211,238,0.18)]',
  amber:
    'border-amber-300/50 bg-amber-300/10 text-amber-50 shadow-[0_0_32px_rgba(251,191,36,0.16)]',
  lime: 'border-lime-300/45 bg-lime-300/10 text-lime-50 shadow-[0_0_32px_rgba(163,230,53,0.14)]',
  rose: 'border-rose-300/45 bg-rose-300/10 text-rose-50 shadow-[0_0_32px_rgba(251,113,133,0.14)]',
}

export function HeroSignalBoard({
  profile,
  tags,
  selectedTag,
  contactActions,
  copiedActionId,
  dragOffset,
  isDragging,
  onCopyAction,
  onSelectTag,
  onPointerDown,
  onPointerMove,
  onPointerUp,
}: HeroSignalBoardProps) {
  return (
    <section className="panel relative overflow-hidden p-6 sm:p-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(251,191,36,0.12),transparent_26%)]" />
      <div className="relative grid gap-8 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-7">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-4">
              <div className="relative h-20 w-20 overflow-hidden rounded-3xl border border-white/12 bg-white/6 shadow-[0_24px_60px_rgba(8,145,178,0.18)]">
                <Image
                  alt="陈浩的 Future Signal Lab 头像"
                  fill
                  priority
                  sizes="80px"
                  src={profile.avatarSrc}
                />
              </div>
              <div className="space-y-1">
                <p className="eyebrow">Future Signal Lab</p>
                <p className="text-lg font-medium tracking-[-0.03em] text-white">
                  {profile.name}
                </p>
                <p className="font-mono text-[12px] text-slate-400">
                  {profile.alias} / {profile.base}
                </p>
              </div>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-[11px] uppercase tracking-[0.28em] text-emerald-200">
              <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(110,231,183,0.8)]" />
              Signal live
            </div>
          </div>

          <div className="space-y-4">
            <h1 className="max-w-3xl text-4xl font-semibold tracking-[-0.06em] text-white sm:text-5xl xl:text-6xl">
              {profile.headline}
            </h1>
            <p className="max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
              {profile.summary}
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {profile.metrics.map((metric) => (
              <div className="metric-pill" key={metric.label}>
                <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-cyan-200/80">
                  {metric.label}
                </span>
                <span className="text-sm text-white">{metric.value}</span>
              </div>
            ))}
          </div>

          <div className="panel-subtle max-w-2xl space-y-4">
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-2">
                <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-cyan-200/80">
                  Active tag
                </p>
                <h2 className="text-2xl font-semibold tracking-[-0.04em] text-white">
                  {selectedTag.label}
                </h2>
                <p className="text-sm leading-7 text-slate-300">
                  {selectedTag.description}
                </p>
              </div>
              <span
                className={cn(
                  'hidden rounded-full border px-3 py-1 font-mono text-[11px] uppercase tracking-[0.28em] sm:block',
                  toneStyles[selectedTag.tone],
                )}
              >
                Live
              </span>
            </div>

            <p className="text-sm leading-7 text-slate-400">{selectedTag.detail}</p>

            <div className="flex flex-wrap gap-2">
              {selectedTag.audiences.map((audience) => (
                <span className="audience-chip" key={audience}>
                  {audience}
                </span>
              ))}
            </div>

            {selectedTag.cta ? (
              <ActionCta
                actions={contactActions}
                copiedActionId={copiedActionId}
                cta={selectedTag.cta}
                onCopyAction={onCopyAction}
              />
            ) : null}
          </div>

          <p className="max-w-2xl text-sm leading-7 text-slate-400">
            {profile.heroNote}
          </p>
        </div>

        <div
          className={cn(
            'signal-board relative min-h-[30rem] overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/55 p-4',
            isDragging && 'cursor-grabbing',
          )}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
        >
          <div className="absolute inset-0 rounded-[2rem] border border-cyan-400/12" />
          <div className="absolute inset-4 rounded-[1.5rem] border border-white/8" />
          <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/80 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.28em] text-slate-300">
            <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(103,232,249,0.8)]" />
            Drag to scan
          </div>
          <div className="absolute bottom-4 left-4 max-w-[15rem] text-xs leading-6 text-slate-400">
            点击每一个漂浮标签，你会看到我的另一面。桌面端可以轻拖一下这块板子。
          </div>

          {tags.map((tag, index) => {
            const depth = 0.38 + (index % 3) * 0.24
            const transform = `translate(-50%, -50%) translate(${dragOffset.x * depth}px, ${dragOffset.y * depth}px)`

            return (
              <button
                className={cn(
                  'hero-tag',
                  toneStyles[tag.tone],
                  selectedTag.id === tag.id && 'hero-tag-active',
                )}
                key={tag.id}
                onClick={() => onSelectTag(tag.id)}
                style={{
                  left: `${tag.position.x}%`,
                  top: `${tag.position.y}%`,
                  transform,
                }}
                type="button"
              >
                <span className="font-medium">{tag.label}</span>
                <span className="mt-1 block font-mono text-[10px] uppercase tracking-[0.24em] text-current/70">
                  signal {index + 1}
                </span>
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}

