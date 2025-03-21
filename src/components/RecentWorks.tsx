import React from 'react'
import Image from 'next/image'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from '@/components/ui/badge'

const snapVoteTags = ["Full-Stack Development", "SaaS", "Marketing"]
const liftySaaSTags = ["Full-Stack Development", "SaaS", "Marketing"]

const items = [{
  name: "SnapVote",
  description: "Easy-to-use survey tool that lets you create and embed customizable surveys on your website",
  image: {
    src: "/images/snapvote.png",
    width: 2591,
    height: 1457
  },
  url: "https://snapvote.live",
  tags: snapVoteTags
},
{
  name: "LiftySaaS",
  description: "Platform to launch and promote SaaS products to get visibility and boost SEO",
  image: {
    src: "/images/liftysaas.png",
    width: 2472,
    height: 1391
  },
  url: "https://liftysaas.com",
  tags: liftySaaSTags
}
]


type ItemProps = {
  image: { src: string, width: number, height: number }
  name: string
  description: string
  tags: string[]
  url: string
}

function Item({ image, name, description, tags, url }: ItemProps) {
  return (
    <li>
      <a href={url} target="_blank" rel="noopener">
        <Card className="p-0 pb-6 overflow-hidden">
          <div className="border-b">
            <Image src={image.src} alt={`${name} Screenshot`} width={image.width} height={image.height} priority />
          </div>
          <CardHeader>
            <CardTitle className="font-bold text-xl">
              {name}
            </CardTitle>
            <CardDescription>
              {description}
            </CardDescription>
          </CardHeader>
          <CardContent className="flex gap-x-2">
            {tags.map((tag: string, i: number) =>
              <Badge key={i} variant="secondary">
                {tag}
              </Badge>
            )}
          </CardContent>
        </Card>
      </a>
    </li>
  )
}

export function ReactWorks() {
  return (
    <ul className="grid gap-y-8 md:grid-cols-2 md:gap-x-10">
      {items.map((item, i) => (
        <Item {...item} key={i} />
      ))}
    </ul>
  )
}
