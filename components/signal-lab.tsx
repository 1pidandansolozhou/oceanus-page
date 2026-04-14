'use client'

import Link from 'next/link'
import { useRef, useState } from 'react'

import type { AudienceKey, ContactAction, SiteContent } from '@/lib/types'
import { clamp } from '@/lib/utils'

import { AudienceSwitcher } from './audience-switcher'
import { BonjourGuideCard } from './bonjour-guide-card'
import { HeroSignalBoard } from './hero-signal-board'
import { ProjectDeck } from './project-deck'
import { SectionHeader } from './section-header'
import { TimelineReactor } from './timeline-reactor'
import { VibeConsole } from './vibe-console'

interface SignalLabProps {
  content: SiteContent
}

interface DragSnapshot {
  pointerId: number
  startX: number
  startY: number
  baseX: number
  baseY: number
}

export function SignalLab({ content }: SignalLabProps) {
  const [selectedTagId, setSelectedTagId] = useState(content.heroTags[0]?.id ?? '')
  const [selectedAudience, setSelectedAudience] = useState<AudienceKey>('founder')
  const [copiedActionId, setCopiedActionId] = useState<string | null>(null)
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const dragSnapshotRef = useRef<DragSnapshot | null>(null)

  const selectedTag =
    content.heroTags.find((tag) => tag.id === selectedTagId) ?? content.heroTags[0]

  const actions = Object.fromEntries(
    content.contactActions.map((action) => [action.id, action]),
  ) as Record<string, ContactAction>

  const audienceNodes = content.signalNodes.filter((node) =>
    node.audiences.includes(selectedAudience),
  )

  async function handleCopyAction(action: ContactAction) {
    let copied = false

    try {
      await navigator.clipboard.writeText(action.value)
      copied = true
    } catch {
      const input = document.createElement('textarea')
      input.value = action.value
      input.style.position = 'fixed'
      input.style.opacity = '0'
      document.body.appendChild(input)
      input.select()
      copied = document.execCommand('copy')
      document.body.removeChild(input)
    }

    if (copied) {
      setCopiedActionId(action.id)
      window.setTimeout(() => setCopiedActionId((current) => (current === action.id ? null : current)), 2200)
    }
  }

  function handlePointerDown(event: React.PointerEvent<HTMLDivElement>) {
    if (window.innerWidth < 768) {
      return
    }

    dragSnapshotRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      baseX: dragOffset.x,
      baseY: dragOffset.y,
    }

    setIsDragging(true)
    event.currentTarget.setPointerCapture(event.pointerId)
  }

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    const snapshot = dragSnapshotRef.current

    if (!snapshot || snapshot.pointerId !== event.pointerId) {
      return
    }

    setDragOffset({
      x: clamp(snapshot.baseX + (event.clientX - snapshot.startX), -34, 34),
      y: clamp(snapshot.baseY + (event.clientY - snapshot.startY), -28, 28),
    })
  }

  function handlePointerUp(event: React.PointerEvent<HTMLDivElement>) {
    const snapshot = dragSnapshotRef.current

    if (!snapshot || snapshot.pointerId !== event.pointerId) {
      return
    }

    dragSnapshotRef.current = null
    setIsDragging(false)
    event.currentTarget.releasePointerCapture(event.pointerId)
  }

  const bonjourAction = actions.bonjour

  return (
    <main className="signal-shell">
      <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col gap-8 px-4 py-5 sm:px-6 lg:px-8">
        <header className="sticky top-0 z-30 flex flex-col gap-4 rounded-[1.7rem] border border-white/10 bg-slate-950/72 px-5 py-4 backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 font-mono text-sm uppercase tracking-[0.32em] text-cyan-100">
              CH
            </div>
            <div>
              <p className="text-sm font-medium tracking-[-0.02em] text-white">
                陈浩 · Future Signal Lab
              </p>
              <p className="font-mono text-[11px] uppercase tracking-[0.26em] text-slate-400">
                social signal / resume / coffee chat
              </p>
            </div>
          </div>

          <nav className="flex flex-wrap gap-2 text-sm text-slate-300">
            <a className="nav-link" href="#audiences">
              Audience
            </a>
            <a className="nav-link" href="#timeline">
              Timeline
            </a>
            <a className="nav-link" href="#builds">
              Builds
            </a>
            <a className="nav-link" href="#console">
              Console
            </a>
            <a className="nav-link" href="#contact">
              Contact
            </a>
            <Link className="nav-link nav-link-strong" href="/resume">
              /resume
            </Link>
          </nav>
        </header>

        <div className="status-marquee">
          <div className="status-track">
            {[...content.statusFeed, ...content.statusFeed].map((entry, index) => (
              <div className="status-pill" key={`${entry.id}-${index}`}>
                <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-cyan-200/80">
                  {entry.label}
                </span>
                <span className="text-sm text-slate-200">{entry.copy}</span>
              </div>
            ))}
          </div>
        </div>

        <HeroSignalBoard
          contactActions={actions}
          copiedActionId={copiedActionId}
          dragOffset={dragOffset}
          isDragging={isDragging}
          onCopyAction={handleCopyAction}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onSelectTag={setSelectedTagId}
          profile={content.profile}
          selectedTag={selectedTag}
          tags={content.heroTags}
        />

        <AudienceSwitcher
          actions={actions}
          audienceProfiles={content.audiences}
          copiedActionId={copiedActionId}
          nodes={audienceNodes}
          onAudienceChange={setSelectedAudience}
          onCopyAction={handleCopyAction}
          selectedAudience={selectedAudience}
        />

        <TimelineReactor items={content.timelineItems} />

        <div className="grid gap-8 xl:grid-cols-[1.06fr_0.94fr]">
          <ProjectDeck projects={content.projectCards} />
          <VibeConsole prompts={content.consolePrompts} />
        </div>

        <section className="space-y-8" id="contact">
          <SectionHeader
            description="我把联系入口做得尽量清楚，但不想让它变成生硬的按钮区。你可以正式联系，也可以轻轻地发来一句“嗨，想聊聊”。"
            eyebrow="Contact Rail"
            title="如果你愿意，我们就在这里接上。"
          />

          <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
            {bonjourAction ? (
              <BonjourGuideCard
                action={bonjourAction}
                copiedActionId={copiedActionId}
                onCopyAction={handleCopyAction}
              />
            ) : null}

            <div className="panel-subtle flex flex-col gap-5">
              <div className="space-y-3">
                <p className="eyebrow">Direct actions</p>
                <h3 className="text-2xl font-semibold tracking-[-0.04em] text-white">
                  你可以按你舒服的方式来找我。
                </h3>
              </div>

              <div className="grid gap-3">
                {content.contactActions
                  .filter((action) => action.id !== 'bonjour')
                  .map((action) => {
                    const isLink = action.type === 'link' && action.href
                    const isExternal = action.href?.startsWith('http')

                    return (
                      <div className="contact-card" key={action.id}>
                        <div className="space-y-2">
                          <p className="text-base font-medium text-white">{action.label}</p>
                          <p className="text-sm leading-7 text-slate-300">{action.note}</p>
                        </div>

                        {isLink ? (
                          <a
                            className="signal-link"
                            href={action.href}
                            rel={isExternal ? 'noreferrer' : undefined}
                            target={isExternal ? '_blank' : undefined}
                          >
                            打开
                          </a>
                        ) : (
                          <button
                            className="signal-link"
                            onClick={() => handleCopyAction(action)}
                            type="button"
                          >
                            {copiedActionId === action.id ? '已复制' : '复制'}
                          </button>
                        )}
                      </div>
                    )
                  })}
              </div>

              <div className="rounded-[1.5rem] border border-white/8 bg-white/4 p-4 text-sm leading-7 text-slate-400">
                <p>
                  这张主页的目标不是把我包装成一个“无菌候选人”，而是更真实地展示我此刻在思考什么、在靠近什么、以及我想和谁发生连接。
                </p>
              </div>
            </div>
          </div>
        </section>

        <footer className="flex flex-col gap-3 rounded-[1.7rem] border border-white/8 bg-slate-950/68 px-5 py-5 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>Future Signal Lab for 陈浩 · 互动主页 + 职业版履历双视图</p>
          <div className="flex flex-wrap gap-3">
            <Link className="nav-link" href="/resume">
              Recruiter view
            </Link>
            <a className="nav-link" href="#contact">
              Coffee chat
            </a>
          </div>
        </footer>
      </div>
    </main>
  )
}

