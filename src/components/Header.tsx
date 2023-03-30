// Next
import Image from 'next/image'

// Components
import { FavoritesButton } from './FavoritesButton'

// Styles
import * as S from '../styles/components/Header'

interface HeaderProps {
  isDarkTheme: boolean
  setIsDarkTheme: (value: boolean) => void
}

export function Header({ isDarkTheme, setIsDarkTheme }: HeaderProps) {
  const handleChangeTheme = () => {
    setIsDarkTheme(!isDarkTheme)
  }

  return (
    <S.HeaderContainer>
      <S.HeaderContent>
        <Image src="/logo.png" alt="Rick and Morty" width={150} height={84} />

        <S.HeaderButtonsContainer>
          <FavoritesButton />
          <S.ToggleTheme>
            <input
              type="checkbox"
              className="input"
              onClick={handleChangeTheme}
            />
            <span className="slider"></span>
          </S.ToggleTheme>
        </S.HeaderButtonsContainer>
      </S.HeaderContent>
    </S.HeaderContainer>
  )
}
