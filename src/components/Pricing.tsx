import React from 'react'
import { Check } from 'lucide-react'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const items = [{
  label: "Front-End Development",
  description: "Perfect for simple websites",
  price: 799,
  list: [
    "Responsive pages",
    "2 week delivery",
    "SEO optimization",
    "Analytics integration",
    "CMS integration",
    "Hosting and developing setup",
    "1 week post-launch support",
    "Up to 5 pages",
  ]
}, {
  label: "Full-Stack Development",
  description: "Complete solution for your MVP",
  price: 1980,
  list: [
    "Front-End development",
    "Authentication system",
    "Payment integration",
    "API development",
    "Email integration",
    "Cron job setup",
    "4 week delivery",
    "2 week post-launch support"
  ]
}, {
  label: "Monthly Maintenance",
  description: "Ongoing support and maintenance",
  price: 499,
  list: [
    "Feature enhancements",
    "Bug fixes",
    "Security update",
    "Up to 20 hours",
    "Flexible hours",
    "Cancel anytime"
  ]
}]

type ItemProps = {
  label: string
  description: string
  price: number
  list: string[]
}

function Item({ label, description, price, list }: ItemProps) {
  const isFullStack = label === "Full-Stack Development"
  return (
    <li>
      <Card className={isFullStack ? "border-primary border-2 h-full" : "h-full"}>
        <CardHeader>
          <CardTitle className="font-bold text-xl">{label}</CardTitle>
          <div className="flex items-center justify-start gap-x-2">
            <span className="font-bold text-2xl">${price}</span>
            <p className="text-muted-foreground text-sm">Fixed price</p>
          </div>
          <CardDescription>
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {list.map((str, i) => (
              <li key={i} className="flex items-center gap-x-2">
                <Check className={isFullStack ? "text-primary" : ""} />
                <span>{str}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </li>
  )
}

export function Pricing() {
  return (
    <ul className="grid gap-y-6 md:grid-cols-3 md:gap-10 md:auto-rows-fr">
      {items.map(({ label, description, list, price }, i: number) => (
        <Item label={label} description={description} list={list} price={price} key={i} />
      ))}
    </ul>
  )
}
