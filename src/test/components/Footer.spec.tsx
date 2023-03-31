import { ThemeProvider } from 'styled-components'
import { FavoriteContextProvider } from '../../context/CharContext'
import { render, screen } from '@testing-library/react'
import { defaultTheme } from '../../styles/themes/default'
import { Footer } from '../../components/Footer'

describe('Footer component', () => {
  it('render correctly', () => {
    render(
      <FavoriteContextProvider>
        <ThemeProvider theme={defaultTheme}>
          <Footer />
        </ThemeProvider>
      </FavoriteContextProvider>,
    )

    expect(screen.getByAltText('Rick and Morty')).toBeInTheDocument()
    expect(
      screen.getByText('2023 - Guilherme Leandro Rolim'),
    ).toBeInTheDocument()
  })
})
