export type AudienceKey = 'founder' | 'investor' | 'internet' | 'recruiter'

export type ToneKey = 'cyan' | 'amber' | 'lime' | 'rose'

export type ContactActionType = 'link' | 'copy' | 'guide'

export interface CallToAction {
  label: string
  href?: string
  actionId?: string
  note?: string
}

export interface ProfileMetric {
  label: string
  value: string
}

export interface Profile {
  name: string
  alias: string
  title: string
  base: string
  headline: string
  summary: string
  avatarSrc: string
  heroNote: string
  metrics: ProfileMetric[]
}

export interface AudienceProfile {
  key: AudienceKey
  label: string
  prompt: string
  summary: string
}

export interface HeroTag {
  id: string
  label: string
  description: string
  detail: string
  audiences: AudienceKey[]
  tone: ToneKey
  position: {
    x: number
    y: number
  }
  cta?: CallToAction
}

export interface SignalNode {
  id: string
  title: string
  summary: string
  audiences: AudienceKey[]
  tone: ToneKey
  bullets: string[]
  cta: CallToAction
}

export interface TimelineItem {
  id: string
  period: string
  title: string
  org: string
  kind: 'education' | 'internship' | 'project' | 'community'
  bullets: string[]
  tags: string[]
  impact: string
}

export interface ProjectCard {
  id: string
  title: string
  status: string
  summary: string
  outcome: string
  stack: string[]
}

export interface ContactAction {
  id: string
  label: string
  type: ContactActionType
  value: string
  href?: string
  note: string
  helper?: string
  steps?: string[]
}

export interface ConsolePrompt {
  id: string
  label: string
  command: string
  response: string
  followups: string[]
}

export interface StatusEntry {
  id: string
  label: string
  copy: string
}

export interface SkillGroup {
  label: string
  items: string[]
}

export interface SiteContent {
  profile: Profile
  audiences: AudienceProfile[]
  heroTags: HeroTag[]
  signalNodes: SignalNode[]
  timelineItems: TimelineItem[]
  projectCards: ProjectCard[]
  contactActions: ContactAction[]
  consolePrompts: ConsolePrompt[]
  statusFeed: StatusEntry[]
  skillGroups: SkillGroup[]
}

