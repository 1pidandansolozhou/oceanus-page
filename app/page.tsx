import { SignalLab } from '@/components/signal-lab'
import { siteContent } from '@/data/site-content'

export default function HomePage() {
  return <SignalLab content={siteContent} />
}

