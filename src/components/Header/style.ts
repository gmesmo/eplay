import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

export const HeaderBar = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: ${cores.cinza};

  padding: 24px;
  border-radius: 16px;
  margin-bottom: 80px;

  a {
    text-decoration: none;
    color: ${cores.branco};
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;
  }

  @media (max-width: ${breakpoints.tablet}) {
    display: none;
  }
`

export const Links = styled.ul`
  display: flex;
  margin-left: 40px;
`

export const LinkItem = styled.li`
  margin-right: 16px;
`

export const CartButton = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;

  img {
    margin-left: 16px;
  }
`
