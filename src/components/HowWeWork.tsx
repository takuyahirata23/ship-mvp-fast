import React from 'react'

import { Badge } from '@/components/ui/badge'

const steps = [
  {
    label: "Book a call & Share your idea",
    description: "We start with understanding your idea, requirements to create a roadmap"
  },
  {
    label: "Design & Prototyping",
    description: "Visualize the user interface and experience before development begins"
  },
  {
    label: "Development",
    description: "We develop fast with frequent updates. We share our kanban board"
  },
  {
    label: "Launch & Support",
    description: "Launching is not the end of our journey. We provide 2 weeks of support to make sure we have a successful launch"
  }
]

type ItemProps = {
  step: number
  label: string
  description: string
}

function Item({ step, label, description }: ItemProps) {
  return (
    <li className="text-center md:flex md:text-left md:gap-x-4">
      <Badge className="rounded-full p-4 w-10 h-10" >
        <span className="text-bold text-lg">{step}</span>
      </Badge>
      <div className="mt-2 md:self-start md:mt-0">
        <div className="font-medium text-lg">{label}</div>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </li>
  )
}

export function HowWeWork() {
  return (
    <ul className="grid gap-y-8 md:grid-cols-2 md:gap-10 lg:gap-12">
      {steps.map(({ label, description }, i: number) => (
        <Item key={i} step={++i} label={label} description={description} />
      ))}
    </ul>
  )
}
