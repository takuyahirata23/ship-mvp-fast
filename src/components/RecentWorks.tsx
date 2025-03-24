import React from 'react'
import Image, { type StaticImageData } from 'next/image'
import { ExternalLink } from 'lucide-react'
import snapvoteImg from '../../public/images/snapvote.png'
import liftySaasImg from '../../public/images/liftysaas.png'

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
  image: snapvoteImg,
  url: "https://snapvote.live",
  tags: snapVoteTags
},
{
  name: "LiftySaaS",
  description: "Platform to launch and promote SaaS products to get visibility and boost SEO",
  image: liftySaasImg,
  url: "https://liftysaas.com",
  tags: liftySaaSTags
}
]


type ItemProps = {
  image: StaticImageData
  name: string
  description: string
  tags: string[]
  url: string
}

function Item({ image, name, description, tags, url }: ItemProps) {
  return (
    <li>
      <a href={url} target="_blank" rel="noopener">
        <Card className="p-0 pb-6 overflow-hidden group hover:shadow-lg transition-all">
          <div className="border-b relative overflow-hidden">
            <Image src={image} alt={`${name} Screenshot`} sizes="100vw" priority className="group-hover:scale-[1.03] transition-all duration-300 w-full h-full" />
            <div className="transition-opacity opacity-0 group-hover:opacity-100 absolute inset-0 bg-gray-800/80 duration-300 flex items-center justify-center gap-x-2">
              <ExternalLink className="text-primary-foreground" />
              <span className="text-primary-foreground font-bold text-xl">Visit this project</span>
            </div>
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
