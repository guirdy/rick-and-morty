import Link from 'next/link'
import styled from 'styled-components'

export const CharContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1080px;
  margin: auto;
  padding: 26px;
  flex-wrap: wrap;
  gap: 26px;
`

export const CharContent = styled(Link)`
  border: 2px solid ${(props) => props.theme.colors.green100};
  border-radius: 16px;
  overflow: hidden;
  text-decoration: none;
  color: ${(props) => props.theme.colors.gray100};
  transition: all 0.2s;
  margin-bottom: 0;
  background: ${(props) => props.theme.colors.gray800};

  &:hover {
    transform: translateY(-03%);
  }

  > span {
    display: block;
    padding: 1rem;
    text-align: center;
  }
`

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  gap: 26px;
  margin-bottom: 56px;
`

export const BackButton = styled.button`
  border-radius: 4px;
  border: none;
  color: ${(props) => props.theme.colors.gray900};
  font-size: ${(props) => props.theme.fontSizes.sm};
  background: ${(props) => props.theme.colors.yellow};
  padding: 8px 16px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

export const NextButton = styled.button`
  border-radius: 4px;
  border: none;
  color: ${(props) => props.theme.colors.gray900};
  font-size: ${(props) => props.theme.fontSizes.sm};
  background: ${(props) => props.theme.colors.blue};
  padding: 8px 16px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`
