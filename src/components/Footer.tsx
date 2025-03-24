import React from 'react'
import Link from 'next/link'
import { Twitter, Headset } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="grid gap-y-6 md:grid-cols-3 gap-x-8">
          <div className="flex items-center justify-between md:flex-col md:items-start md:justify-start">
            <div className="font-bold text-lg md:text-xl">
              <Link href="/">
                🚀 Ship MVP Fast
              </Link>
            </div>
            <div className="md:mt-6 flex gap-x-4">
              <a href="https://x.com/tkhirata21" rel="noopener" target="_blank" aria-label="View my twiiter account">
                <Twitter />
              </a>
              <a href="https://cal.com/takuya-hirata-plf82x/15min" target="_blank" rel="noopener" aria-label="Book a call">
                <Headset />
              </a>
            </div>
          </div>
          <div>
            <div className="font-bold text-lg md:text-xl">Legal</div>
            <ul className="mt-6 space-y-3">
              <li>
                <Link href="/privacy-policy">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="font-bold text-lg md:text-xl">Recent Work</div>
            <ul className="mt-6 space-y-3">
              <li>
                <a href="https://snapvote.live" target="_blank" rel="noopener" aria-label="Visit SnapVote">
                  SnapVote
                </a>
              </li>
              <li>
                <a href="https://liftysaas.com" target="_blank" rel="noopener" aria-label="Visit LiftySaaS">
                  LiftySaaS
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 md:mt-16">
          <p className="text-sm text-center">© 2025 Ship MVP Fast. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
