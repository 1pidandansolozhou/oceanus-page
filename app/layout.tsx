import type { Metadata, Viewport } from 'next'
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'

import { siteContent } from '@/data/site-content'
import { absoluteUrl, siteUrl } from '@/lib/site-config'

import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteContent.profile.name} | Future Signal Lab`,
    template: `%s | ${siteContent.profile.name}`,
  },
  description:
    '陈浩的互动个人主页：VC 实习生、AI Explorer、coffee chat signal。面向创业者、一级市场和互联网前辈开放连接。',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: `${siteContent.profile.name} | Future Signal Lab`,
    description:
      '不是普通简历页，而是一块正在发光的个人信号板。欢迎 coffee chat。',
    url: absoluteUrl('/'),
    siteName: 'Future Signal Lab',
    locale: 'zh_CN',
    type: 'website',
    images: [
      {
        url: absoluteUrl('/opengraph-image'),
        width: 1200,
        height: 630,
        alt: `${siteContent.profile.name} Future Signal Lab`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteContent.profile.name} | Future Signal Lab`,
    description:
      'VC 实习生、AI Explorer、欢迎 coffee chat 的未来实验台式个人主页。',
    images: [absoluteUrl('/opengraph-image')],
  },
  icons: {
    icon: '/icon.svg',
  },
}

export const viewport: Viewport = {
  themeColor: '#071120',
  colorScheme: 'dark',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html className={`${GeistSans.variable} ${GeistMono.variable}`} lang="zh-CN">
      <body>{children}</body>
    </html>
  )
}

