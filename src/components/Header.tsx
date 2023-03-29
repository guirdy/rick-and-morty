import Image from 'next/image'
import React from 'react'
import { MdFavorite } from 'react-icons/md'

import * as S from '../styles/components/Header'

export function Header() {
  return (
    <S.HeaderContainer>
      <S.HeaderContent>
        <Image src="/logo.png" alt="Rick and Morty" width={150} height={84} />
        <S.FavoritesListButton>
          <MdFavorite />
        </S.FavoritesListButton>
      </S.HeaderContent>
    </S.HeaderContainer>
  )
}
