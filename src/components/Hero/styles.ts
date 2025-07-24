import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Banner = styled.div`
  position: relative;

  display: block;
  height: 480px;
  width: 100%;

  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;

  padding-top: 16px;

  ${TagContainer} {
    margin-right: 8px;
  }

  &:after {
    position: absolute;
    background-color: #000;

    width: 100%;
    height: 100%;
    top: 0;
    left: 0;

    content: '';
    opacity: 0.56;
  }

  .container {
    position: relative;
    z-index: 1;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    height: 100%;
  }

  @media (max-width: ${breakpoints.tablet}) {
    background-size: cover;
  }
`

export const Infos = styled.div`
  padding: 16px;
  background-color: ${cores.preto};

  max-width: 290px;
  font-weight: bold;

  h2 {
    font-size: 32px;
  }

  p {
    font-size: 18px;
    margin: 16px 0;
  }

  span {
    display: block;
    text-decoration: line-through;
  }
`
