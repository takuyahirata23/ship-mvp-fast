import React from 'react'
import { X, Check } from 'lucide-react'

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const traditional = ["Months to launch", "$10,000+ for a basic MVP", "Slow response", "Hidden costs"]
const smf = ["Fast. Launch in weeks, not months", "$1000 ~ $25000 for MVP", "Quick response", "Clear pricing"]


export function ComparisonCards() {
  return (
    <div className="grid gap-y-6">
      <Card className="border-destructive border-2 text-center" >
        <CardHeader className="gap-0">
          <CardTitle className="font-bold text-xl text-destructive">Traditional Approach</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {traditional.map((item: string, i: number) => (
              <li key={i} className="flex items-center gap-x-2">
                <X className="text-destructive" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
      <Card className="border-primary border-2 text-center" >
        <CardHeader className="gap-0">
          <CardTitle className="font-bold text-xl text-primary">Ship MVP Fast</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {smf.map((item: string, i: number) => (
              <li key={i} className="flex items-center gap-x-2">
                <Check className="text-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
