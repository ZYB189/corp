import Hero from '@/src/components/hero'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Reliability'
}

export default function Page() {
  return (
    <div>
      <Hero imgUrl="/reliability.jpg" altTxt="Reliability" content="Reliability~~~"/>
    </div>
  )
}
