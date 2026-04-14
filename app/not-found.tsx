import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen max-w-3xl items-center px-4 py-8 sm:px-6 lg:px-8">
      <div className="panel w-full space-y-6 p-8 text-center sm:p-12">
        <p className="eyebrow">Signal Lost</p>
        <h1 className="text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
          这条信号没有被成功捕捉。
        </h1>
        <p className="mx-auto max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
          你打开的可能是一条不存在的路径。没关系，主信号板和职业版履历都还在线。
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link className="signal-link" href="/">
            回到主页
          </Link>
          <Link className="signal-link" href="/resume">
            打开 /resume
          </Link>
        </div>
      </div>
    </main>
  )
}

