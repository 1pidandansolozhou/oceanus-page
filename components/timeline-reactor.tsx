'use client'

import { useState } from 'react'

import type { TimelineItem } from '@/lib/types'
import { cn } from '@/lib/utils'

import { SectionHeader } from './section-header'

const kindLabels: Record<TimelineItem['kind'], string> = {
  education: 'Education',
  internship: 'Internship',
  project: 'Project',
  community: 'Community',
}

interface TimelineReactorProps {
  items: TimelineItem[]
}

export function TimelineReactor({ items }: TimelineReactorProps) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? '')

  const activeItem = items.find((item) => item.id === activeId) ?? items[0]

  if (!activeItem) {
    return null
  }

  return (
    <section className="space-y-8" id="timeline">
      <SectionHeader
        description="我把教育、实习、社群和个人实验排成了一条可点开的轨道。你可以把它当作履历，也可以把它当作我最近几年能量流向的示意图。"
        eyebrow="Timeline Reactor"
        title="我的经历更像一条逐渐升温的反应轨。"
      />

      <div className="panel grid gap-6 p-6 sm:p-8 lg:grid-cols-[0.78fr_1.22fr]">
        <div className="space-y-3">
          {items.map((item, index) => (
            <button
              className={cn(
                'timeline-node',
                item.id === activeItem.id && 'timeline-node-active',
              )}
              key={item.id}
              onClick={() => setActiveId(item.id)}
              type="button"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-2 text-left">
                  <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-cyan-200/80">
                    {String(index + 1).padStart(2, '0')} / {kindLabels[item.kind]}
                  </p>
                  <h3 className="text-lg font-medium tracking-[-0.03em] text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-400">{item.org}</p>
                </div>
                <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-slate-500">
                  {item.period}
                </p>
              </div>
            </button>
          ))}
        </div>

        <article className="panel-subtle space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-cyan-300/25 bg-cyan-300/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.24em] text-cyan-100">
              {kindLabels[activeItem.kind]}
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-slate-400">
              {activeItem.period}
            </span>
          </div>

          <div className="space-y-3">
            <h3 className="text-3xl font-semibold tracking-[-0.04em] text-white">
              {activeItem.title}
            </h3>
            <p className="text-base text-slate-300">{activeItem.org}</p>
            <p className="text-sm leading-7 text-slate-400">{activeItem.impact}</p>
          </div>

          <ul className="space-y-3 text-sm leading-7 text-slate-300">
            {activeItem.bullets.map((bullet) => (
              <li className="flex gap-3" key={bullet}>
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-amber-300/80" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2">
            {activeItem.tags.map((tag) => (
              <span className="audience-chip" key={tag}>
                {tag}
              </span>
            ))}
          </div>
        </article>
      </div>
    </section>
  )
}

