import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.4rem 26px;
  background: ${(props) => props.theme.colors.gray800};

  @media (max-width: 319px) {
    padding: 1.25rem 26px;

    img {
      display: none;
    }
  }
`

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 960px;
  width: 100%;
  gap: 8px;
  align-items: center;
`

export const FavoritesListButton = styled.button`
  display: flex;
  align-items: center;
  border-radius: 8px;
  border: none;
  color: ${(props) => props.theme.colors.gray900};
  font-size: ${(props) => props.theme.fontSizes.md};
  background: ${(props) => props.theme.colors.blue};
  padding: 10px 14px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    opacity: 0.8;
  }
`
