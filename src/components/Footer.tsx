import { FooterContainer } from '../styles/components/Footer'
import Image from 'next/image'
import React from 'react'

export function Footer() {
  return (
    <FooterContainer>
      <Image src="/logo.png" alt="Rick and Morty" width={150} height={84} />
      <p>2023 - Guilherme Leandro Rolim</p>
    </FooterContainer>
  )
}
