import { ThemeProvider } from 'styled-components'
import { FavoriteContextProvider } from '../../context/CharContext'
import { render, screen } from '@testing-library/react'
import { defaultTheme } from '../../styles/themes/default'
import CharacterPage, { getStaticProps } from '../../pages/character/[id]'

describe('Character page', () => {
  it('render correctly', () => {
    render(
      <FavoriteContextProvider>
        <ThemeProvider theme={defaultTheme}>
          <CharacterPage
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
    expect(screen.getByText('Alive')).toBeInTheDocument()
    expect(screen.getByText('Male')).toBeInTheDocument()
    expect(screen.getByText('Earth')).toBeInTheDocument()
  })

  it('returns the static props correctly', async () => {
    const response = await getStaticProps({ params: { id: '20' } })

    expect(response).toEqual(
      expect.objectContaining({
        props: {
          character: {
            id: 20,
            name: 'Ants in my Eyes Johnson',
            status: 'unknown',
            species: 'Human',
            type: 'Human with ants in his eyes',
            gender: 'Male',
            origin: {
              name: 'unknown',
              url: '',
            },
            location: {
              name: 'Interdimensional Cable',
              url: 'https://rickandmortyapi.com/api/location/6',
            },
            image: 'https://rickandmortyapi.com/api/character/avatar/20.jpeg',
            episode: ['https://rickandmortyapi.com/api/episode/8'],
            url: 'https://rickandmortyapi.com/api/character/20',
            created: '2017-11-04T22:34:53.659Z',
          },
        },
      }),
    )
  })
})
