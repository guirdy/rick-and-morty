import { ThemeProvider } from 'styled-components'
import { FavoriteContextProvider } from '../../context/CharContext'
import Home, { getStaticProps } from '../../pages'
import { render, screen } from '@testing-library/react'
import { defaultTheme } from '../../styles/themes/default'

describe('Home page', () => {
  it('render correctly', () => {
    render(
      <FavoriteContextProvider>
        <ThemeProvider theme={defaultTheme}>
          <Home
            res={{
              info: {
                count: 826,
                pages: 42,
                next: 'https://rickandmortyapi.com/api/character/?page=2',
                prev: null,
              },
              results: [
                {
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
                  image:
                    'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
                  episode: [
                    'https://rickandmortyapi.com/api/episode/1',
                    'https://rickandmortyapi.com/api/episode/2',
                  ],
                  url: 'https://rickandmortyapi.com/api/character/1',
                  created: '2017-11-04T18:48:46.250Z',
                },
              ],
            }}
          />
        </ThemeProvider>
      </FavoriteContextProvider>,
    )

    expect(screen.getByText('Rick Sanchez')).toBeInTheDocument()
  })

  it('should return characters', async () => {
    const result = await getStaticProps()
    const characters = result.props.res.results

    expect(characters).toBeDefined()
    expect(characters.length).toBeGreaterThan(0)
  })
})
