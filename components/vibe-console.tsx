'use client'

import { useState } from 'react'

import type { ConsolePrompt } from '@/lib/types'

import { SectionHeader } from './section-header'

interface VibeConsoleProps {
  prompts: ConsolePrompt[]
}

export function VibeConsole({ prompts }: VibeConsoleProps) {
  const [activeId, setActiveId] = useState(prompts[0]?.id ?? '')

  const activePrompt = prompts.find((prompt) => prompt.id === activeId) ?? prompts[0]

  if (!activePrompt) {
    return null
  }

  return (
    <section className="space-y-8" id="console">
      <SectionHeader
        description="我没接一个真的聊天模型进来，而是做了一块“伪终端”。点击问题，就像在问一个更接近真人的我。"
        eyebrow="Vibe Console"
        title="想快速理解我，就直接问。"
      />

      <div className="panel overflow-hidden">
        <div className="flex items-center gap-2 border-b border-white/8 px-6 py-4">
          <span className="h-3 w-3 rounded-full bg-rose-300/70" />
          <span className="h-3 w-3 rounded-full bg-amber-300/70" />
          <span className="h-3 w-3 rounded-full bg-emerald-300/70" />
          <span className="ml-3 font-mono text-[11px] uppercase tracking-[0.28em] text-slate-400">
            future-signal://console
          </span>
        </div>

        <div className="grid gap-6 p-6 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="space-y-3">
            {prompts.map((prompt) => (
              <button
                className="console-command"
                key={prompt.id}
                onClick={() => setActiveId(prompt.id)}
                type="button"
              >
                <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-cyan-200/80">
                  {prompt.id}
                </span>
                <span className="mt-2 block text-base font-medium text-white">
                  {prompt.label}
                </span>
              </button>
            ))}
          </div>

          <div className="panel-subtle min-h-[22rem] space-y-5">
            <div className="space-y-2">
              <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-emerald-200/80">
                $ {activePrompt.command}
              </p>
              <p className="text-base leading-8 text-slate-200">
                {activePrompt.response}
              </p>
            </div>

            <div className="space-y-3">
              <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-slate-400">
                Follow-ups
              </p>
              <div className="flex flex-wrap gap-2">
                {activePrompt.followups.map((item) => (
                  <span className="audience-chip" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

