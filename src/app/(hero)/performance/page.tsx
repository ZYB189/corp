import Hero from '@/src/components/hero'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Performance'
}

export default function Page() {
  return (
    <div>
      <Hero imgUrl="/performance.jpg" altTxt="Performance" content="Performance~~~"/>
    </div>
  )
}
