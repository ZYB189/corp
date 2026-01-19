import Hero from '@/src/components/hero'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Scale'
}

export default function Page() {
  return (
    <div>
      <Hero imgUrl="/scale.jpg" altTxt="Scale" content="Scale your app to infinity."/>
    </div>
  )
}
