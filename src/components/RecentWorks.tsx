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

export function ReactWorks() {
  return (
    <div className="grid gap-y-8 md:grid-cols-2 md:gap-x-10">
      <Card className="p-0 pb-6 overflow-hidden">
        <div className="border-b">
          <Image src={"/images/snapvote.png"} alt="SnapVote Screenshot" width={2728} height={2396} priority />
        </div>
        <CardHeader>
          <CardTitle className="font-bold">
            SnapVote
          </CardTitle>
          <CardDescription>
            Easy-to-use survey tool that lets you create and embed customizable surveys on your website
          </CardDescription>
        </CardHeader>
        <CardContent className="flex gap-x-2">
          {snapVoteTags.map((tag: string, i: number) =>
            <Badge key={i} variant="secondary">
              {tag}
            </Badge>
          )}
        </CardContent>
      </Card>
      <Card className="p-0 pb-6 overflow-hidden">
        <div className="border-b">
          <Image src={"/images/snapvote.png"} alt="LiftySaaS Screenshot" width={2728} height={2396} priority />
        </div>
        <CardHeader>
          <CardTitle className="font-bold">
            LiftySaaS
          </CardTitle>
          <CardDescription>
            Platform to launch and promote SaaS products to get visibility and boost SEO
          </CardDescription>
        </CardHeader>
        <CardContent className="flex gap-x-2">
          {liftySaaSTags.map((tag: string, i: number) =>
            <Badge key={i} variant="secondary">
              {tag}
            </Badge>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
