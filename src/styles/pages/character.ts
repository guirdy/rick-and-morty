import Link from 'next/link'
import styled from 'styled-components'

export const CharacterContainer = styled.div`
  margin: 26px auto 0;
  padding: 0 26px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const GoBack = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0 auto 26px;
  border: 1px solid #fff;
  border-radius: 8px;
  text-transform: none;
  text-decoration: none;
  border: none;
  color: ${(props) => props.theme.colors.gray800};
  background: ${(props) => props.theme.colors.blue};
  padding: 10px;
  transition: all 0.2s;

  &:hover {
    opacity: 0.8;
  }
`

export const Name = styled.h1`
  color: ${(props) => props.theme.colors.blue};
  font-size: ${(props) => props.theme.fontSizes['2xl']};
  margin: 26px auto;
  text-align: center;
`

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${(props) => props.theme.colors.gray800};
  border: 2px solid ${(props) => props.theme.colors.green100};
  margin-bottom: 26px;
  width: 100%;
  max-width: 300px;
  padding: 8px;
  border-radius: 8px;

  > strong {
    color: ${(props) => props.theme.colors.yellow};
    font-size: ${(props) => props.theme.fontSizes.xl};
    text-align: center;
  }

  > span {
    text-align: center;
    font-size: ${(props) => props.theme.fontSizes.md};
  }
`
