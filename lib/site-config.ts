export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://future-signal-lab.vercel.app'

export function absoluteUrl(path = '/') {
  return new URL(path, siteUrl).toString()
}

