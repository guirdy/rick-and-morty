import { ThemeProvider } from 'styled-components'
import { FavoriteContextProvider } from '../../context/CharContext'
import { fireEvent, render, screen } from '@testing-library/react'
import { defaultTheme } from '../../styles/themes/default'
import { Header } from '../../components/Header'

describe('Header component', () => {
  const setIsDarkTheme = jest.fn()

  it('render correctly', () => {
    render(
      <FavoriteContextProvider>
        <ThemeProvider theme={defaultTheme}>
          <Header isDarkTheme={true} setIsDarkTheme={setIsDarkTheme} />
        </ThemeProvider>
      </FavoriteContextProvider>,
    )

    const toggleSwitch = screen.getByRole('checkbox')
    expect(toggleSwitch).not.toBeChecked()
    fireEvent.click(toggleSwitch)

    expect(setIsDarkTheme).toHaveBeenCalledWith(false)

    expect(screen.getByAltText('Rick and Morty')).toBeInTheDocument()
  })
})
