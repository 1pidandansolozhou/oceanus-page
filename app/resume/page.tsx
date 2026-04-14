import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { siteContent } from '@/data/site-content'

export const metadata: Metadata = {
  title: '职业版履历',
  description: '陈浩的职业版履历页，适合招聘方和前辈快速扫读。',
}

export default function ResumePage() {
  return (
    <main className="mx-auto min-h-screen max-w-5xl px-4 py-6 sm:px-6 lg:px-8">
      <div className="space-y-6">
        <header className="panel p-6 sm:p-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex items-start gap-5">
              <div className="relative h-24 w-24 overflow-hidden rounded-[1.8rem] border border-white/12 bg-white/5">
                <Image
                  alt="陈浩的 Future Signal Lab 头像"
                  fill
                  priority
                  sizes="96px"
                  src={siteContent.profile.avatarSrc}
                />
              </div>

              <div className="space-y-3">
                <div>
                  <p className="eyebrow">Recruiter View</p>
                  <h1 className="text-4xl font-semibold tracking-[-0.05em] text-white">
                    {siteContent.profile.name}
                  </h1>
                  <p className="mt-2 text-base text-slate-300">
                    {siteContent.profile.title}
                  </p>
                </div>

                <p className="max-w-2xl text-sm leading-7 text-slate-300">
                  {siteContent.profile.summary}
                </p>

                <div className="flex flex-wrap gap-2">
                  {siteContent.profile.metrics.map((metric) => (
                    <span className="audience-chip" key={metric.label}>
                      {metric.label}: {metric.value}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {siteContent.contactActions.map((action) => {
                if (action.type === 'link' && action.href) {
                  const isExternal = action.href.startsWith('http')

                  return (
                    <a
                      className="signal-link"
                      href={action.href}
                      key={action.id}
                      rel={isExternal ? 'noreferrer' : undefined}
                      target={isExternal ? '_blank' : undefined}
                    >
                      {action.label}
                    </a>
                  )
                }

                return (
                  <div className="signal-link" key={action.id}>
                    {action.label}: {action.value}
                  </div>
                )
              })}
            </div>
          </div>
        </header>

        <section className="grid gap-6 lg:grid-cols-[1.18fr_0.82fr]">
          <div className="space-y-6">
            <article className="panel-subtle space-y-5">
              <p className="eyebrow">Experience</p>
              {siteContent.timelineItems.map((item) => (
                <div className="space-y-3 border-b border-white/6 pb-5 last:border-b-0 last:pb-0" key={item.id}>
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h2 className="text-xl font-medium tracking-[-0.03em] text-white">
                        {item.title}
                      </h2>
                      <p className="text-sm text-slate-300">{item.org}</p>
                    </div>
                    <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-slate-400">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-sm leading-7 text-slate-300">{item.impact}</p>
                  <ul className="space-y-3 text-sm leading-7 text-slate-400">
                    {item.bullets.map((bullet) => (
                      <li className="flex gap-3" key={bullet}>
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-300/80" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </article>

            <article className="panel-subtle space-y-4">
              <p className="eyebrow">Current focus</p>
              <div className="grid gap-4 md:grid-cols-3">
                {siteContent.projectCards.map((project) => (
                  <div className="rounded-[1.35rem] border border-white/8 bg-white/4 p-4" key={project.id}>
                    <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-cyan-200/80">
                      {project.status}
                    </p>
                    <h3 className="mt-3 text-lg font-medium text-white">{project.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-400">
                      {project.summary}
                    </p>
                  </div>
                ))}
              </div>
            </article>
          </div>

          <div className="space-y-6">
            <article className="panel-subtle space-y-4">
              <p className="eyebrow">Signal summary</p>
              <p className="text-sm leading-7 text-slate-300">
                这是一个兼具表达、连接欲望和行动感的候选人画像：既对一级市场保持敏感，也在用 AI 和轻量工具做自己的产品实验。
              </p>
              <div className="flex flex-wrap gap-2">
                {siteContent.heroTags.map((tag) => (
                  <span className="audience-chip" key={tag.id}>
                    {tag.label}
                  </span>
                ))}
              </div>
            </article>

            <article className="panel-subtle space-y-4">
              <p className="eyebrow">Skills</p>
              {siteContent.skillGroups.map((group) => (
                <div className="space-y-3" key={group.label}>
                  <h3 className="text-base font-medium text-white">{group.label}</h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span className="audience-chip" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </article>

            <article className="panel-subtle space-y-4">
              <p className="eyebrow">Status feed</p>
              <div className="space-y-3">
                {siteContent.statusFeed.map((entry) => (
                  <div className="rounded-[1.2rem] border border-white/8 bg-white/4 p-4" key={entry.id}>
                    <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-cyan-200/80">
                      {entry.label}
                    </p>
                    <p className="mt-2 text-sm leading-7 text-slate-300">{entry.copy}</p>
                  </div>
                ))}
              </div>
            </article>

            <div className="flex flex-wrap gap-2">
              <Link className="signal-link" href="/">
                返回互动主页
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

