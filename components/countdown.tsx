'use client'

import { useEffect, useState } from 'react'

function getRemaining(target: number) {
  const diff = Math.max(0, target - Date.now())
  return {
    Days: Math.floor(diff / 86_400_000),
    Hours: Math.floor((diff / 3_600_000) % 24),
    Minutes: Math.floor((diff / 60_000) % 60),
    Seconds: Math.floor((diff / 1000) % 60),
  }
}

export function Countdown({ date }: { date: string }) {
  const target = new Date(date).getTime()
  const [remaining, setRemaining] = useState<ReturnType<typeof getRemaining> | null>(null)

  useEffect(() => {
    setRemaining(getRemaining(target))
    const id = setInterval(() => setRemaining(getRemaining(target)), 1000)
    return () => clearInterval(id)
  }, [target])

  const units = remaining ?? { Days: 0, Hours: 0, Minutes: 0, Seconds: 0 }

  return (
    <div role="timer" aria-label="Countdown to the conference" className="grid grid-cols-4 gap-2 sm:gap-4">
      {Object.entries(units).map(([label, value]) => (
        <div
          key={label}
          className="flex min-w-16 flex-col items-center rounded-md border border-gold bg-card/80 px-2 py-3 outline outline-1 outline-offset-2 outline-gold/40 sm:min-w-24 sm:px-4 sm:py-4"
        >
          <span className="font-serif text-2xl font-semibold tabular-nums text-gold sm:text-4xl">
            {remaining ? String(value).padStart(2, '0') : '--'}
          </span>
          <span className="mt-1 text-[10px] uppercase tracking-widest text-muted-foreground sm:text-xs">{label}</span>
        </div>
      ))}
    </div>
  )
}
