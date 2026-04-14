'use client'

import { useState } from 'react'

import type { ProjectCard } from '@/lib/types'
import { cn } from '@/lib/utils'

import { SectionHeader } from './section-header'

interface ProjectDeckProps {
  projects: ProjectCard[]
}

export function ProjectDeck({ projects }: ProjectDeckProps) {
  const [activeId, setActiveId] = useState(projects[0]?.id ?? '')

  const activeProject = projects.find((project) => project.id === activeId) ?? projects[0]

  if (!activeProject) {
    return null
  }

  return (
    <section className="space-y-8" id="builds">
      <SectionHeader
        description="这里不是传统作品集，而是一个更轻、更像试验日志的 Build Deck。它关心我正在把哪些感兴趣的问题，变成真正可被触摸的体验。"
        eyebrow="Build Deck"
        title="我更想做能快速落地的小系统。"
      />

      <div className="grid gap-4 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="grid gap-4">
          {projects.map((project) => (
            <button
              className={cn(
                'panel text-left transition-transform hover:-translate-y-1',
                project.id === activeProject.id && 'border-cyan-300/28 shadow-[0_28px_70px_rgba(34,211,238,0.14)]',
              )}
              key={project.id}
              onClick={() => setActiveId(project.id)}
              type="button"
            >
              <div className="space-y-4 p-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="text-xl font-medium tracking-[-0.03em] text-white">
                    {project.title}
                  </h3>
                  <span className="rounded-full border border-white/12 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.24em] text-slate-300">
                    {project.status}
                  </span>
                </div>
                <p className="text-sm leading-7 text-slate-300">{project.summary}</p>
              </div>
            </button>
          ))}
        </div>

        <aside className="panel-subtle space-y-5 p-6">
          <p className="eyebrow">Current focus</p>
          <h3 className="text-3xl font-semibold tracking-[-0.04em] text-white">
            {activeProject.title}
          </h3>
          <p className="text-sm leading-7 text-slate-300">{activeProject.outcome}</p>

          <div className="space-y-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-cyan-200/80">
              Stack / Moodboard
            </p>
            <div className="flex flex-wrap gap-2">
              {activeProject.stack.map((item) => (
                <span className="audience-chip" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </section>
  )
}

