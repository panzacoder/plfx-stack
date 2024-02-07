'use client'

export function SplashBackground({ children }) {
  return (
    <>
      <div className="bg-foreground flex flex-1">
        <div className="bg-splash-gradient flex flex-1 items-center justify-center">
          {children}
        </div>
      </div>
    </>
  )
}
