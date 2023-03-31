import { ThemeProvider } from 'styled-components'
import { FavoriteContextProvider } from '../../context/CharContext'
import Favorites from '../../pages/favorites'
import { render, screen } from '@testing-library/react'
import { defaultTheme } from '../../styles/themes/default'

describe('Favorites page', () => {
  it('render correctly', () => {
    render(
      <FavoriteContextProvider>
        <ThemeProvider theme={defaultTheme}>
          <Favorites />
        </ThemeProvider>
      </FavoriteContextProvider>,
    )

    expect(screen.getByText('Your favorites')).toBeInTheDocument()
    expect(screen.getByText('Back')).toBeInTheDocument()
  })
})
