/** @jsxImportSource react */

import { SplashBackground } from 'app/ui/splash-background'
import Link from 'next/link'
import { cn } from 'app/ui/utils'
import Image from 'next/image'

function MainNav({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn(
        'flex flex-row items-center justify-between space-x-4 lg:space-x-6',
        className
      )}
      {...props}
    >
      <Link href="/">
        <Image src="/plfx-logo.png" width="100" height="100" alt="PLFX logo" />
      </Link>
      <div className="flex flex-row gap-4">
        <Link
          href="/login"
          className="text-primary-foreground hover:text-primary text-md font-medium transition-colors"
        >
          Login
        </Link>
        <Link
          href="/home"
          className="text-primary-foreground hover:text-primary text-md font-medium transition-colors"
        >
          Home
        </Link>
        <Link
          href="/settings"
          className="text-primary-foreground hover:text-primary text-md font-medium transition-colors"
        >
          Settings
        </Link>
      </div>
    </nav>
  )
}

export default function SplashLayout({ children }) {
  return (
    <SplashBackground>
      <div className="items-between flex h-full max-w-3xl flex-1 flex-col gap-4 pt-8">
        <MainNav />
        <div className="m-auto flex w-fit">{children}</div>
      </div>
    </SplashBackground>
  )
}
