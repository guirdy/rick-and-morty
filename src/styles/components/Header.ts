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
