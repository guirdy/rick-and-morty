// Next
import Image from 'next/image'

// React
import { useContext } from 'react'

// Context
import { FavoriteContext } from '@/context/CharContext'

// Libs
import { MdOutlineArrowBackIosNew } from 'react-icons/md'

// Styles
import * as S from '../styles/components/Favorites'

export default function Favorites() {
  const { favoritesChar, removeFavoriteChar } = useContext(FavoriteContext)

  const cartQuantity = favoritesChar.length

  return (
    <S.FavoritesContent>
      <S.HeaderContainer>
        <S.GoBack href="/">
          <MdOutlineArrowBackIosNew /> Back
        </S.GoBack>
        <h2>Your favorites</h2>
      </S.HeaderContainer>

      <section>
        {cartQuantity <= 0 ? (
          <p>Your favorites list is empty.</p>
        ) : (
          <>
            {favoritesChar.map((char) => (
              <S.FavoritesChar href={`/character/${char.id}`} key={char.id}>
                <Image
                  width={89}
                  height={89}
                  loader={() => char.image}
                  src={char.image}
                  alt={char.name}
                />
                <S.FavoritesCharDetails>
                  <p>{char.name}</p>
                  <button
                    onClick={(event) => {
                      event.preventDefault()
                      event.stopPropagation()
                      removeFavoriteChar(char.id)
                    }}
                  >
                    Remover
                  </button>
                </S.FavoritesCharDetails>
              </S.FavoritesChar>
            ))}
          </>
        )}
      </section>
    </S.FavoritesContent>
  )
}
