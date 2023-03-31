import { ThemeProvider } from 'styled-components'
import { FavoriteContextProvider } from '../../context/CharContext'
import { render, screen } from '@testing-library/react'
import { defaultTheme } from '../../styles/themes/default'
import { CharCard } from '../../components/CharCard'

describe('Character card component', () => {
  it('render correctly', () => {
    render(
      <FavoriteContextProvider>
        <ThemeProvider theme={defaultTheme}>
          <CharCard
            character={{
              id: 1,
              name: 'Rick Sanchez',
              status: 'Alive',
              species: 'Human',
              type: '',
              gender: 'Male',
              origin: {
                name: 'Earth',
                url: 'https://rickandmortyapi.com/api/location/1',
              },
              location: {
                name: 'Earth',
                url: 'https://rickandmortyapi.com/api/location/20',
              },
              image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
              episode: [
                'https://rickandmortyapi.com/api/episode/1',
                'https://rickandmortyapi.com/api/episode/2',
              ],
              url: 'https://rickandmortyapi.com/api/character/1',
              created: '2017-11-04T18:48:46.250Z',
            }}
          />
        </ThemeProvider>
      </FavoriteContextProvider>,
    )

    expect(screen.getByText('Rick Sanchez')).toBeInTheDocument()
    expect(screen.getByAltText('Rick Sanchez')).toBeInTheDocument()
  })
})
