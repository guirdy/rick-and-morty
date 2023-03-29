// Next
import Image from 'next/image'

// Components
import { FavoritesButton } from './FavoritesButton'

// Styles
import * as S from '../styles/components/Header'

export function Header() {
  return (
    <S.HeaderContainer>
      <S.HeaderContent>
        <Image src="/logo.png" alt="Rick and Morty" width={150} height={84} />

        <FavoritesButton />
      </S.HeaderContent>
    </S.HeaderContainer>
  )
}
