import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function Header() {
  return (
    <header className="bg-primary text-primary-foreground fixed top-0 inset-x-0 z-50">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="font-bold">
          <Link href="/">
            Ship MVP Fast
          </Link>
        </div>
        <div>
          <Button variant="secondary" size="sm" asChild className="font-bold">
            <a href="https://cal.com/takuya-hirata-plf82x/15min" target="_blank" rel="noopener">
              Book a call
            </a>
          </Button>
        </div>
      </div>
    </header>
  )
}
