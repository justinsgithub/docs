import styled from 'styled-components'

interface StyledHeaderProps {
  bg: string
}

export const StyledHeader = styled.header`
background-color: ${({ theme }) => theme.colors.header};
  padding: 0 40px;
`
